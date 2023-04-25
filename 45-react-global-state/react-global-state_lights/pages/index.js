import Link from "../components/Link";
import { useLightStore } from "../stores/lightStorage";

export default function HomePage() {
  const lengthLightsOn = useLightStore((state) => state.numberOfLights());
  return (
    <div>
      <h1>Home</h1>
      {console.log("length", lengthLightsOn)}
      <p> {lengthLightsOn} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
