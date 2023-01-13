import { useQuery } from "react-query";

import axiosClient from "@/libs/axios/axiosClient";

const getAllProductsFn = () => axiosClient.get("/products");

export const useQueryProducts = () => {
  return useQuery({
    queryFn: getAllProductsFn,
    onSuccess(data) {
      console.log(data);
    },
  });
};
