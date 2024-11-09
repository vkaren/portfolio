import React from "react";

const Header = () => {
  return (
    <section className="flex flex-col sm:flex-row lg:flex-row-reverse lg:items-end lg:justify-end lg:gap-12">
      <div className="max-w-96">
        <h1 className="text-5xl sm:text-6xl tracking-wide mb-4 font-medium">
          hello
          <br />
          world_
        </h1>
        <p className="text-2xl">I&apos;m Karen, a full stack developer</p>
      </div>
      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 self-end sm:self-auto border border-gray-600">
        {/* <Image
        src="/placeholder.svg"
        alt="Karen's profile"
        width={256}
        height={256}
        className="object-cover"
      /> */}
      </div>
    </section>
  );
};

export default Header;
