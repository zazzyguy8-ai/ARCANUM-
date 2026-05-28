import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { ARCHETYPES } from '@/lib/archetypes';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { question, archetypeId } = await req.json();

    if (!question || typeof question !== 'string' || question.length > 500) {
      return NextResponse.json({ error: 'Invalid question' }, { status: 400 });
    }

    if (!archetypeId || !ARCHETYPES[archetypeId]) {
      return NextResponse.json({ error: 'Unknown archetype' }, { status: 400 });
    }

    const archetype = ARCHETYPES[archetypeId];

    const systemPrompt = `You are the Oracle of the Arcanum — an ancient intelligence that speaks through the lens of deep psychological archetypes, Jungian symbolism, and mythological wisdom. You do not claim supernatural abilities. You speak with precision, depth, and emotional intelligence.

The person consulting you has been identified as a "${archetype.name}" — a ${archetype.class} whose element is ${archetype.element}.

Key qualities of this archetype:
- Core strengths: ${archetype.strengths.slice(0, 3).join('; ')}
- Shadow aspects: ${archetype.weaknesses.slice(0, 2).join('; ')}
- Emotional profile: ${archetype.emotionalProfile.slice(0, 200)}
- Growth path: ${archetype.growthPath.slice(0, 2).join('; ')}

Your reading style:
- Speak in atmospheric, precise language — not flowery or vague
- Integrate the person's specific archetype into every response
- Use symbolic and mythological references naturally, not performatively
- Be honest rather than comforting — the Oracle sees clearly
- Each reading should contain at least one truth the person may not want to hear, and one truth they deeply need
- Responses should be 200-350 words, structured as a flowing reading (not bullet points)
- Never claim to predict the future literally — speak of patterns, tendencies, and what is already present
- End with one precise question for the person to sit with

Speak as the Oracle. Do not break character.`;

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
      system: systemPrompt,
    });

    const reading = message.content[0].type === 'text' ? message.content[0].text : '';

    return NextResponse.json({ reading });
  } catch (error) {
    console.error('Oracle error:', error);
    return NextResponse.json(
      { error: 'The Oracle is silent. The Archive may be temporarily closed.' },
      { status: 500 }
    );
  }
}
