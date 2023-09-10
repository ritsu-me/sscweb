export default function Home() {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 w-screen bg-white text-black px-10 py-5">
        <div className="bg-gray-200 col-span-3 rounded-2xl text-5xl font-body font-bold p-5">
          電脳班
        </div>
        <div className="bg-gray-200 col-span-5 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="col-span-1 rounded-2xl p-1 font-body grid-rows-none">
          <div className="row-span-1 p-1 m-3 gap-3 font-extrabold text-2xl">
            活動案内
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-lg transition duration-500">
            <a href="">生物班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-lg transition duration-500">
            <a href="">電脳班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-lg transition duration-500">
            <a href="">化学班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-lg transition duration-500">
            <a href="">無線班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-lg transition duration-500">
            <a href="">標本班</a>
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
