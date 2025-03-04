import React from "react";
import Heading from "../../../components/ui/Heading";
import Link from "next/link";
import AddProductForm from "@/app/components/products/AddProductForm";
import ProductForm from "@/app/components/products/ProductForm";

export default function page() {
  return (
    <>
      <Link
        className="rounded bg-green-400 font-bold py-2 px-10"
        href="/admin/products?page=1"
      >
        Volver
      </Link>
      <Heading>Nuevo Producto</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
