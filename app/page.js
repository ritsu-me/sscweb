export default function Home() {
  return (
    <>
      <div className="grid grid-cols-6 gap-5 w-screen bg-white text-black px-10 py-5">
        <div className="bg-gray-200 col-span-2 rounded-2xl text-5xl font-body font-bold p-5">
          SSC
        </div>
        <div className="bg-gray-200 col-span-4 rounded-2xl p-5">Spacer</div>
        <div className="bg-gray-200 col-span-6 rounded-2xl p-5">Spacer</div>
        <div className="bg-gray-200 col-span-2 rounded-2xl p-5">left</div>
        <div className="bg-gray-200 col-span-2 rounded-2xl p-5">center</div>
        <div className="bg-gray-200 col-span-2 rounded-2xl p-5">right</div>
        <div className="bg-gray-200 col-span-6 rounded-2xl p-5">Footer</div>
      </div>
    </>
  );
}
