import Links from "@/components/links";

export function Header() {
  return (
    <header className="container max-w-[640px]">
      <div className="flex items-center justify-between py-4">
        <a className="flex items-center space-x-2" href="/">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <span className="text-lg font-bold tracking-wide">sujjeee</span>
            <div className="flex items-center-center">
              <div className="flex h-8 w-8 absolute">
                <span className="animate-ping absolute h-2 w-2  top-1 rounded-full bg-green-500 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 top-1 bg-green-500"></span>
              </div>{" "}
              <span className="ml-4">available for work</span>
            </div>
          </div>
        </a>
        <div className="hidden sm:flex">
          <Links />
        </div>
      </div>
    </header>
  );
}
