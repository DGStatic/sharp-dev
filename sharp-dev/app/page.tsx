import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen">
        <h1 className="m-auto py-8 mb-8 w-fit text-[2rem]">Dylan Sharp</h1>
        <div className="grid grid-cols-2 grid-rows-2 md:gap-[33.3%] min-w-[280px] min-h-[280px] max-h-[80%] sm:min-h-[420px] sm:min-w-[420px] sm:max-h-[480px] xl:max-h-[640px] max-w-[80%] sm:max-w-[480] xl:max-w-[640px] mx-auto aspect-square">
          <div className="">
            <button className="w-full h-full text-[1.25rem] border-2 border-black rounded-md hover:text-[1.5rem] duration-100">
              Projects
            </button>
          </div>
          <div className="">
            <button className="w-full h-full text-[1.25rem] border-2 border-black hover:text-[1.5rem] duration-100 rounded-md">
              Experience
            </button>
          </div>
          <div className="">
            <button className="w-full h-full text-[1.25rem] border-2 border-black hover:text-[1.5rem] duration-100 rounded-md">
              Education
            </button>
          </div>
          <div className="">
            <button className="w-full h-full text-[1.25rem] border-2 border-black hover:text-[1.5rem] duration-100 rounded-md">
              Technology
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
