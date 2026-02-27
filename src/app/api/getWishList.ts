"use server";
import axios from "axios";
import { getMyToken } from "./getMyToken";

export async function getWishlist() {
  const token = await getMyToken();
  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      headers: {
        token: token as string,
      },
    },
  );
  console.log(data);

  return data;
}
