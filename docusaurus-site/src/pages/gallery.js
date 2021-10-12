import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ImageGallery from "react-image-gallery";

/** @type {Map<string, Map<string, { original: string; thumbnail: string }>>} */
const imageCache = new Map();

const niceNames = new Map([
  ["ecclesiastical", "Ecclesiastical"],
  ["frontages", "Frontages"],
  ["landings", "Landings"],
  ["bathrooms", "Bathrooms"],
  ["doorsfanlights", "Doors / Fanlights"],
  ["gifts", "Gifts"],
  ["localauthority", "Local Authority"],
  ["otherwork", "Other Work"],
  ["kilnfired", "Kiln Fired"],
  ["mosaics", "Mosaics"],
]);

function getGalleryImages(r) {
  r.keys().forEach((/** @type string */ key) => {
    const [_, pictureType, pictureName] = key.split("/");
    const isThumbnail = pictureName.endsWith("-t.jpg");
    const pictureNameWithoutSuffix = pictureName.slice(
      0,
      isThumbnail ? -6 : -4
    );

    /** @type {Map<string, { original: string; thumbnail: string }>} */
    const pictureTypes = imageCache.get(pictureType) || new Map();
    if (!imageCache.has(pictureType)) imageCache.set(pictureType, pictureTypes);

    const imagesInPictureType = pictureTypes.get(pictureNameWithoutSuffix);
    pictureTypes.set(
      pictureNameWithoutSuffix,
      Object.assign(
        {},
        isThumbnail
          ? { thumbnail: r(key).default }
          : { original: r(key).default },
        imagesInPictureType
      )
    );
  });
}

getGalleryImages(require.context("../../static/img/gallery", true, /\.jpg$/));

function MyGallery({ pictureTypeSelected }) {
  const imagesToDisplay = imageCache.has(pictureTypeSelected)
    ? Array.from(imageCache.get(pictureTypeSelected).values())
    : [];
  const images = imagesToDisplay.map(({ original, thumbnail }) => ({
    original,
    originalHeight: 500,
    thumbnail,
  }));
  // console.log('images', images)
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      autoPlay={true}
      lazyLoad={true}
    />
  );
}

function getQueryParams(/** @type boolean */ isBrowser) {
  return isBrowser
    ? window.location.search
        .substr(1)
        .split("&")
        .reduce((qs, query) => {
          const chunks = query.split("=");
          const key = chunks[0];
          let value = decodeURIComponent(chunks[1] || "");
          const valueLower = value.trim().toLowerCase();
          if (valueLower === "true" || value === "false") {
            value = Boolean(value);
          } else if (!isNaN(Number(value))) {
            value = Number(value);
          }
          return (qs[key] = value), qs;
        }, {})
    : {};
}

export default function Gallery() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
    const queryParams = new URLSearchParams(window.location.search);
    setPictureTypeSelected(
      queryParams.get("pictureType") || pictureTypes[0]
    );
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const pictureTypes = Array.from(imageCache.keys());
  const [pictureTypeSelected, setPictureTypeSelected] = useState(
    pictureTypes[0]
  );

  return (
    <Layout title={siteConfig.title} description={siteConfig.description}>
      <main>
        <ul className="pills">
          {pictureTypes.map((pictureType) => (
            <li
              key={pictureType}
              className={`pills__item ${
                pictureType === pictureTypeSelected ? "pills__item--active" : ""
              }`}
              onClick={() => {
                setPictureTypeSelected(pictureType);
                if (hasMounted && history)
                  history.pushState(
                    { pictureType },
                    pictureType,
                    "?pictureType=" + pictureType
                  );
              }}
            >
              {niceNames.get(pictureType) || pictureType}
            </li>
          ))}
        </ul>

        <MyGallery pictureTypeSelected={pictureTypeSelected} />
      </main>
    </Layout>
  );
}
