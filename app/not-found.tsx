import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative min-h-[calc(100vh-88px)] w-full flex items-center justify-center px-4 py-12 sm:py-16 bg-[url('/images/hero-bg2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[--color-title]/70" />
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left text-white">
          <p className="text-sm uppercase tracking-widest text-[--color-accent]">
            404 Error
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Page not found
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
            The page you are looking for might have been removed or the URL is
            incorrect.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border-2 border-[--color-primary] bg-[--color-primary] px-5 sm:px-6 py-2.5 sm:py-3 text-white font-semibold transition duration-300 hover:opacity-70"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound