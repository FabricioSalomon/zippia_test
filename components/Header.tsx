import Image from "../node_modules/next/image";

export function Header() {
  return (
    <header className="px-10 flex flex-row bg-slate-500 items-center">
      <Image
        className="object-contain"
        src="https://static.zippia.com/ui-router/images/header/logo_white.svg"
        width={200}
        height={100}
      ></Image>
      <h1 className="text-3xl font-bold ">
        <span>Zippia Jobs</span>
      </h1>
    </header>
  );
}
