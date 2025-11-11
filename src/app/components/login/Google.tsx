import Image from 'next/image';
import Button from '../common/ui/Button';

export default function Google({ logInHandler }: { logInHandler: () => void }) {
  return (
    <>
      <Button
        type="button"
        className="gap-2 border border-[#e0e0e0] bg-white text-base text-black dark:bg-[var(--dark-bg-primary)] dark:text-[var(--dark-gray-700)]"
        onClick={logInHandler}
      >
        <Image src="/images/google.svg" alt="Google" width={20} height={20} />
        구글 계정으로 로그인
      </Button>
    </>
  );
}
