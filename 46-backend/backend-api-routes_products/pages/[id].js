import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const id = router.query.id;
  const { data: selectedItem } = useSWR(`/api/products/${id}`, fetcher);

  if (!selectedItem) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      <li>Category: {selectedItem?.category}</li>
      <li>Name: {selectedItem?.name}</li>
      <li>Description: {selectedItem?.description}</li>
      <li>
        Price: {selectedItem?.price}
        {selectedItem?.currency}
      </li>
    </ul>
  );
}
