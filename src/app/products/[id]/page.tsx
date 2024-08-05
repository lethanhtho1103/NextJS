import productApiRequest from "@/apiRequests/product";
import React from "react";
import ProductAddForm from "../_components/product-add-form";

export default async function ProductEdit({
  params,
}: {
  params: { id: string };
}) {
  let product = null;
  try {
    const { payload } = await productApiRequest.getDetail(Number(params.id));
    product = payload.data;
  } catch (error) {}

  return (
    <div>
      {product ? (
        <ProductAddForm product={product} />
      ) : (
        <div>Không tìm thấy sản phẩm</div>
      )}
    </div>
  );
}
