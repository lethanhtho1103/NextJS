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
import { describe } from "node:test";

export default async function ProductLists() {
  const { payload } = await productApiRequest.getList();
  const productList = payload.data;
  console.log(productList);
  return (
    <>
      <h1>Danh sách sản phẩm</h1>
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
                  <Button variant={"outline"}>Sửa</Button>
                  <Button variant={"destructive"}>Xóa</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
