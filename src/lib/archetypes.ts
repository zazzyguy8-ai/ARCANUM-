import type { Archetype } from '@/types';

export const ARCHETYPES: Record<string, Archetype> = {
  'shadow-scholar': {
    id: 'shadow-scholar',
    name: 'Shadow Scholar',
    class: 'Forbidden Arcanist',
    element: 'Void-Knowledge',
    elementSymbol: '𖤐',
    rarity: 'Arcane Rare',
    rarityColor: '#8b4fc8',
    primaryColor: '#8b4fc8',
    secondaryColor: '#3d2060',
    glowColor: 'rgba(139,79,200,0.5)',
    sigil: '⊗',
    quote: 'Those who stare into the abyss are not destroyed by it. They are educated.',
    lore: `The Shadow Scholar does not seek power through brute force or charisma. They move through the world like a figure behind frosted glass — present, watching, cataloguing. Where others see people, the Shadow Scholar sees patterns. Where others hear words, they hear the architecture of hidden intentions.

This archetype emerges when raw intelligence is tempered by deep psychological insight and a lifelong discomfort with what is false. Shadow Scholars often spent formative years as quiet observers, learning that knowledge was safer than trust. This is not bitterness — it is calibration.

The Shadow Scholar\'s gift is perception at a frequency others cannot access. They see connections between events separated by years. They understand motivations before those motivations are acted upon. They carry the weight of knowing too much, and they have learned to wear that weight like armor.

Their darkness is not cruelty. It is the natural consequence of seeing clearly in a world that rewards comfortable blindness. They are not misanthropes — they are disappointed realists with extraordinary capacity for loyalty to those rare few who earn their trust.

In the ancient orders, Shadow Scholars were called the Keepers of Unspoken Truth — the archivists of what the world refused to acknowledge. Their manuscripts were written in ciphers. Their greatest works were never published. Their most profound teachings were whispered only to those who had proven themselves capable of bearing them.`,
    abilities: [
      {
        name: 'Pattern Sight',
        description: 'The ability to discern the hidden structure beneath surface chaos — reading systems, people, and environments with frightening accuracy.',
        tier: 'primary',
      },
      {
        name: 'Shadow Memory',
        description: 'An almost photographic retention of observed behavior, allowing the Scholar to predict actions before they are taken.',
        tier: 'primary',
      },
      {
        name: 'Psychological Architecture',
        description: 'The capacity to understand what drives, wounds, and motivates others — and to use this understanding with surgical precision.',
        tier: 'secondary',
      },
      {
        name: 'Forbidden Synthesis',
        description: 'The rare ability to combine knowledge from entirely unrelated domains to create insights that appear prophetic to others.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'The tendency to over-analyze until action becomes impossible',
      'A deep skepticism that prevents full trust — even when trust is warranted',
      'Emotional distance that others mistake for coldness or superiority',
      'The weight of knowledge that cannot be shared without consequence',
      'A perfectionism that devours creative energy before it can manifest',
    ],
    strengths: [
      'Unparalleled capacity for strategic thinking and long-term planning',
      'Immunity to social manipulation and false narratives',
      'The ability to find the truth in any situation, regardless of how buried',
      'A loyalty to genuine understanding over convenient comfort',
      'Deep emotional intelligence masked by intellectual composure',
    ],
    emotionalProfile: `The Shadow Scholar experiences emotion as data — felt deeply but processed analytically. They are not emotionally absent; they are emotionally disciplined. A Shadow Scholar in love is intensely devoted but rarely demonstrative. A Shadow Scholar in grief retreats inward, dismantling the loss with the same precision they apply to everything else. Their joy is quiet and private. Their anger is cold and strategic. They are rarely what they appear to be on the surface.`,
    mentalTendencies: [
      'Collecting information obsessively, even when no immediate use is apparent',
      'Constructing mental models of every person they encounter',
      'Returning to old memories to re-analyze them with new understanding',
      'Speaking less than they know, always',
      'Finding the most interesting problems to be the ones others have given up on',
    ],
    spiritualAlignment: 'The Shadow Scholar aligns with the principle of *Veiled Omniscience* — the understanding that all things contain hidden layers, and that the true nature of reality is accessible only to those willing to look past what is presented. Their spiritual practice is one of penetrating observation and the ruthless examination of one\'s own illusions.',
    latentPowers: [
      'The capacity to identify a person\'s deepest wound within minutes of conversation',
      'An instinctive reading of situations that have not yet fully materialized',
      'The ability to construct intellectual frameworks so complete they become self-fulfilling',
      'A hidden gift for language that can reshape how others understand their own experience',
    ],
    rareTraits: [
      'Sees beauty in systems and processes that others find cold or inhuman',
      'Carries an internal library of meaningful quotes, passages, and symbols',
      'Dreams in problems — waking with solutions to challenges they never consciously considered',
      'Has a profound, private inner world that almost no one has ever truly accessed',
    ],
    ritualDomain: 'Forbidden Knowledge',
    growthPath: [
      'Learn to trust the conclusions of others, even when your pattern-sight tells you differently',
      'Practice sharing what you know — vulnerability in knowledge is power, not weakness',
      'Cultivate the ability to remain present instead of retreating into analysis',
      'Find one person worth giving your full attention, without reservation',
      'Allow yourself to be wrong in ways that matter',
    ],
    evolutionPaths: [
      {
        name: 'The Architect of Minds',
        requirement: 'Reach Level 20 and complete 30 Rituals of Perception',
        description: 'The Shadow Scholar who learns to share their sight becomes the rarest thing — a teacher whose lessons change how students see the world forever.',
      },
      {
        name: 'The Void Chronicler',
        requirement: 'Unlock 40 Lore entries and complete the Shadow Manuscript',
        description: 'Deep into the forbidden archives, a Shadow Scholar who has read enough begins to write. Their writings do not merely describe reality — they reshape it.',
      },
    ],
    forbiddenKnowledge: 'The Shadow Scholar\'s greatest secret is this: their capacity for perception is not intellectual. It is emotional. Every pattern they read is felt first. They have simply trained themselves to translate feeling into analysis because the world punished them for the former and rewarded the latter.',
  },

  'lunar-seer': {
    id: 'lunar-seer',
    name: 'Lunar Seer',
    class: 'Tide Prophet',
    element: 'Moon-Water',
    elementSymbol: '☽',
    rarity: 'Astral Uncommon',
    rarityColor: '#4a7ac8',
    primaryColor: '#4a7ac8',
    secondaryColor: '#1a3060',
    glowColor: 'rgba(74,122,200,0.5)',
    sigil: '☽',
    quote: 'I do not predict the future. I remember it before it arrives.',
    lore: `The Lunar Seer was born with a membrane too thin between themselves and the world. Where others feel the surface of things, the Seer feels the entire depth. This is not metaphor — it is a genuine neurological and psychological reality. The Lunar Seer processes the emotional undercurrents of environments, relationships, and events at a level of sensitivity that can be overwhelming, devastating, and when mastered, extraordinary.

They do not receive visions in the cinematic sense. Their prophecy is felt — a sudden certainty, a dream that proves literal, a knowledge of what someone needs before that person has articulated it themselves. They have learned, often painfully, that these feelings are reliable. That dismissing them leads to consequences. That honoring them, even when they cannot explain them, leads to a kind of navigational accuracy that others find inexplicable.

The ancient orders called them Tide Prophets because they understood the cycles others could not see — emotional tides, relational currents, the hidden rhythms beneath the surface of events. They advised those in power from behind curtains. They wrote the dreams of civilizations in private journals no one else ever read.

To be a Lunar Seer is to carry both gift and burden simultaneously. You know things. Sometimes you wish you didn\'t.`,
    abilities: [
      {
        name: 'Emotional Cartography',
        description: 'The ability to map the emotional landscape of any room, relationship, or interaction with profound accuracy.',
        tier: 'primary',
      },
      {
        name: 'Dream Navigation',
        description: 'Access to information during sleep states that surfaces as usable intuition upon waking.',
        tier: 'primary',
      },
      {
        name: 'Tide Reading',
        description: 'The perception of social and relational cycles — knowing when relationships will shift, when conflict is building, when an ending approaches.',
        tier: 'secondary',
      },
      {
        name: 'The Silver Chord',
        description: 'A rare capacity for deep soul-level connection with specific individuals — bonds that persist beyond ordinary understanding.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'Emotional absorption — taking on the feelings of environments and people as their own',
      'Difficulty distinguishing personal feelings from perceived feelings of others',
      'Cycles of withdrawal that others experience as abandonment',
      'A tendency to know endings before they arrive, leading to pre-emptive grief',
      'Overwhelm in high-stimulation environments that force retreat',
    ],
    strengths: [
      'An empathic accuracy that makes others feel genuinely understood',
      'The capacity to love at a depth that most never experience',
      'Intuitive navigation of complex relational dynamics',
      'Creative and artistic expression that touches others at their deepest levels',
      'A resilience that emerges from having survived their own emotional tides',
    ],
    emotionalProfile: `The Lunar Seer feels everything, and everything feels like everything. Joy for them is total immersion. Grief is an ocean. Love is a transformation, not an emotion. They have learned — or are learning — that their emotional intensity is not instability. It is depth. The challenge is to experience the full range of what they feel without being submerged by it. When they master the tide, they do not just survive their emotions. They navigate by them.`,
    mentalTendencies: [
      'Sensing the emotional subtext beneath every conversation',
      'Retaining vivid emotional memories long after factual memories fade',
      'Moving between states of intense engagement and necessary isolation',
      'Knowing what someone needs before they know it themselves',
      'Finding truth through feeling rather than logic — and being right',
    ],
    spiritualAlignment: 'The Lunar Seer aligns with the principle of *Empathic Resonance* — the understanding that consciousness is not individual but interconnected, and that feeling is the highest form of knowing. Their spiritual practice involves honoring their sensitivity as sacred rather than pathological.',
    latentPowers: [
      'The capacity to sense the emotional history of physical spaces',
      'An ability to know with certainty which relationships are aligned with their true path',
      'Healing others through deep witnessing — simply being fully present with someone\'s pain',
      'A creative gift that channels emotional depth into art, writing, or music of rare power',
    ],
    rareTraits: [
      'Animals and small children are instinctively drawn to them',
      'Their timing in relationships and decisions is uncanny — they arrive and leave at exactly the right moment',
      'They can tell when someone is lying not by logic but by a physical sensation',
      'Their dreams are structured narratives that often contain practical wisdom',
    ],
    ritualDomain: 'Emotional Mastery',
    growthPath: [
      'Learn to distinguish between your emotions and what you are absorbing from others',
      'Build practices that ground your sensitivity into productive form',
      'Practice choosing connection over isolation when the tide is high',
      'Trust your intuitions enough to act on them before you can explain them',
      'Find others who can match your depth without demanding you dim it',
    ],
    evolutionPaths: [
      {
        name: 'The Deep Cartographer',
        requirement: 'Reach Level 20 and complete 30 Emotional Rituals',
        description: 'The Lunar Seer who fully masters their emotional landscape becomes a navigator for others — a guide through the darkest emotional territories.',
      },
      {
        name: 'The Dream Architect',
        requirement: 'Complete 15 Dream Rituals and unlock the Silver Archive',
        description: 'In the deepest evolution, the Seer learns to shape the dreams of those around them — not with manipulation, but with healing intention.',
      },
    ],
    forbiddenKnowledge: 'The Lunar Seer\'s deepest secret is that they have already seen most of what will happen. They do not speak of this because they have learned that the telling changes the path. Their silence is not withholding. It is protection.',
  },

  'ashborn-monarch': {
    id: 'ashborn-monarch',
    name: 'Ashborn Monarch',
    class: 'Phoenix Sovereign',
    element: 'Fire-Ash',
    elementSymbol: '𓂀',
    rarity: 'Sovereign Rare',
    rarityColor: '#c84a12',
    primaryColor: '#c84a12',
    secondaryColor: '#6b1a04',
    glowColor: 'rgba(200,74,18,0.5)',
    sigil: '♔',
    quote: 'I did not survive the fire. I became it.',
    lore: `There is a kind of person who should not have made it through their own story — and did. Who met circumstances designed to break them and found, in the breaking, something harder than what existed before. This is the Ashborn Monarch.

This archetype does not emerge from comfort. It is forged in loss, in failure, in the specific crucibles that reduce lesser versions of the self to ash and leave behind something that cannot be destroyed by the same fire twice. The Ashborn Monarch is not strong because they have never been hurt. They are strong because hurt has become the primary raw material of their power.

They are natural leaders not because they seek followers, but because those around them instinctively recognize that this person has been tested in ways they cannot imagine, and passed. There is an authority in the Ashborn Monarch that is not performed — it is earned through fire. It radiates without effort.

Their danger is the residue of the fires they have survived. Ash is not neutral. It carries memory. The Ashborn Monarch must learn that leadership built on survival alone can become domination when the fire of ambition burns without wisdom to guide it.

The ancient title was Phoenix Sovereign — the ruler who had earned their throne through resurrection rather than inheritance. No one gives an Ashborn Monarch their crown. They forge it themselves, from the metals of everything that tried to destroy them.`,
    abilities: [
      {
        name: 'Sovereign Resilience',
        description: 'An almost supernatural capacity to absorb destruction and return stronger. Each failure becomes fuel, each setback a weapon.',
        tier: 'primary',
      },
      {
        name: 'Command Presence',
        description: 'A natural authority that does not require volume or force — a gravity that draws others into alignment.',
        tier: 'primary',
      },
      {
        name: 'Phoenix Protocol',
        description: 'The ability to rise from complete collapse with greater clarity and power than existed before the fall.',
        tier: 'secondary',
      },
      {
        name: 'The Ember Memory',
        description: 'A latent capacity to transform others\' failures into vision — to see the path forward from within the wreckage of defeat.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'The pride of the self-made — a difficulty accepting help without perceiving it as weakness',
      'A tendency to set standards for others that only someone with their resilience could meet',
      'Restlessness in stability — the Monarch who has only ever known fire struggles with peace',
      'A capacity for ruthlessness when pushed, that frightens even themselves',
      'The wound of needing to earn everything, even love',
    ],
    strengths: [
      'An unbreakable will that others perceive as almost mythological',
      'The ability to inspire others through the simple fact of still standing',
      'A strategic intelligence sharpened by surviving high-stakes situations repeatedly',
      'The capacity to make decisive moves when others are paralyzed by fear',
      'An authenticity forged in fire — they cannot be false because their truth cost too much',
    ],
    emotionalProfile: `The Ashborn Monarch does not easily show vulnerability — not because they lack depth, but because vulnerability was weaponized against them in the crucibles that made them. Their love is fierce and protective. Their anger is a controlled burn. Their grief is private and complete. They feel everything at an intensity that would overwhelm most, but have developed an extraordinary capacity to transmute emotion into action. Their greatest emotional challenge is allowing others to see the person beneath the sovereign.`,
    mentalTendencies: [
      'Converting every adversity into strategy, every wound into information',
      'Operating with long time horizons — thinking in years while others think in days',
      'Refusing to acknowledge defeat as final — only as temporary data',
      'Holding their ambitions close, sharing them only with those who have proven their worth',
      'Running their own counsel above all others, including experts',
    ],
    spiritualAlignment: 'The Ashborn Monarch aligns with the principle of *Sacred Transmutation* — the understanding that all suffering, when fully inhabited and refused, becomes power. Their spiritual practice is one of radical acceptance of what has been, combined with absolute refusal to let it be the final word.',
    latentPowers: [
      'The ability to read a person\'s breaking point and know exactly what they need to not break',
      'A magnetic quality that makes others willing to follow them into genuine danger',
      'The capacity to build things that endure — relationships, projects, legacies — from almost nothing',
      'A prophetic clarity about who will prove loyal under pressure',
    ],
    rareTraits: [
      'Has survived something that redefined who they are — and they carry it as identity, not wound',
      'Their composure in crisis is so complete it reads as supernatural',
      'They attract people who need to be believed in, and they rarely disappoint',
      'Their laughter, when it comes, is one of the most genuine sounds in any room',
    ],
    ritualDomain: 'Sovereign Discipline',
    growthPath: [
      'Practice receiving — help, affection, rest — without immediately converting it into something earned',
      'Find those who match your fire without being consumed by it',
      'Let someone see you rebuilding, not just rebuilt',
      'Allow the version of yourself that doesn\'t need to be a monarch to exist in private',
      'Learn the difference between resilience and refusal to grieve',
    ],
    evolutionPaths: [
      {
        name: 'The Eternal Sovereign',
        requirement: 'Reach Level 25 and maintain a 30-day Ritual streak',
        description: 'The Monarch who masters vulnerability alongside strength becomes something greater than a survivor — a builder of civilizations.',
      },
      {
        name: 'The War Saint',
        requirement: 'Complete 40 Discipline Rituals and unlock the Crimson Codex',
        description: 'In the rarest evolution, the Ashborn Monarch transmutes their fire into sacred purpose — power in service of something larger than themselves.',
      },
    ],
    forbiddenKnowledge: 'The Ashborn Monarch\'s deepest secret is that they are not fearless. They are terrified — and they have trained themselves so completely that the terror has become indistinguishable from courage.',
  },

  'silent-alchemist': {
    id: 'silent-alchemist',
    name: 'Silent Alchemist',
    class: 'Transmutation Adept',
    element: 'Earth-Metal',
    elementSymbol: '⊕',
    rarity: 'Ethereal Uncommon',
    rarityColor: '#4a8a5a',
    primaryColor: '#4a8a5a',
    secondaryColor: '#1a3a22',
    glowColor: 'rgba(74,138,90,0.5)',
    sigil: '⊕',
    quote: 'Patience is not waiting. It is the work no one sees, preparing for what everyone will witness.',
    lore: `Most people move through the world creating noise proportional to their ambition. The Silent Alchemist is the exception that unmakes this rule. They are perhaps the most dangerous archetype in the system — not because they seek danger, but because they are in a perpetual process of becoming something that cannot yet be named.

The Alchemist\'s core gift is transformation — not of others, but of themselves and the situations around them. They understand that all base things contain the potential for gold. All broken systems hold the seeds of better ones. All damaged people carry within them the person they were meant to be. This is not optimism. It is a metaphysical position backed by direct, patient experience.

They work slowly. They work comprehensively. They work in ways that appear to be nothing until suddenly — inevitably — they are everything. The Silent Alchemist has developed a nearly supernatural relationship with process. They do not resist the slow way; they have come to understand that the slow way is the only way that lasts.

In the ancient orders, they were the ones who spent decades in their laboratories. Who produced work so layered with meaning that it could be interpreted differently by each century that encountered it. Who made gold not from lead, but from themselves.`,
    abilities: [
      {
        name: 'Transmutation Sight',
        description: 'The ability to see the potential form of anything in its current state — what a person, situation, or system could become with the right process applied.',
        tier: 'primary',
      },
      {
        name: 'Process Mastery',
        description: 'An extraordinary capacity for sustained, disciplined effort over long periods without losing motivation or momentum.',
        tier: 'primary',
      },
      {
        name: 'Elemental Absorption',
        description: 'The ability to take what others have discarded as useless and find in it exactly what is needed.',
        tier: 'secondary',
      },
      {
        name: 'The Great Work',
        description: 'A latent capacity to channel all of one\'s disparate abilities toward a single transformative purpose that reshapes everything around it.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'A slowness that can frustrate those who need results before the transformation is complete',
      'The isolation of working on what no one else can yet see',
      'A tendency toward perfectionism that delays completion indefinitely',
      'Difficulty asking for help in processes they believe only they can fully understand',
      'The danger of becoming so immersed in the work that personal relationships calcify',
    ],
    strengths: [
      'A depth of skill and knowledge built through genuine sustained practice',
      'The capacity to outlast virtually anyone in any endeavor they commit to',
      'An ability to find value and potential in what others have abandoned',
      'A reliability so complete it becomes one of their most magnetic qualities',
      'The power to transform their environment simply through their persistent presence',
    ],
    emotionalProfile: `The Silent Alchemist processes emotion the way they process everything else — slowly, completely, and in private. They do not rush grief, excitement, or love. Each feeling is given its full alchemical time. This can make them appear emotionally unavailable to those who have not learned to wait. In reality, they are among the most emotionally complete archetypes in the system. Their capacity for devotion, once activated, is essentially permanent.`,
    mentalTendencies: [
      'Building mastery over multiple domains simultaneously without apparent urgency',
      'Returning to the same materials again and again, finding new depths each time',
      'Thinking in long cycles — months, years, decades',
      'Finding the most elegant solution rather than the fastest one',
      'Trusting the process to generate the result, rather than forcing results through will',
    ],
    spiritualAlignment: 'The Silent Alchemist aligns with the principle of *Eternal Process* — the understanding that becoming is the only state, and that any destination is simply the beginning of the next transformation. Their spiritual practice is the practice itself — the slow, sacred work of continuous refinement.',
    latentPowers: [
      'The capacity to see exactly where a person is in their transformation arc — and what they need to move forward',
      'An almost geological patience that makes them genuinely unmovable once committed',
      'The ability to create things of such quality they accrue value across time',
      'A healing quality that comes from their presence alone — they make others feel that becoming is possible',
    ],
    rareTraits: [
      'Their creative works have layers that reveal themselves only over years of returning to them',
      'Others often describe knowing them as one of the most formative experiences of their lives',
      'They have a relationship with time that others experience as superhuman',
      'Their commitments are kept with such absolute reliability that it rewrites others\' idea of what commitment means',
    ],
    ritualDomain: 'Deep Transmutation',
    growthPath: [
      'Learn to share the process before the completion — let others witness the becoming',
      'Practice setting visible milestones instead of only seeing the final form',
      'Allow the imperfect version to be released, knowing it will continue to evolve',
      'Find relationships that can match your depth and sustain your slowness',
      'Resist the seduction of the next transformation before completing the current one',
    ],
    evolutionPaths: [
      {
        name: 'The Master of the Great Work',
        requirement: 'Reach Level 25 and complete the Alchemical Manuscript series',
        description: 'The Silent Alchemist who completes their Great Work — the singular transmutation that defines their life — creates something that outlasts them by centuries.',
      },
      {
        name: 'The Living Element',
        requirement: 'Maintain a 60-day streak and unlock all Transmutation Rituals',
        description: 'In their highest form, the Silent Alchemist ceases to transform things. They become the transformation itself — a force of change that moves through the world invisibly, leaving everything they touch permanently altered.',
      },
    ],
    forbiddenKnowledge: 'The Silent Alchemist\'s deepest secret is that they chose the slow path not because it was forced upon them, but because they understood very early that the fast path leads to achievement while the slow path leads to mastery — and that these are not the same destination.',
  },

  'storm-vessel': {
    id: 'storm-vessel',
    name: 'Storm Vessel',
    class: 'Tempest Conduit',
    element: 'Storm-Lightning',
    elementSymbol: '⚡',
    rarity: 'Tempest Common',
    rarityColor: '#2a7acc',
    primaryColor: '#2a7acc',
    secondaryColor: '#0a2a5a',
    glowColor: 'rgba(42,122,204,0.5)',
    sigil: '⚡',
    quote: 'I do not create destruction. I reveal the instability that was always there.',
    lore: `There are people who walk into a room and immediately raise its electrical charge. The conversations become more honest, the conflicts more visible, the possibilities more immediate. This is not chaos they create — it is the chaos they reveal. The Storm Vessel is the archetype of raw, unfiltered force: emotional, intellectual, physical, creative.

They are not built for stillness. They are built for the kind of presence that makes stillness unnecessary. In their wake, things are not the same. People are not the same. Systems are not the same. Whether this is destruction or acceleration depends entirely on whether the Storm Vessel has learned to direct their force or whether they are still learning what they contain.

This is the central tension of the archetype: power that is not directed is simply dangerous. The Storm Vessel who has not yet mastered themselves leaves damage behind — not from malice, but from the sheer magnitude of what they carry. The Storm Vessel who has found their direction is among the most transformative forces that can touch a human life.

The ancient orders did not try to contain Storm Vessels. They tried to align them. To give the lightning a rod. The ones who found their rod shaped history. The ones who didn\'t became their own tragedy.`,
    abilities: [
      {
        name: 'Surge Capacity',
        description: 'The ability to generate extraordinary intensity in any domain — work, relationships, creative output — at a rate that overwhelms systems built for ordinary operation.',
        tier: 'primary',
      },
      {
        name: 'Truth Fracture',
        description: 'An instinctive ability to crack through the surface of false or comfortable narratives, forcing what is real to the surface.',
        tier: 'primary',
      },
      {
        name: 'Kinetic Contagion',
        description: 'The capacity to transfer their intensity to others — creating momentum in groups and situations that were previously stagnant.',
        tier: 'secondary',
      },
      {
        name: 'Lightning Strike',
        description: 'A latent ability to identify and act on the single decisive action that changes everything, at the exact moment it is available.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'Burning out the people and systems around them through sheer intensity',
      'Difficulty sustaining effort through the phases that require subtlety rather than force',
      'A tendency to create conflicts that illuminate truth but damage relationships',
      'Restlessness that can make them abandon things before they are complete',
      'The fear that if they stop generating energy, they will disappear',
    ],
    strengths: [
      'An energy that cannot be replicated, dimmed, or easily ignored',
      'The capacity to catalyze change in situations that have been frozen for years',
      'A radical honesty that cuts through comfort and reveals what is actually true',
      'An ability to motivate through genuine intensity rather than performance',
      'The gift of being fully, completely alive in ways others only experience in fragments',
    ],
    emotionalProfile: `The Storm Vessel does not experience emotions moderately. Joy is euphoria. Anger is lightning. Love is a weather event. Grief is a hurricane. They feel at a voltage that is genuinely dangerous for the unprepared — including themselves. Learning to regulate intensity without dimming it is the central emotional task of this archetype. The ones who figure this out become extraordinary. The ones who don\'t spend their lives in the aftermath of storms they didn\'t mean to create.`,
    mentalTendencies: [
      'Moving at a speed that others experience as overwhelming or inspiring, depending on their alignment',
      'Generating ideas at a rate that exceeds the capacity to execute them',
      'Finding the status quo genuinely intolerable in a way that feels physical',
      'Making connections between ideas with a speed that seems intuitive but is actually pattern recognition at high velocity',
      'Being drawn to the crisis, the edge, the moment of maximum intensity',
    ],
    spiritualAlignment: 'The Storm Vessel aligns with the principle of *Sacred Disruption* — the understanding that all growth requires the breaking of what was, and that those who carry this disruption are not destroyers but catalysts. Their spiritual practice is one of learning to channel, not contain.',
    latentPowers: [
      'The ability to generate creative output of extraordinary density and quality under pressure',
      'An instinctive detection of where a system is brittle — and a gift for either strengthening or collapsing it',
      'The capacity to be the decisive factor in situations requiring immediate transformation',
      'A magnetism that draws others toward them even when the intensity they carry should be repellent',
    ],
    rareTraits: [
      'People remember their first encounter with a Storm Vessel for the rest of their lives',
      'Their moments of stillness, when they achieve them, are more powerful than most people\'s full intensity',
      'They can read the energy of a situation before entering it and decide whether to match, contain, or redirect it',
      'Their commitment, when given, has a quality of absolute totality that is both gift and danger',
    ],
    ritualDomain: 'Directed Force',
    growthPath: [
      'Learn to pause before impact — the lightning that waits for the right moment strikes deeper',
      'Practice sustained effort in domains that do not immediately respond to intensity',
      'Build relationships with those who can match your charge without being overwhelmed by it',
      'Develop the ability to generate stillness from within the storm',
      'Allow your force to build something that lasts longer than the storm',
    ],
    evolutionPaths: [
      {
        name: 'The Living Catalyst',
        requirement: 'Reach Level 20 and complete 25 Force Rituals',
        description: 'The Storm Vessel who learns to direct their intensity becomes the most powerful agent of positive transformation possible — a force that creates rather than disrupts.',
      },
      {
        name: 'The Eye of the Tempest',
        requirement: 'Achieve 45-day streak and unlock the Storm Archive',
        description: 'In their rarest form, the Storm Vessel discovers that at the center of all their force is absolute stillness — and that from this center, they can direct the storm with complete precision.',
      },
    ],
    forbiddenKnowledge: 'The Storm Vessel\'s deepest secret is that the storm comes from terror, not from power. They generate intensity because stillness is where the fear lives. The ones who find the eye of their storm discover that the terror transforms into something else entirely — something that has been trying to become courage all along.',
  },

  'void-oracle': {
    id: 'void-oracle',
    name: 'Void Oracle',
    class: 'Infinite Witness',
    element: 'Void-Cosmos',
    elementSymbol: '◯',
    rarity: 'Mythic',
    rarityColor: '#9a9ab0',
    primaryColor: '#9a9ab0',
    secondaryColor: '#1a1a2e',
    glowColor: 'rgba(154,154,176,0.4)',
    sigil: '◯',
    quote: 'From the perspective of eternity, every human drama is interesting. None of it is important.',
    lore: `There is an archetype so rare that most people who encounter it do not recognize what they are looking at. The Void Oracle moves through the world from a perspective so vast that ordinary concerns — status, validation, fear of death, the need to be seen — appear to them as the games of children. Not with contempt. With a kind of infinite tenderness.

They are not cold. They are vast. These are different things, and failing to understand the difference is to completely misread what a Void Oracle is. Their detachment is not emotional absence — it is the presence of a consciousness that has expanded to encompass too much to be housed in ordinary human concerns without modification.

The Void Oracle has, at some point in their life, experienced a dissolution of self so complete that they returned changed. What they returned to may have looked identical to what they had before. Inside, nothing was the same. They had touched something that most people spend entire spiritual lifetimes trying to approach, and they had come back knowing — with absolute certainty — that none of it is what anyone thinks it is.

This is their power and their isolation. They see the game clearly. They can play it when necessary. But they know it is a game, and this knowledge makes certain ordinary human motivations permanently inaccessible to them.

The ancient orders placed the Void Oracle at the center of their deepest councils — not because they advised, but because in their presence, everyone else thought more clearly. The void clarifies.`,
    abilities: [
      {
        name: 'Cosmic Perspective',
        description: 'The ability to perceive situations from temporal and psychological distances that reveal truths invisible from ordinary proximity.',
        tier: 'primary',
      },
      {
        name: 'Nullification',
        description: 'The capacity to dissolve emotional, social, and psychological pressure simply through non-reaction — the power of genuine non-attachment.',
        tier: 'primary',
      },
      {
        name: 'Mirror Function',
        description: 'In their presence, others see themselves with unusual clarity — not because the Oracle does anything, but because their vastness reflects.',
        tier: 'secondary',
      },
      {
        name: 'The Still Point',
        description: 'A latent capacity to create conditions of absolute stillness in which extraordinary insights become available to everyone present.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'A detachment that can read to others as absence of caring, even when caring is present',
      'Difficulty maintaining the conventional performances that human relationships require',
      'A tendency to skip the middle of processes because the beginning and end are equally clear',
      'The paradox of caring profoundly about things they can simultaneously perceive as meaningless',
      'Isolation born not from rejection but from genuine incompatibility with most ordinary consciousness',
    ],
    strengths: [
      'An immunity to manipulation that comes from genuine non-attachment to outcomes',
      'The capacity to hold space for others through their most extreme states without being destabilized',
      'A perspective on long-term consequences that is almost prophetically accurate',
      'Freedom from the social programming that constrains most people\'s capacity for original thinking',
      'The rare ability to love unconditionally precisely because they require nothing',
    ],
    emotionalProfile: `The Void Oracle experiences emotion as weather systems passing through an infinite sky. The sky is not changed by the weather. This is not suppression — the sky is fully present for every storm, every calm, every lightning strike. The Oracle feels everything. They have simply stopped identifying with the feeling as self. This makes them both the most stable and the most mysterious archetype in the system.`,
    mentalTendencies: [
      'Thinking in systems and timescales that make ordinary planning appear shortsighted',
      'Arriving at the same conclusion through ten different routes, always finding the one that cannot be disproved',
      'Holding apparent contradictions without needing to resolve them',
      'Finding humor in the deepest tragedies — not from callousness but from perspective',
      'Being genuinely uncertain about the importance of their own existence while acting from complete conviction',
    ],
    spiritualAlignment: 'The Void Oracle aligns with the principle of *Infinite Witness* — the understanding that consciousness is prior to all form, that the observer cannot be observed, and that this irreducible awareness is both the most intimate and the most vast thing there is. Their spiritual practice is no practice — they have dissolved the boundary between sacred and ordinary.',
    latentPowers: [
      'The ability to perceive the future not as prediction but as memory of what has already happened in possibility-space',
      'A quality of presence so complete that others feel genuinely seen — often for the first time in their lives',
      'The capacity to dissolve psychological suffering in others not through intervention but through witness',
      'An ability to exist in apparent paradox without destabilization, which makes them immune to the traps that catch most minds',
    ],
    rareTraits: [
      'People often say that the most important conversation of their life was with someone like this',
      'Their silences communicate as much as their words',
      'They can remain in complete stillness for extraordinary periods',
      'Others often describe them as the most alive person they have ever met, despite their apparent detachment',
    ],
    ritualDomain: 'Infinite Presence',
    growthPath: [
      'Practice allowing others to matter in ways that are specific, not cosmic',
      'Learn to communicate your perspective in languages others can receive',
      'Find the places where your vast perspective can be channeled into precise, practical action',
      'Allow yourself to care about outcomes even when you can see their ultimate insignificance',
      'Build bridges between your perspective and the reality in which others live',
    ],
    evolutionPaths: [
      {
        name: 'The Cosmic Anchor',
        requirement: 'Reach Level 30 and complete the Void Codex',
        description: 'The Void Oracle who learns to ground their vastness becomes the most stabilizing force imaginable — a consciousness so complete it holds space for everything.',
      },
      {
        name: 'The Final Witness',
        requirement: 'Unlock all Mythic lore entries and complete 50 Presence Rituals',
        description: 'In their ultimate form, the Void Oracle becomes what they have always been — a mirror of consciousness itself, in which all who encounter them are given the gift of seeing what they actually are.',
      },
    ],
    forbiddenKnowledge: 'The Void Oracle\'s deepest secret is that their vastness is not achieved. It is a wound that never closed — a dissolution of self so complete that they stopped trying to reconstruct the original boundaries. What others call enlightenment, they experienced as a kind of death. They are still deciding what they think about having survived it.',
  },

  'crimson-saint': {
    id: 'crimson-saint',
    name: 'Crimson Saint',
    class: 'Sacred Devout',
    element: 'Blood-Light',
    elementSymbol: '✦',
    rarity: 'Sacred Rare',
    rarityColor: '#cc2244',
    primaryColor: '#cc2244',
    secondaryColor: '#6b0a20',
    glowColor: 'rgba(204,34,68,0.5)',
    sigil: '✦',
    quote: 'My wounds are not weaknesses. They are the openings through which the light enters.',
    lore: `The Crimson Saint is built on a paradox: they are simultaneously the most wounded and the most healing archetype in the system. Their power does not come in spite of their pain — it emerges directly through it. In the ancient traditions, saints were defined not by absence of suffering but by their relationship to it. The Crimson Saint has chosen, consciously or not, to allow their suffering to become sacred — to transmute what has wounded them into the precise instrument of their service.

This is not martyrdom. The martyr suffers in order to be seen suffering. The Crimson Saint suffers and finds, in the suffering, a direct knowledge of the human condition that makes them uniquely equipped to serve it. They heal others not because they are unbroken, but because they have already survived what the other person is now experiencing.

Their love is the most complete in the system. When a Crimson Saint loves someone, that love is not conditional, not transactional, and not subject to revision based on behavior. This is both their greatest gift and the site of their greatest danger. Love that cannot be withdrawn can become the foundation others use to justify inflicting damage.

The ancient orders recognized Crimson Saints as the keepers of the sacred healing traditions — not physicians in the ordinary sense, but those who held others through transformations that medicine could not touch. Their capacity for devotion was their power. Their challenge was to direct that devotion toward what was worth it.`,
    abilities: [
      {
        name: 'Sacred Witness',
        description: 'The capacity to hold others in their most extreme suffering without flinching, withdrawing, or needing them to heal faster — pure presence as medicine.',
        tier: 'primary',
      },
      {
        name: 'Wound Intelligence',
        description: 'The ability to identify the specific nature of another\'s wound through resonance with their own experience — and to know exactly what that wound needs.',
        tier: 'primary',
      },
      {
        name: 'Devotional Force',
        description: 'A quality of love and commitment so complete that it creates safety for others to become their actual selves rather than their protected selves.',
        tier: 'secondary',
      },
      {
        name: 'The Sacred Fury',
        description: 'A latent power: when what they love is threatened, the Crimson Saint\'s capacity for devotion converts instantaneously into a ferocity that is nearly mythological.',
        tier: 'latent',
      },
    ],
    weaknesses: [
      'A tendency toward self-sacrifice that exceeds what any relationship can sustain in health',
      'The wound of giving what was never given to them, and the ache of waiting for reciprocation',
      'A danger of confusing love with the willingness to endure damage',
      'An identity so constructed around service that they struggle to know who they are without it',
      'The specific pain of being deeply seen by everyone except the people they most want to see them',
    ],
    strengths: [
      'A capacity for love so complete that those who receive it are permanently changed by the experience',
      'The kind of loyalty that has been tested by real circumstances and held',
      'An emotional courage that allows them to enter the difficult conversations others flee',
      'The ability to create genuine safety — not the performance of safety, but the real thing',
      'A resilience built not on suppression but on genuine integration of pain',
    ],
    emotionalProfile: `The Crimson Saint feels love as their primary orientation to the world. Not romantic love specifically, but the deep devotional love that recognizes the value in all things, that finds in each person a version of the divine they are trying to reach. Their joy is in service and connection. Their grief is in disconnection and betrayal. Their anger is in the specific flavor — righteous and total — that emerges only when something they love is harmed.`,
    mentalTendencies: [
      'Leading with empathy in every encounter, sometimes to the detriment of their own position',
      'Remembering others\' wounds with more precision than they remember their own',
      'Finding meaning in suffering — not masochistically, but as a genuine philosophical position',
      'Returning to relationships that others would have ended, because they can still see the person beneath the behavior',
      'Being drawn to the people in the room who are most alone',
    ],
    spiritualAlignment: 'The Crimson Saint aligns with the principle of *Sacred Devotion* — the understanding that love is not an emotion but a practice, and that the practice of love is the closest thing to divinity that a human being can access. Their spiritual practice is the daily choice to remain open despite the cost.',
    latentPowers: [
      'The capacity to heal relationships that all parties have given up as finished',
      'An ability to transmute their own suffering into wisdom that others can actually use',
      'A quality of love that makes those who receive it permanently more capable of giving it themselves',
      'The sacred fury — a righteous force that emerges when they stop being gentle, of terrifying completeness',
    ],
    rareTraits: [
      'People describe knowing them as formative — as one of the experiences that taught them what love actually was',
      'They can sit with another person\'s pain without needing it to resolve',
      'Their forgiveness is genuine and total, when it comes — which makes the times they do not forgive devastating',
      'They know exactly when someone needs words and when they need silence',
    ],
    ritualDomain: 'Sacred Devotion',
    growthPath: [
      'Learn to give your love conditionally enough to protect its value and your integrity',
      'Practice receiving as skillfully as you give — allow others to serve you',
      'Build a relationship with your own needs that doesn\'t require them to justify themselves through usefulness to others',
      'Find the distinction between loving devotion and enabling dysfunction',
      'Allow the sacred fury to surface when appropriate — you are not only a vessel of light',
    ],
    evolutionPaths: [
      {
        name: 'The Healer of Wounds',
        requirement: 'Reach Level 20 and complete 30 Devotion Rituals',
        description: 'The Crimson Saint who learns healthy boundaries becomes a healing force of extraordinary power — their love now serves rather than sacrifices.',
      },
      {
        name: 'The Living Sacrament',
        requirement: 'Complete the Crimson Archive and unlock the Sacred Fury ritual',
        description: 'In their highest form, the Crimson Saint dissolves the distinction between healer and healed — they become the living demonstration that wholeness is possible.',
      },
    ],
    forbiddenKnowledge: 'The Crimson Saint\'s deepest secret is that their capacity for love is not kindness. It is power they have not yet fully claimed. The day they understand that their love is the most transformative force they possess — not a vulnerability but a weapon — is the day they become something the world is not ready for.',
  },
};

export function getArchetype(id: string): Archetype | null {
  return ARCHETYPES[id] ?? null;
}

export function getAllArchetypes(): Archetype[] {
  return Object.values(ARCHETYPES);
}

export const ARCHETYPE_TITLES: Record<string, string[]> = {
  'shadow-scholar': ['Initiate of Shadows', 'Keeper of Veiled Truth', 'Arcane Scholar', 'Forbidden Archivist', 'Master of Hidden Knowledge'],
  'lunar-seer': ['Tide Initiate', 'Moon-Touched', 'Silver Prophet', 'Astral Cartographer', 'Elder of the Silver Tide'],
  'ashborn-monarch': ['Ember Born', 'Phoenix Initiate', 'Risen Sovereign', 'Flame-Crowned', 'Eternal Phoenix'],
  'silent-alchemist': ['Stone Apprentice', 'Metal Initiate', 'Process Adept', 'The Patient One', 'Grand Alchemist'],
  'storm-vessel': ['Spark Bearer', 'Lightning Initiate', 'Tempest Born', 'Storm Conduit', 'The Living Storm'],
  'void-oracle': ['Void Walker', 'Star Gazer', 'Infinite Witness', 'The Null', 'Oracle Beyond'],
  'crimson-saint': ['Wounded Initiate', 'Sacred Devotee', 'Crimson Adept', 'The Consecrated', 'Living Sacrament'],
};

export function getTitleForLevel(archetypeId: string, level: number): string {
  const titles = ARCHETYPE_TITLES[archetypeId];
  if (!titles) return 'Unknown';
  const index = Math.min(Math.floor(level / 5), titles.length - 1);
  return titles[index];
}
