import React from "react";
import styled from "styled-components/macro";
import ReactImageGallery from "react-image-gallery";
import theme from "../theme/theme.module.scss";
import img from "../assets/projects/watermelon-market/screenshots/1.png";

export const ImageGallery: React.FC<{}> = ({}) => {
  const items = [
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img,
      thumbnail: img,
    },
    {
      original: img,
      thumbnail: img,
    },
  ];
  return (
    <Root>
      <ReactImageGallery
        items={items}
        thumbnailPosition="right"
        showPlayButton={false}
        slideInterval={10000}
        autoPlay={true}
        showFullscreenButton={false}
      ></ReactImageGallery>
    </Root>
  );
};

const Root = styled.div`
  grid-area: gallery;
  min-width: 250px;
  /* Local overrides to image gallery buttons */
  &*:focus {
    outline: none;
    outline-offset: none;
  }
  .image-gallery-svg {
    height: 32px;
    width: 36px;
    stroke: ${theme.primaryColor};
  }
  .image-gallery-left-nav,
  .image-gallery-right-nav {
    padding: 50px 0px;
  }
  .image-gallery-image,
  .image-gallery-thumbnail-image {
    border-radius: 6px;
  }
  .image-gallery-thumbnail {
    transition: border 0.1s ease-out;
    border-radius: 6px;
    &.active,
    :hover {
      border: 1px solid ${theme.primaryColor};
    }
  }
`;
