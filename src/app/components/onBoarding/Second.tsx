import { useOnBoardingStore } from '@/store/onBoarding';
import ProgressBar from '../common/ProgressBar';
import OnBoardingRoutine from './OnBoardingRoutine';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Second() {
  const router = useRouter();
  const { setStep } = useOnBoardingStore();
  const resetStep = useOnBoardingStore((state) => state.resetStep);

  const goNext = () => setStep(3);
  const skip = () => router.push('/login');

  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);

    // 화면 크기 감지
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind의 sm 기준 (640px)
    };

    handleResize(); // 초기 한 번 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onBoardingItems = [
    {
      title: '빨래 돌리기',
      category: '세탁/의류',
      time: '13:00',
      isComplted: true,
    },
    {
      title: '월세 입금',
      category: '행정',
      time: '상관없음',
      isComplted: false,
    },
    {
      title: '닭가슴살 사오기',
      category: '요리',
      time: '18:00',
      isComplted: false,
    },
    {
      title: '저녁산책 다녀오기',
      category: '건강',
      time: '퇴근 후',
      isComplted: false,
    },
    {
      title: '책 한권 읽기',
      category: '자기개발',
      time: '자기 전',
      isComplted: false,
    },
    {
      title: '빨래 돌리기',
      category: '세탁/의류',
      time: '13:00',
      isComplted: false,
    },
  ];

  // ✅ sm 이하일 때 4개만 slice
  const displayedItems = isMobile
    ? onBoardingItems.slice(0, 4)
    : onBoardingItems;

  return (
    <div className="h-full w-full">
      {/* 상단 텍스트 */}
      <div className="mb-[40px] flex flex-col items-center text-[20px] select-none">
        <h2
          className={`transition-all duration-700 ease-out ${show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          매일의 작은 습관을
        </h2>
        <h1
          className={`font-bold transition-all delay-800 duration-700 ease-out ${
            show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          나만의 <span className="text-[#FFB84C]">루틴</span>으로
        </h1>
      </div>

      {/* 루틴 카드 */}
      <div
        className={`w-[360px] rounded-[20px] border border-[#b4b4b4] px-[20px] pt-[45px] transition-all delay-1200 duration-700 ease-out select-none ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        <p className="mb-4">2025년 10월 2일</p>

        <ProgressBar
          currentStep={20}
          totalSteps={100}
          wrapperClassName="h-7 bg-[#FFB84C]/20 mb-[25px]"
          per={'20%'}
          barClassName="h-7 w-full bg-[#FFB84C] rounded-full text-white text-xl font-bold flex items-center justify-center text-center leading-[2.75rem]"
        />

        <div className="flex flex-col gap-[15px] pb-[50px]">
          {displayedItems.map((routine, i) => (
            <OnBoardingRoutine
              key={i}
              title={routine.title}
              category={routine.category}
              time={routine.time}
              isCompleted={routine.isComplted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
