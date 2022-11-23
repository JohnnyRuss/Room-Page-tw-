import { useState } from "react";

import SliderDetails from "./SliderDetails";
import Nav from "./Nav";
import SliderFig from "./SliderFig";
import SliderBTN from "./SliderBTN";
import AboutFig from "./AboutFig";
import AboutDetails from "./AboutDetails";

import data from "./data.json";

function App() {
  const [activeSlide, setActiveSlide] = useState(data.slider[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleSlide(i: number) {
    const length = data.slider.length;
    if (i >= data.slider.length) {
      setActiveIndex(0);
      setActiveSlide(data.slider[0]);
    } else if (i < 0) {
      setActiveIndex(data.slider.length - 1);
      setActiveSlide(data.slider[length - 1]);
    } else {
      setActiveIndex(i);
      setActiveSlide(data.slider[i]);
    }
  }

  return (
    <main className="w-full max-w-container mx-auto grid tablet:grid-cols-12 tablet:grid-rows-[max-content_max-content]">
      <Nav />
      <SliderFig fig={activeSlide.img} />
      <SliderBTN activeIndex={activeIndex} handleSlide={handleSlide} />
      <SliderDetails
        title={activeSlide.title}
        description={activeSlide.description}
      />
      <AboutFig src={data.about.fig.dark} />
      <AboutDetails
        title={data.about.title}
        description={data.about.description}
      />
      <AboutFig src={data.about.fig.light} />
    </main>
  );
}

export default App;
