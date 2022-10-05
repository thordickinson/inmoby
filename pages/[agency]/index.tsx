import { useRouter } from "next/router";

export default function AgencyHome() {
  const router = useRouter();
  const { agency } = router.query;
  return <div>hello {agency}</div>;
}
