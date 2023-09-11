export default function Home() {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 w-screen bg-white text-black px-10 py-5">
        <div className="bg-gray-200 col-span-1 rounded-2xl text-5xl font-body font-bold p-5">
          <img src="../favicon.ico" />
        </div>
        <div className="bg-gray-200 col-span-3 rounded-2xl text-5xl font-body font-bold p-5">
          Seijo Science Club
        </div>
        <div className="bg-gray-200 col-span-1 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="bg-gray-200 col-span-1 text-center font-bold rounded-2xl px-5 py-10 font-body">
          トップ
        </div>
        <div className="bg-gray-200 col-span-1 text-center font-bold rounded-2xl px-5 py-10 font-body">
          実績
        </div>
        <div className="bg-gray-200 col-span-1 text-center font-bold rounded-2xl px-5 py-10 font-body">
          SNS
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="col-span-3 rounded-2xl font-body grid-rows-none">
          <div className="row-span-1 p-1 gap-3 text-center font-extrabold text-4xl">
            活動案内
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-2xl transition duration-500">
            <a href="">生物班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-2xl transition duration-500">
            <a href="./techs">電脳班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-2xl transition duration-500">
            <a href="">化学班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-2xl transition duration-500">
            <a href="">無線班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-lg text-2xl transition duration-500">
            <a href="">標本班</a>
          </div>
        </div>
        <div className="col-span-5 rounded-2xl font-body grid-rows-none">
          <post className="gap-5 m-5 row-span-1 bg-gray-200 rounded-2xl p-5 grid grid-rows-3 border-l-8 border-indigo-500">
            <topic className="row-span-1 border-b-2 border-gray-300 text-2xl p-2">
              Topic:無線班が全国大会で優勝しました！
            </topic>
            <content className="row-span-2">
              科学部無線班(登記名：
              <a href="https://www.tele.soumu.go.jp/musen/SearchServlet?pageID=4&IT=A&DFCD=0003638199&DD=1&styleNumber=50">
                成城高校科学部
              </a>{" "}
              / 局番：JA1YXX)が2022年度全市全郡コンテストで優勝しました。
            </content>
          </post>
          <post className="gap-5 m-5 row-span-1 bg-gray-200 rounded-2xl p-5 grid grid-rows-3 border-l-8 border-indigo-500">
            <topic className="row-span-1 border-b-2 border-gray-300 text-2xl p-2 ">
              Topic:第n回生物班フィールドワークを実施しました！
            </topic>
            <content className="row-span-2"></content>
          </post>
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body text-center">
          &copy;1924~2023 Seijo Science Club. All Rights Reserved.
        </div>
      </div>
    </>
  );

}