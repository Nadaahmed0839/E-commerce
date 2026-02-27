"use server";

import axios from "axios";
import { getMyToken } from "./getMyToken";

export async function getUserCart() {
  const token = await getMyToken();
  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      headers: {
        token: token as string,
      },
    },
    );
    
  return data;
}
