"use client"
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <main>
      <Navbar />
        <h2>Hello</h2>
        <Button>
            <LoginLink>Sign in</LoginLink>
        </Button>
        <Button>
            <RegisterLink>Sign up</RegisterLink>
        </Button>
    </main>
  );
}
