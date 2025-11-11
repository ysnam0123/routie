'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/UserStore';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (useUserStore.persist?.hasHydrated) {
      const hasHydrated = useUserStore.persist.hasHydrated();
      setHydrated(hasHydrated);
    } else {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated && isLoggedIn) {
      router.replace('/home');
    }
  }, [hydrated, isLoggedIn, router]);

  if (!hydrated) return null;
  if (isLoggedIn) return null;

  return <>{children}</>;
}
