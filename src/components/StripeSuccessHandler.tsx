'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useArcanumStore } from '@/lib/store';

export default function StripeSuccessHandler() {
  const searchParams = useSearchParams();
  const { setPremium } = useArcanumStore();

  useEffect(() => {
    if (searchParams.get('upgraded') === '1') {
      setPremium(true);
      // Clean URL
      const url = new URL(window.location.href);
      url.searchParams.delete('upgraded');
      url.searchParams.delete('session_id');
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchParams, setPremium]);

  return null;
}
