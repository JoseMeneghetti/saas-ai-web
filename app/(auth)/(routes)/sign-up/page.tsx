"use client";

import Logo from "@/components/logo";
import LoginButton from "@/components/sign-up/login-button";
import SignUpForm from "@/components/sign-up/register-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignUpPage = () => {
  return (
    <Card className="w-full h-full md:h-auto md:max-w-[500px] m-auto md:mt-10 flex flex-col justify-center">
      <CardHeader>
        <div className="flex flex-col justify-center items-center gap-4">
          <Logo />
          <CardTitle className="text-4xl">Genius Register</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <SignUpForm />
        <LoginButton />
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
