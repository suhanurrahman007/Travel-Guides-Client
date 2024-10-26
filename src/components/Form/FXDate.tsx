import { TInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

const FXDate = ({ label, name, variant = "bordered" }: TInput) => {
  return (
    <Controller
      name={name}
      render={({field: {value, ...fields}}) => (
        <DatePicker
          label={label}
          variant={variant}
          {...fields}
          className="sm:max-w-[284px] min-w-full"
        />
      )}
    ></Controller>
  );
};

export default FXDate;
