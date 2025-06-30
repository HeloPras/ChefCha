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
    </>
  )
}
