export default function Home() {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 w-screen bg-white text-black px-10 py-5">
        <div className="bg-gray-200 col-span-3 rounded-2xl text-5xl font-body font-bold p-5">
          Seijo Science Club
        </div>
        <div className="bg-gray-200 col-span-5 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="bg-gray-200 col-span-1 rounded-2xl p-5 font-body grid-rows-none">
          <div className="row-span-1 m-1 gap-2 text-center bg-indigo-500 rounded-lg text-xl">
            <a href="">生物班</a>
          </div>
          <div className="row-span-1 m-1 gap-2 text-center bg-indigo-500 rounded-lg text-xl">
            電脳班
          </div>
          <div className="row-span-1 m-1 gap-2 text-center bg-indigo-500 rounded-lg text-xl">
            科学班
          </div>
          <div className="row-span-1 m-1 gap-2 text-center bg-indigo-500 rounded-lg text-xl">
            無線班
          </div>
          <div className="row-span-1 m-1 gap-2 text-center bg-indigo-500 rounded-lg text-xl">
            標本班
          </div>
        </div>
        <div className="bg-gray-200 col-span-5 rounded-2xl p-5 font-body">
          center
        </div>
        <div className="bg-gray-200 col-span-2 rounded-2xl p-5 font-body">
          right
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body text-center">
          &copy;1885~2023 Seijo Science Club. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
