import Image from 'next/image';
import kakao from '/public/kakao.svg';

export default function KaKao({ logInHandler }: { logInHandler: () => void }) {
  return (
    <>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FEE500] py-3 font-medium text-[#000000] transition-colors hover:bg-[#FDD800]"
        onClick={logInHandler}
      >
        <Image src={kakao} alt="Kakao Logo" className="h-5 w-5" />
        카카오로 로그인
      </button>
    </>
  );
}
