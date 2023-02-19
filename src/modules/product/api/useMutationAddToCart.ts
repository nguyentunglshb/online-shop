import { useMutation } from "react-query";
import { useToast } from "@chakra-ui/react";

import axiosClient from "@/libs/axios/axiosClient";

type AddToCartProps = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
};

const addToCartFn = (body: AddToCartProps) => axiosClient.post("/cart", body);

export const useMutationAddToCart = (productName: string) => {
  const toast = useToast();

  return useMutation({
    mutationKey: "add-to-cart",
    mutationFn: addToCartFn,
    onSuccess: () => {
      toast({
        title: `${productName} added to your cart`,
        status: "success",
        position: "bottom-left",
        duration: 3000,
      });
    },
  });
};
