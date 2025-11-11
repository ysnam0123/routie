'use client';
import { useOnBoardingStore } from '@/store/onBoarding';
import { Dot } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnBoardingFooter({
  currentStep,
}: {
  currentStep: number;
}) {
  const totalSteps = 5;
  const router = useRouter();
  const { step, setStep } = useOnBoardingStore();
  const goNextStep = () => {
    if (step === 5) {
      router.push('/login');
    } else {
      setStep(currentStep + 1);
    }
  };
  const goPreviousStep = () => setStep(currentStep - 1);
  return (
    <>
      <footer className="relative flex w-full flex-col items-center gap-3 px-10 pb-13 sm:gap-5">
        {/* 하단 네비 */}
        <div className="flex w-full justify-between bg-[#ffffff] text-black">
          {step >= 2 && (
            <button
              onClick={goPreviousStep}
              className="w-15 cursor-pointer text-[16px] transition-all duration-100 ease-in hover:text-[#FFB84C] sm:text-[20px]"
            >
              이전
            </button>
          )}

          <div className="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-2 gap-0 sm:gap-2">
            {' '}
            {[...Array(totalSteps)].map((_, i) => (
              <Dot
                key={i}
                className={`h-9 w-9 sm:h-13 sm:w-13 ${
                  step === i + 1 ? 'text-[#FFB84C]' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNextStep}
            className="ml-auto cursor-pointer rounded-full bg-[#FFB84C] px-6 py-2 text-[16px] text-white transition-all duration-150 hover:scale-105"
          >
            다음
          </button>
        </div>
      </footer>
    </>
  );
}
