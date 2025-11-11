import Input from '../common/ui/Input';

export default function TitleAndInputBox({
  title,
  value,
  onChange,
  placeholder,
  onBlur,
}: {
  title: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onBlur?: () => void;
}) {
  return (
    <>
      <p className="mb-[10px] text-[16px] font-semibold dark:text-[var(--dark-gray-700)]">
        {title}
      </p>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}
