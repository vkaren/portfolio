import React from "react";

const Header = () => {
  return (
    <section className="mb-12 flex items-center justify-between">
      <div>
        <h1 className="text-6xl mb-4">
          hello
          <br />
          world_
        </h1>
        <p className="text-xl">I&apos;m Karen, a full stack developer</p>
      </div>
      <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden">
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
