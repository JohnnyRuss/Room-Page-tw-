import React from "react";

interface SliderFigType {
  fig: {
    large: string;
    small: string;
  };
}

const SliderFig: React.FC<SliderFigType> = ({ fig }) => {
  return (
    <div className="tablet:col-start-1 desktop:col-end-8 tablet:col-end-7 tablet:row-start-1 tablet:row-end-2">
      <figure className="w-full h-full overflow-hidden">
        <img
          src={fig.large}
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
      </figure>
    </div>
  );
};

export default SliderFig;
