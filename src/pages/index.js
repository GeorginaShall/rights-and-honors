import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="w-60 sm:w-72 md:w-80 lg:w-96 mb-6">
        <Image
          src="/images/rights-and-honors-logo.webp"
          alt="Rights and Honors Logo"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-wide  text-[#d9a6a1]  ">
        Coming Soon...
      </h1>
    </div>
  );
}
