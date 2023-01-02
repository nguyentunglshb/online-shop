import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";

import { ILoginForm } from "../models";
import axiosClient from "@/libs/axios/axiosClient";

const loginRequest = (body: ILoginForm) =>
  trackPromise(axiosClient.post("/auth/login", body));

export const useMutationLogin = () => {
  const mutation = useMutation({
    mutationFn: loginRequest,
    mutationKey: "login",
  });

  return { mutation };
};
