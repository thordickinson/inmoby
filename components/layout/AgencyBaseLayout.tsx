import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";
import { useQuery } from "react-query";
import { AgencyContext, DefaultAgency } from "../../common/contexts";
import { makeTheme, ThemeContext } from "../../common/theme";
import { makeQuery } from "../../utils/misc";
import Header from "./Header";
import Preload from "./Preload";
43;

export default function AgencyBaseLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const { agency: agencyKey } = router.query;
  const agencyQuery = useQuery(
    [agencyKey],
    makeQuery(`/api/v1/agencies/${agencyKey}`),
    { enabled: !!agencyKey }
  );
  const agency = DefaultAgency || agencyQuery.data;
  const theme = useMemo(() => makeTheme(agency), [agency]);
  if (!agency && agencyQuery.isLoading) return <Preload></Preload>;
  return (
    <AgencyContext.Provider value={agency}>
      <ThemeContext.Provider value={theme}>
        <div className="wrapper">
          <Header></Header>
          {children}
        </div>
      </ThemeContext.Provider>
    </AgencyContext.Provider>
  );
}
