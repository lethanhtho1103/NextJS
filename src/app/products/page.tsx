import React from "react";
import productApiRequest from "@/apiRequests/product";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DeleteAlertDialog from "./_components/delete-alert-dialog";

export default async function ProductLists() {
  const { payload } = await productApiRequest.getList();
  console.log(payload.data);
  const productList = payload.data;
  return (
    <>
      <h1>Danh sách sản phẩm</h1>
      <Link href={"/products/add"}>
        <Button>Thêm sản phẩm</Button>
      </Link>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Tên</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Mô tả</TableHead>
            <TableHead>Hình ảnh</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productList.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <Image
                    src={product.image}
                    height={128}
                    width={128}
                    alt={product.name}
                    className="w-32 h-32 object-cover"
                  />
                </TableCell>
                <TableCell className="flex space-x-2">
                  <Link href={`/products/${product.id}`}>
                    <Button variant={"outline"}>Sửa</Button>
                  </Link>
                  <DeleteAlertDialog product={product} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
