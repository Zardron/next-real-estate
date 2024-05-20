"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const path = usePathname();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex justify-between p-6 px-10 shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center">
        <Image src={"/logo.svg"} width={150} height={150} alt="logo" />

        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`${
                path === "/" && "text-primary font-semibold"
              } hover:text-primary text-md font-medium cursor-pointe`}
            >
              For Sale
            </li>
          </Link>
          <Link href={"/for-rent"}>
            <li
              className={`${
                path === "/for-rent" && "text-primary font-semibold"
              } hover:text-primary text-md font-medium cursor-pointe`}
            >
              For Rent
            </li>
          </Link>
          <Link href={"/agent-finder"}>
            <li
              className={`${
                path === "/agent-finder" && "text-primary font-semibold"
              } hover:text-primary text-md font-medium cursor-pointe`}
            >
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Link href={"/add-new-listing"}>
          <Button className="gap-2">
            <Plus className="w-5 h-5" /> Post Your Ad
          </Button>
        </Link>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
