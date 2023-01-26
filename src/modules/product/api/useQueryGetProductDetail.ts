import { HttpResponse, IProduct } from "@/interface";
import axiosClient from "@/libs/axios/axiosClient";
import { useQuery } from "react-query";

const productDetailFn = (id: string): Promise<HttpResponse<IProduct>> =>
  axiosClient.get(`/products/${id}`);

export const useQueryGetProductDetail = (id: string) => {
  return useQuery({
    queryFn: () => productDetailFn(id),
    queryKey: ["product-detail", id],
  });
};
