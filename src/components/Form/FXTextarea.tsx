import { TInput } from "@/src/types";
import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

interface IProps extends TInput {
  type?: string;
}

export default function FXTextarea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const currentValue = useWatch({ name });

  return (
    <Textarea
      {...register(name)}
      label={label}
      minRows={6}
      variant={variant}
      value={currentValue || ""}
    />
  );
}
