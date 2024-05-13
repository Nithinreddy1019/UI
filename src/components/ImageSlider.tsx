import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageSliderProps {
    imageList: string[],
    autoPlay: boolean,
    autoPlayDurationInSec: number
}


const ImageSlider = ({
    imageList,
    autoPlay=false,
    autoPlayDurationInSec=2
}: ImageSliderProps) => {

    const [current, setCurrent] = useState(0);

    const prevImageHandler = () => {
        setCurrent((current) => (
            current === 0 ? imageList.length-1 : current - 1
        ))
    };

    const nextImageHandler = () => {
        setCurrent((current) => (
            current === imageList.length-1 ? 0 : current + 1
        ))
    };

    useEffect(() => {
        if(autoPlay===false) return;

        const slideInterval = setInterval(nextImageHandler, autoPlayDurationInSec*1000);

        return () => clearInterval(slideInterval);
    }, [])

  return (
    <div className="relative bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500">

      <img 
        src={imageList[current]}
        className=" aspect-video"
    />

      <div className="px-1 w-full flex absolute top-1/2 justify-between">
        <button 
            onClick={prevImageHandler}
            className="text-white border-2 rounded-lg border-white hover:bg-slate-200 hover:bg-opacity-50 transition-colors duration-300"
        >
            <ChevronLeft />
        </button>
        <button 
            onClick={nextImageHandler}
            className="text-white border-2 rounded-lg border-white hover:bg-slate-200 hover:bg-opacity-50 transition-colors duration-300"
        >
            <ChevronRight />
        </button>
      </div>

      <div
        className="flex justify-center items-center gap-2 pb-2"
      >
        {
            imageList.map((image, i) => (
                <button 
                    key={i}
                    onClick={() => {
                        setCurrent(i)
                    }}
                    className={`w-2 h-2 bg-white rounded-xl ${current===i ? " p-0.5" : "bg-opacity-50"}`}
                > 

                </button>
            ))
        }
      </div>
    </div>
  )
}

export default ImageSlider
