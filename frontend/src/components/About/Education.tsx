import { memo } from "react"
import TAMUSAIMG from "../../assets/TAMUSA.png"
import PAC from "../../assets/PAC.png"

const Education = () => {
  return (
    <div className="py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight text-left">
        Education
      </h1>
      <div className="flex flex-col gap-4 sm:p-4 border rounded-md">
        <div className="text-md flex gap-4 p-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12">
            <img className="aspect-square h-full w-full bg-white object-contain" src={TAMUSAIMG} alt="" />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Texas A&M University San Antonio</p>
            <div className="text-sm sm:text-md sm:flex sm:justify-between">
              <p>BS in Computer Science</p>
              <p>June 2023 - May 2025</p>
            </div>
          </div>
        </div>

        <div className="text-md flex gap-4 p-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12">
            <img className="aspect-square h-full w-full bg-white object-contain" src={PAC} alt="" />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Palo Alto College</p>
            <div className="text-sm sm:text-md sm:flex sm:justify-between">
              <p>Associate of Science</p>
              <p>August 2019 - December 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Education);