"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Ensure styles are imported
import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";

export default function Videos() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <SectionContainer className="pt-[100px] md:pt-[200px] w-full max-w-[1600px]">
      <CustomHeader1 className="text-start">VIDEOS</CustomHeader1>
      <Carousel
        responsive={responsive}
        className="w-full"
        showDots
        containerClass="carousel-container pb-8 w-full"
        dotListClass="custom-dot-list-style"
        itemClass="px-4"
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <video
            key={index}
            className="rounded-lg min-w-[200px] hover:cursor-pointer"
            controls
            controlsList="nodownload noremoteplayback noplaybackrate"
            width="1280"
            height="720"
            disablePictureInPicture
          >
            <source src={`/videos/blog_${index}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </Carousel>
    </SectionContainer>
  );
}
