import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from "..";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1140px] mx-auto flex justify-between items-center sm:px-10 py-5 px-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
