"use client"

import React from "react";

import { UserButton, useUser } from "@clerk/nextjs";

import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import DesignerContextProvider from "@/contexts/DesignerContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log("Current User", user);

  return (
    <DesignerContextProvider>
      <div className="flex flex-col max-h-screen min-w-full min-h-screen bg-backgrond">
        <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
          <Logo />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
        <main className="flex flex-grow w-full">{children}</main>
      </div>
    </DesignerContextProvider>
  );
}
