import { useQuery } from "react-query";

import { HttpResponse } from "@/interface";
import axiosClient from "@/libs/axios/axiosClient";

interface User {
  _id: string;
  status: "active" | "inactive";
  username: string;
  password: string;
  avatarUrl?: string;
}

const getUserFn = (): Promise<HttpResponse<User>> =>
  axiosClient.get("/users/info");

export const useQueryGetUser = () => {
  return useQuery({
    queryKey: "user",
    queryFn: getUserFn,
  });
};
