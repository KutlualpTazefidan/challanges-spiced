import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "components/Comments";
import { StyledButton } from "components/Button/Button.styled";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, mutate, isLoading } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    if (!productData.name) productData.name = data.name;
    if (!productData.description) productData.description = data.description;
    if (!productData.price) productData.price = data.price;
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    console.log(await response.json());
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </StyledButton>
      {isEditMode && <ProductForm onSubmit={handleEditProduct} editForm />}
    </ProductCard>
  );
}
