import React from "react";

const Header = () => {
  return (
    <section className="max-w-[900px] mb-12 mx-auto flex items-center justify-between">
      <div className="max-w-96">
        <h1 className="text-6xl tracking-wide mb-4 font-medium">
          hello
          <br />
          world_
        </h1>
        <p className="text-2xl">I&apos;m Karen, a full stack developer</p>
      </div>
      <div className="w-96 h-96 border border-gray-600">
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
