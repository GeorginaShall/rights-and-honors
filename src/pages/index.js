import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="w-80 sm:w-96 md:w-[550px] lg:w-[750px] ">
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
