import React from "react";

interface SliderBTNType {
  activeIndex: number;
  handleSlide: (i: number) => void;
}

const SliderBTN: React.FC<SliderBTNType> = ({ activeIndex, handleSlide }) => {
  return (
    <div className="desktop:col-start-8 tablet:col-start-7 tablet:col-end-13 tablet:row-start-1 tablet:row-end-2 phone:-mt-12 tablet:mt-0 tablet:self-end tablet:!justify-self-start phone:justify-self-end py-3 px-5 flex items-center gap-10 w-[max-content] bg-app-black relative z-10">
      <button
        value={activeIndex - 1}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleSlide(+e.currentTarget.value)
        }
        className="cursor-pointer"
      >
        <span>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <button
        value={activeIndex + 1}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleSlide(+e.currentTarget.value)
        }
        className="cursor-pointer"
      >
        <span>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default SliderBTN;
