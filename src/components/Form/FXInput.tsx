"use client";

import { TInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface TProps extends TInput {}

export default function FXInput({
  variant = "bordered",
  size = "sm",
  required = false,
  type = "text",
  label,
  name,
}: TProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    />
  );
}
