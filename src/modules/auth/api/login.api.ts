import { trackPromise } from "react-promise-tracker";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { ILoginForm } from "../models";
import axiosClient from "@/libs/axios/axiosClient";
import { ACCESS_TOKEN, setLocalStorage } from "@/libs";
import { NavigationFn } from "@/dictionary";

interface Response {
  access_token: string;
  user: {
    avatarUrl: string;
  };
}

const loginRequest = (body: ILoginForm): Promise<Response> =>
  trackPromise(axiosClient.post("/auth/login", body));

export const useMutationLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,
    mutationKey: "login",
    onSuccess: (data: Response) => {
      setLocalStorage(ACCESS_TOKEN, data.access_token);
      setLocalStorage("avatarUrl", data.user.avatarUrl);
      navigate(NavigationFn.HOME);
    },
  });
};
