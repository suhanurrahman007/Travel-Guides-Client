"use client";

import FXForm from "@/src/components/Form/FXForm";
import FXInput from "@/src/components/Form/FXInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import Loading from "@/src/components/UI/Loading";
import loginValidationSchema from "@/src/schemas/login.schema";
import { useLoginUser } from "@/src/hooks/authUser";

const LoginPage = () => {
  const {setIsLoading} = useUser()
  const { mutate: handleLogin, isPending, isSuccess } = useLoginUser();
  const searchParams = useSearchParams()
  const router = useRouter()
  const redirect = searchParams.get("redirect")
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLogin(data);
    setIsLoading(true)
  };

  useEffect(()=>{
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect)
      } else {
        router.push("/")
      }
    }

  }, [isPending, isSuccess])

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FXForm
            //! Only for development
            defaultValues={{
              email: "mir@gmail.com",
              password: "123456",
            }}
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <FXInput name="email" label="Email" type="email" />
            </div>
            <div className="py-3">
              <FXInput name="password" label="Password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          <div className="text-center">
            Don&lsquo;t have account ?{" "}
            <Link
              className="text-blue-600 font-bold underline"
              href={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
