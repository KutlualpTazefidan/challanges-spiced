import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import useSWR from "swr";
export default function HomePage() {
  const URL = `https://swapi.dev/api/people/`;
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  console.log(data);
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        {data ? (
          data.results.map((person, i) => (
            <li key={i}>
              <StyledLink person={person} href={`/characters/${i + 1}`}>
                {person.name}
              </StyledLink>
            </li>
          ))
        ) : (
          <></>
        )}
      </List>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;
