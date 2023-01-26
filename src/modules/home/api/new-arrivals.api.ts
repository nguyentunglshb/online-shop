import { HttpResponse, IProduct } from "@/interface";
import axiosClient from "@/libs/axios/axiosClient";
import { useQuery } from "react-query";

const newArrivalsFn = (): Promise<HttpResponse<IProduct[]>> =>
  axiosClient.get("/products");

export const useQueryGetNewArrtivals = () => {
  return useQuery({
    queryFn: newArrivalsFn,
    queryKey: "products",
  });
};
