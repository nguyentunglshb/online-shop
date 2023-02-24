import { useQuery } from "react-query";

import { HttpResponse } from "@/interface";
import axiosClient from "@/libs/axios/axiosClient";

type CartItem = {
  name: string;
  price: number;
  productId: string;
  quantity: number;
  subTotalPrice: number;
};

type Cart = {
  _id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
};

const getCartFn = (): Promise<HttpResponse<Cart>> => axiosClient.get("/cart");

export const useQueryGetCart = () => {
  return useQuery({
    queryFn: getCartFn,
    queryKey: "get-user-cart",
  });
};
