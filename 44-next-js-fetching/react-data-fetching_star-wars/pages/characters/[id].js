import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character({ persons }) {
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  console.log("person", persons);
  // const id = 1;

  return (
    <Layout>
      <Card
      // id={id}
      // name={person.name}
      // height={person.height}
      // eyeColor={person["eye_color"]}
      // birthYear={person["birth_year"]}
      />
    </Layout>
  );
}
