import { Carousel } from "antd";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Card from "../../../components/common/Card";
import Layout from "../../../components/layout/layout";
import { Property } from "../../../model/agency";
import { makeQuery } from "../../../util/fetch";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
/**
 * https://demo17.houzez.co/property/apartment-for-sale-3/
 * @returns
 */
export default function PropertyView() {
  const router = useRouter();
  const { id } = router.query;
  const dataQuery = useQuery([id], makeQuery(`/api/v1/properties/${id}`), {
    enabled: !!id,
  });
  const property = dataQuery.data;
  if (!property) return <div>{id}</div>;
  return buildPropertyLayout(property);
}

function buildPropertyLayout(property: Property) {
  const { agency } = property;
  return (
    <Layout>
      <div className="container flex-col">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Card>{property.title}</Card>;
      </div>
    </Layout>
  );
}
