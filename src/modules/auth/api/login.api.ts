import axiosClient from "@/libs/axios/axiosClient";
import { useMutation, useQueryClient } from "react-query";

const loginRequest = () => axiosClient.post("/auth/login");

export const useMutationLogin = ({}) => {
  const queryClient = useQueryClient();

  return useMutation;
};
