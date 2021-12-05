import { useParams } from "react-router-dom";
export default function PkmDetailsPage() {
  let { pkmId } = useParams();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Detail {pkmId}</h2>
    </main>
  );
}
