import React from "react";

interface AboutDetailsType {
  title: string;
  description: string;
}

const AboutDetails: React.FC<AboutDetailsType> = ({ title, description }) => {
  return (
    <div className="p-3 tablet:col-span-4 tablet:row-start-2 tablet:row-end-3 tablet:p-6 bg-app-white">
      <h4 className="uppercase tracking-widest text-app-heading-secondary font-medium">
        {title}
      </h4>
      <p className="mt-4 text-app-light-gray">{description}</p>
    </div>
  );
};

export default AboutDetails;
