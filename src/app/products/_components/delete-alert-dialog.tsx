"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ProductResType } from "@/schemaValidations/product.schema";
import productApiRequest from "@/apiRequests/product";
import { toast } from "sonner";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function DeleteAlertDialog({
  product,
}: {
  product: ProductResType["data"];
}) {
  const router = useRouter();
  const deleteProduct = async () => {
    try {
      const result = await productApiRequest.delete(product.id);
      toast.success(result.payload.message);
      router.refresh();
    } catch (error) {
      handleErrorApi({ error });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>Xóa</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Bạn có muốn xóa?</AlertDialogTitle>
          <AlertDialogDescription>
            Sản phẩm {product.name} sẽ bị xóa vĩnh viễn.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy</AlertDialogCancel>
          <AlertDialogAction onClick={deleteProduct}>
            {/* <Button variant={"destructive"}>Xác nhận</Button>
             */}
            Xác nhận
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
