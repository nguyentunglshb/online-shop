import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";

import { ISignupForm } from "../models";
import axiosClient from "@/libs/axios/axiosClient";

const signupRequest = (body: ISignupForm) =>
  trackPromise(axiosClient.post("/users", body));

export const useMutationSignup = () => {
  const mutation = useMutation({
    mutationFn: signupRequest,
    mutationKey: "signup",
  });

  return { mutation };
};
