import Panel from "@/components/Panel";
import Preview from "@/components/Preview";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-[1fr_2fr] p-24">
      <Panel />
      <Preview />
    </main>
  );
}
