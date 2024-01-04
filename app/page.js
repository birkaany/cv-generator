import Panel from "@/components/Panel";
import Preview from "@/components/Preview";
import PeoployedLogo from "@/public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-50">
      <Image src={PeoployedLogo} width={300} height={100} alt="logo" />
      <h1 className="text-base font-bold p-6 uppercase tracking-widest text-gray-500">
        CV Generator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        <Panel />
        <Preview />
      </div>
    </main>
  );
}
