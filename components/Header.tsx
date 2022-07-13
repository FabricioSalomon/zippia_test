import Image from "../node_modules/next/image";

export function Header() {
  return (
    <header className="p-5 flex bg-[#212529] justify-center items-center sm:flex-col sm:pb-4">
      <Image
        className="object-contain"
        alt="Zippia logo"
        src="https://static.zippia.com/ui-router/images/header/logo_white.svg"
        width={200}
        height={100}
      ></Image>
    </header>
  );
}
