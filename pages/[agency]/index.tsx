import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Layout from "../../components/layout/layout";
import { makeQuery } from "../../util/fetch";

/**
 * https://demo17.houzez.co/
 * @returns
 */
export default function AgencyHome() {
  const router = useRouter();
  const { agency } = router.query;
  const query = useQuery([agency], makeQuery(`/api/v1/agencies/${agency}`));
  const agencyData = query.data;
  if (!agencyData) return <div>Loading</div>;
  return <Layout>hola mundo</Layout>;
}
