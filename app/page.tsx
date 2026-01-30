export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400">
        Premium Navbar
      </h1>
      <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
        A fully responsive, accessible, and animated navigation component. Try
        resizing the window to see the mobile adaptation.
      </p>
    </div>
  );
}
