import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { loginUser, registerUser } from "../services/AuthService";
import { toast } from "sonner";

export const useRegisterUser = () => {
    return (
        useMutation<any, Error, FieldValues>({
            mutationKey: ["User_Registration"],
            mutationFn: async (userData) => await registerUser(userData),
            onSuccess: ()=> {
                toast.success("User Registration successfully...!!");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        })
    );
};


export const useLoginUser = () => {
    return (
        useMutation<any, Error, FieldValues>({
            mutationKey: ["User_Login"],
            mutationFn: async (userData) => await loginUser(userData),
            onSuccess: () => {
                toast.success("User Login successfully...!!");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        })
    );
};
