'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/UserStore';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoggedIn, isSocial } = useUserStore();
  const [hydrated, setHydrated] = useState(false);

  // const isSocialLogin = searchParams.get('social') === 'true';
  // // ✅ hydration 완료 후에만 redirect 검사
  // useEffect(() => {
  //   setHydrated(true);
  // }, []);

  // useEffect(() => {
  //   if (!hydrated) return;
  //   const socialParam = searchParams.get('social') === 'true';

  //   // ✅ persist된 값 + URL social 파라미터 둘 다 고려
  //   if (!isLoggedIn && !isSocial && !socialParam) {
  //     router.replace('/login');
  //   }
  // }, [hydrated, isLoggedIn, isSocial, searchParams, router]);

  return <>{hydrated ? children : null}</>;
}
