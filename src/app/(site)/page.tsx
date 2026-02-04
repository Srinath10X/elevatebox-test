import Hero from "./_components/Hero";
import Header from "./_components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
    </main>
  );
}
