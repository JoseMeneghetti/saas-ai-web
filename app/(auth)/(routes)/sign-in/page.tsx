import LoginForm from "@/components/login/login-form";
import RegisterButton from "@/components/login/register-button";
import Logo from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignInPage = () => {
  return (
    <Card className="w-full h-full md:h-auto md:max-w-[500px] m-auto md:mt-10 flex flex-col justify-center">
      <CardHeader>
        <div className="flex flex-col justify-center items-center gap-4">
          <Logo />
          <CardTitle className="text-4xl">Genius Login</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <RegisterButton />
      </CardContent>
    </Card>
  );
};

export default SignInPage;
