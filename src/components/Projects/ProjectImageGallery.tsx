import React from "react";
import styled from "styled-components/macro";
import ReactImageGallery from "react-image-gallery";
import theme from "../../theme/theme.module.scss";

interface ProjectImageGalleryProps {
  images: string[];
}

export const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({
  images,
}) => {
  const items = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
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
  height: 250px;
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
    object-fit: cover;
    max-height: 250px !important;
  }
  .image-gallery-thumbnail-image {
    max-height: 60px !important;
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
