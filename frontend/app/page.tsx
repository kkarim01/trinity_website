import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <div className="flex h-[150vh] items-center justify-center">
        <p className="text-platinum">Hello world!</p>
      </div>
    </main>
  );
}
