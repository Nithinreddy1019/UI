import { CircleChevronLeft, CircleChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface CarouselProps {
    children: React.ReactNode[],
    autoSlide: boolean,
    autoSlideDuration: number,
}


const Carousel = ({
    children,
    autoSlide=false,
    autoSlideDuration=3000
}: CarouselProps) => {

    const [current, setCurrent] = useState(0);

    const prevImageHandler = () => {
        setCurrent((current) => (
            current === 0 ? children.length-1 : current-1
        ))
    };

    const nextImageHandler = () => {
        setCurrent((current) => (
            current === children.length-1 ? 0 : current+1
        ))
    };


    useEffect(() => {
        if(!autoSlide) return;

        const slideInterval = setInterval(nextImageHandler, autoSlideDuration);

        return () => clearInterval(slideInterval);
    }, [])

  return (
    <div className=" relative overflow-hidden bg-gradient-to-tr from-purple-200 to-purple-900 via-purple-300 ">
        <div className="flex max-w-xl  h-full transition-transform ease-in-out duration-500" style={{transform: `translateX(-${current*100}%)`}}>
            {children}
        </div>
        <div className="w-full flex justify-between items-center inset-0 absolute px-1">
            <button
                onClick={prevImageHandler}
            >
                <CircleChevronLeft  size={28} className="hover:bg-gray-300 text-white hover:bg-opacity-50 rounded-3xl "/>
            </button>
            <button
             onClick={nextImageHandler}
            >
                <CircleChevronRight size={28} className="hover:bg-gray-300 text-white hover:bg-opacity-50 rounded-3xl" />
            </button>
        </div>
        <div className="flex justify-center items-center gap-x-2 pb-2">
            {children.map((x, i) => (
                <div
                    key={i} 
                    className={`w-2 h-2 rounded-xl bg-gray-100 ${current === i ? "p-0.5" : "bg-opacity-50"}`}>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Carousel
