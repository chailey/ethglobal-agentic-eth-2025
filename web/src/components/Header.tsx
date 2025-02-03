import LettuceLogo from "./Logo";

export default function Header() {
  return (
    <header className="w-full bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 h-20">
          <LettuceLogo />

          <h1 className="text-3xl font-bold text-foreground hidden sm:inline-block">
            LettuceXchange
          </h1>
        </div>
        <button className="bg-green-700 p-3 rounded-xl text-white text-xl">
          START
        </button>
      </div>
    </header>
  );
}
