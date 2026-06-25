import Image from "next/image";

type TriquetraMarkProps = {
  className?: string;
};

export function TriquetraMark({ className }: TriquetraMarkProps) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <Image
        src="/brand/Initial_Logo_B.png"
        alt=""
        fill
        sizes="40px"
        priority
        className="object-contain"
      />
    </span>
  );
}
