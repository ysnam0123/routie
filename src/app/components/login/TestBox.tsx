'use client';
import { useRouter } from 'next/navigation';
import Button from '../common/ui/Button';

export default function TestBox() {
  const router = useRouter();
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center border border-red-600 py-3">
        <p className="text-red-600">** 현재 서버가 연결되어있지 않습니다 **</p>
        <Button
          onClick={() => router.push('/test')}
          className="mt-3 w-[300px] bg-red-500 hover:bg-red-400 active:bg-red-700"
        >
          테스트 로그인 하기
        </Button>
      </div>
    </>
  );
}
