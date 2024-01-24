"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <h2 className="text-4xl text-destructive">Something went wrong!</h2>
      <Button asChild>
        <Link href={"/"}>Go back to home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
