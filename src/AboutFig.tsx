import React from "react";

interface AboutFigType {
  src: string;
}

const AboutFig: React.FC<AboutFigType> = ({src}) => {
  return (
    <div className="tablet:col-span-4 tablet:row-start-2 tablet:row-end-3">
      <figure className="w-full h-full overflow-hidden">
        <img
          src={src}
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
      </figure>
    </div>
  );
};

export default AboutFig;
