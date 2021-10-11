import React from "react";
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
  // console.log("cache", cache);
  // console.log(
  //   `cache.get(${pictureTypeSelected})`,
  //   cache.get(pictureTypeSelected)
  // );
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

export default function Gallery() {
  const { siteConfig } = useDocusaurusContext();
  const pictureTypes = Array.from(imageCache.keys());
  let pictureTypeSelected = "bathrooms"; // [...cache.keys()][0];
  try {
    pictureTypeSelected =
      new URLSearchParams(window.location.search).get("pictureType") ||
      pictureTypes[0];
  } catch (e) {
    console.error('failed to read URLSearchParams', e)
  }
  // console.log("pictureTypes", pictureTypes);
  // console.log("pictureTypeSelected", pictureTypeSelected);

  return (
    <Layout title={siteConfig.title} description={siteConfig.description}>
      <main>
        <ul className="pills">
          {pictureTypes.map((pictureType) => (
            <li
              key={pictureType}
              className={`pills__item ${
                pictureType === pictureTypeSelected
                  ? "pills__item--active"
                  : ""
              }`}
            >
              <a href={`?pictureType=${pictureType}`}>{niceNames.get(pictureType) || pictureType}</a>
            </li>
          ))}
        </ul>

        <MyGallery pictureTypeSelected={pictureTypeSelected} />
      </main>
    </Layout>
  );
}
