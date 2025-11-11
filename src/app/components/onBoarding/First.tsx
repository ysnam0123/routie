import { useOnBoardingStore } from '@/store/onBoarding';
import Image from 'next/image';
import logo from '/public/logo.png';
import image2 from '/public/onBoarding/image2.svg';
import { Dot } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function First() {
  const router = useRouter();
  const resetStep = useOnBoardingStore((state) => state.resetStep);
  const { setStep, step } = useOnBoardingStore();

  const skip = () => router.push('/login');
  const goNext = () => setStep(2);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="">
      {/* 상단 영역 */}
      <div className="mb-20 flex flex-col items-center select-none">
        <Image
          src={logo}
          alt="logo"
          className={`mb-4 w-[260px] transition-all duration-700 ease-out ${
            show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        />
        <h1
          className={`mb-4 text-2xl font-bold transition-all delay-300 duration-700 ease-out ${
            show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          매 순간을 <span className="text-[#FFB84C]">더 가치있게</span>
        </h1>
        <p
          className={`text-[16px] font-bold transition-all delay-600 duration-700 ease-out sm:text-3xl ${
            show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          작은 습관부터 큰 변화까지, 루티와 함께
        </p>
      </div>

      {/* 중앙 이미지 */}
      <div
        className={`flex flex-col items-center justify-center transition-all delay-1000 duration-800 ease-out ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        <Image src={image2} alt="image2" className="w-[220px]" />
      </div>
    </div>
  );
}
