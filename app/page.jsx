import Image from "next/image";

export default function Home() {
  return (
    <div>
        <div className="flex w-280 mx-auto min-h-screen bg-neutral-800">
          
            <div className="py-4 mx-auto bg-neutral-300 rounded-3xl shadow-2xl flex items-center h-full w-full">
              <h1>Hello world</h1>

            </div>
            <div className="py-4 px-4 mx-auto bg-neutral-300 rounded-3xl shadow-2xl flex items-center h-full w-full">
              <h1>How are you</h1>

            </div>

        </div>
    </div>
  );
}
