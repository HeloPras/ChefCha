import Image from "next/image"
import Card from "@/components/card"
import { ArrowRightCircle } from "@deemlol/next-icons";
import { ArrowLeftCircle } from "@deemlol/next-icons";



export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2  place-items-center m-5 ">
        <div className="flex flex-col gap-6">
          <h1 className=" font-bold text-6xl ">Hire Private Chef</h1>
          <p>
            Enjoy gourmet meals, beautifully presented and freshly prepared just
            for you. Let us take care of the cooking while you relax, savor, and
            create lasting memories.
          </p>
        </div>
        <div className="h-auto w-125">
          <img src="/globe.svg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <h1 className=" font-bold text-6xl text-center my-20">Popular Cuisine</h1>
      <div className="mx-20 mb-20">
        <Card />
      </div>

      <h3 className="text-[#c81415] font-bold">STANDOUT CHEFS</h3>
      <h1 className="font-bold text-6xl mb-10">Featured Chefs</h1>
      <div className="flex justify-end">
        <ArrowLeftCircle size={35} color="#FFAB01" />
        <ArrowRightCircle size={35} color="#FFAB01" />
      </div>

      <Card />

      <div className="grid grid-cols-[1fr_1fr] mt-30  ">
        <div className="h-150 w-auto overflow-hidden rounded ">
          <img
            src="/chef.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col text-left gap-7 justify-center ">
          <div className="flex gap-2">
            <div className="h-7 w-auto  ">
              <img
                src="/star.png"
                alt="star"
                className="w-full h-full object-contain "
              />
            </div>
            <div className="h-7 w-auto  ">
              <img
                src="/star.png"
                alt="star"
                className="w-full h-full object-contain "
              />
            </div>
            <div className="h-7 w-auto  ">
              <img
                src="/star.png"
                alt="star"
                className="w-full h-full object-contain "
              />
            </div>
            <div className="h-7 w-auto  ">
              <img
                src="/star.png"
                alt="star"
                className="w-full h-full object-contain "
              />
            </div>
            <div className="h-7 w-auto  ">
              <img
                src="/star.png"
                alt="star"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <h1 className="text-[#FEAA01] font-bold underline ">TESTIMONIAL</h1>
          <h1 className="text-5xl font-bold max-w-2xl">
            {" "}
            What Our Customers Says About Us
          </h1>
          <p className="text-2xl max-w-2xl text-gray-500 ">
            I had a pleasure of dining at home last night, and I'm still raving
            about the experience! The smoky flavours, attention to detail in
            presentation, exceptional service were truly impeccable.
          </p>
          <div className="flex  ">
            <div className=" relative flex ">
              <div className="rounded-full overflow-hidden h-15 w-15 bg-amber-200 border-4 border-white">
                <img
                  src="/chef.png"
                  alt=""
                  className="h-full w-full object-cover border"
                />
              </div>
              <div className="absolute left-10 rounded-full overflow-hidden h-15 w-15 bg-amber-200 border-4 border-white">
                <img
                  src="/chef.png"
                  alt=""
                  className="h-full w-full object-cover border"
                />
              </div>
              <div className="absolute left-20 rounded-full overflow-hidden h-15 w-15 bg-amber-200 border-4 border-white ">
                <img
                  src="/chef.png"
                  alt=""
                  className="h-full w-full object-cover border"
                />
              </div>
            </div>
            <div className="flex flex-col ml-25 gap-2">
              <h1 className="font-bold text-xl">Customer Feedback</h1>
              <div className="flex gap-2">
              <div className="h-7 w-auto  ">
              <img
                src="/star.png"
                alt="star"
                className="w-full h-full object-contain "
              />
            </div>
            <p className="font-semibold">4.9</p>
            <p className="text-gray-500">(15.reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
