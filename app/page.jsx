import Image from "next/image"
import Carousel from "@/components/horizontal_scroller"

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2  place-items-center m-15 ">
        <div className="flex flex-col gap-6">
          <h1 className=" font-bold text-6xl " >Hire Private Chef</h1>
          <p>Enjoy gourmet meals, beautifully presented and freshly prepared just for you. Let us take care of the cooking while you relax, savor, and create lasting memories.</p>
        </div>
        <div className="h-auto w-125">
          <img src="/globe.svg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <h1 className=" font-bold text-6xl text-center my-20" >Popular Cuisine</h1>
      <Carousel/>


    </>
  )
}
