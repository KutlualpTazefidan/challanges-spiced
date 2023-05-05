import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/products", fetcher);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Here are all the products</h1>
      {console.log(data)}
      <ul>
        {data
          ? data.map((product, i) => <li key={i}>{product.name}</li>)
          : null}
      </ul>
    </div>
  );
}
