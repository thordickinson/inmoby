import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { useQuery } from "react-query";
import { makeQuery } from "../../utils/misc";
import Header from "./Header";
import Preload from "./Preload";

export default function AgencyBaseLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const { agency: agencyKey } = router.query;
  const agencyQuery = useQuery(
    [agencyKey],
    makeQuery(`/api/v1/agencies/${agencyKey}`),
    { enabled: !!agencyKey }
  );
  const agency = agencyQuery.data;
  if (agencyQuery.isLoading) return <Preload></Preload>;
  return (
    <>
      <div className="wrapper">
        <Header agency={agency}></Header>
        {children}
      </div>
    </>
  );
}
