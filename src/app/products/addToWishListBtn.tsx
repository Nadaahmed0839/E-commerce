"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { addToWishlist } from "../api/addToWishlist";

export default function AddToWishListBtn({ productId }: { productId: string }) {
  async function handleAddItem() {
    const data = await addToWishlist(productId);

    console.log(`dtatttata`, data);
  }
  return (
    <>
      <Button onClick={handleAddItem} className="flex gap-4 pointer-events-auto">
        <span className="bg-[#11c074c2] cursor-pointer hover:bg-[#01854C] duration-300 rounded-full p-3">
          <i className="text-white text-[17px] fa-regular fa-heart"></i>
        </span>
      </Button>
    </>
  );
}