import { Carousel } from "antd";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Card from "../../components/common/card/Card";
import CardHeader from "../../components/common/card/CardHeader";
import Layout from "../../components/layout/Layout";
import { Property } from "../../model/agency";
import { makeQuery } from "../../util/fetch";

const imageStyle: React.CSSProperties = {
  height: 460,
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
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
  const { agency, images } = property;
  console.log(property);
  return (
    <Layout>
      <div className="w-full">
        <div className="container flex-col gap-y-8">
          <Carousel autoplay>
            {images.map((u, i) => (
              <div key={i}>
                {/* TODO: optimize image display use ant.d or amplify*/}
                <div
                  style={{ ...imageStyle, backgroundImage: `url(${u})` }}
                ></div>
              </div>
            ))}
          </Carousel>
          <Card>
            <CardHeader title="Resumen">
              {/*TODO: Add share buttons*/}
              <strong>Código:</strong> {property._id}
            </CardHeader>
            {property.title}
          </Card>
          <Card>
            <CardHeader title="Descripción"></CardHeader>
            {property.description}
          </Card>
        </div>
      </div>
    </Layout>
  );
}
