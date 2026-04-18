import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="flex  w-full mx-auto justify-center items-center h-[400px] bg-neutral-800">
          
            <div className="py-4 px-4 bg-neutral-300 rounded-3xl shadow-2xl flex items-center h-full w-full">
              <h1>Hello world</h1>

            </div>
            <div className="py-4 px-4 bg-neutral-300 rounded-3xl shadow-2xl flex items-center h-full w-full">
              <h1>How are you</h1>

            </div>

        </div>
      </div>
    </div>
  );
}
