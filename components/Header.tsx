import Image from "../node_modules/next/image";

export function Header() {
  return (
    <header>
      <Image
        className="object-contain"
        src="https://static.zippia.com/ui-router/images/header/logo_white.svg"
        width={200}
        height={100}
      ></Image>
      <h1>Zippia Jobs</h1>
    </header>
  );
}
