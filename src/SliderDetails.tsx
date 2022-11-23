import React from "react";
import ShopBTN from "./ShopBTN";

interface SliderDetailsType {
  title: string;
  description: string;
}

const SliderDetails: React.FC<SliderDetailsType> = ({ title, description }) => {
  return (
    <div className="p-3 tablet:col-start-7 tablet:col-end-13 tablet:row-start-1 tablet:row-end-2 tablet:p-5 tablet:pb-12 desktop:col-start-8 desktop:p-20 desktop:pb-20 bg-app-white">
      <h4 className="uppercase tracking-widest text-app-heading font-bold">
        {title}
      </h4>
      <p className="mt-7 h-auto tablet:h-28 text-app-light-gray">{description}</p>
      <ShopBTN />
    </div>
  );
};

export default SliderDetails;
