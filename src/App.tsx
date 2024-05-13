import Carousel from "./components/Carousel"

import finance from "./assets/images/finance.svg";
import investing from "./assets/images/investing.svg";
import payments from "./assets/images/payments.svg";
import projections from "./assets/images/projections.svg";
import ImageSlider from "./components/ImageSlider";

export const imagesList = [finance, investing, payments, projections]

function App() {

  return (
    <div className="h-screen">
      {/* <div className="h-screen flex justify-center items-center">
        <Carousel
          autoSlide={true}
          autoSlideDuration={5000}
        >
          {imagesList.map(image => (
            <img src={image} className="p-8"/>
          ))}
        </Carousel>

      </div> */}
      <div className="h-full flex justify-center items-center">
        <ImageSlider 
          imageList={imagesList}
          autoPlay={false}
          autoPlayDurationInSec={2}

        />
      </div>
    </div>
  )
}

export default App
