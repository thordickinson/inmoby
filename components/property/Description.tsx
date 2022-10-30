import { useContext, useState } from "react";
import { ThemeContext } from "../../common/theme";
import { Property } from "../../model/agency";

interface DescriptionParams {
  property: Property;
}

function trimString(text: string, maxLength: number): string | undefined {
  if (!text) return undefined;
  if (text.length > maxLength) return text.substring(0, maxLength - 3) + "...";
  return text;
}

export default function Description({ property }: DescriptionParams) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const rooms = property.features["rooms"];
  const baths = property.features["baths"];
  const builtArea = property.features["builtArea"];
  const theme = useContext(ThemeContext);
  const descToggleStyle = { color: theme.getPrimaryColor().toHexString() };
  const description = showFullDescription
    ? property.description
    : trimString(property.description, 512);
  return (
    <div className="col-lg-12">
      <div className="listing_single_description">
        <div className="lsd_list">
          <ul className="mb0">
            <li className="list-inline-item">
              <a href="#">{property.type}</a>
            </li>
            {rooms && (
              <li className="list-inline-item">
                <a href="#">Habitaciones: {rooms}</a>
              </li>
            )}
            {baths && (
              <li className="list-inline-item">
                <a href="#">Baños: {baths}</a>
              </li>
            )}
            {builtArea && (
              <li className="list-inline-item">
                <a href="#">Área construida: {builtArea} m²</a>
              </li>
            )}
          </ul>
        </div>
        <h4 className="mb30">Descripción</h4>
        <p className="mb25">{description}</p>
        <p className="overlay_close">
          <span
            style={descToggleStyle}
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-thm fz14"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Mostrar {showFullDescription ? "menos" : "más"}{" "}
            <i
              className={
                (showFullDescription
                  ? "flaticon-upload"
                  : "flaticon-download-1") + " fz12"
              }
            ></i>
          </span>
        </p>
      </div>
    </div>
  );
}
