import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
          Transform Your Ideas{" "}
          <span className="text-yellow-500">Into Reality</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 sm:text-xl lg:text-2xl max-w-2xl mx-auto">
          We provide cutting-edge solutions to elevate your business to the next
          level. Start your journey with us today.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
