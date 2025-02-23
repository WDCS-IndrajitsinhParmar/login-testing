import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FC } from "react";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
interface HeaderProps {
  label: string;
}
const Header: FC<HeaderProps> = ({ label }): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(`text-5xl drop-shadow-sm font-semibold `, font.className)}
      >
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
