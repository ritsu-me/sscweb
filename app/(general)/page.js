export default function Home() {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 w-screen bg-white text-black px-10 py-5">
        <div className="bg-gray-200 col-span-4 rounded-2xl text-5xl font-body font-bold p-5 flex items-center text-center">
          <img className="h-20 w-auto" src="../favicon.ico" />
          Seijo Science Club
        </div>
        <div className="bg-gray-200 col-span-4 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body">
          Spacer
        </div>
        <div className="col-span-5 rounded-2xl font-body grid-rows-none">
          <div className="row-span-1 p-1 gap-3 text-center font-extrabold text-4xl">
            活動案内
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-2xl text-3xl transition duration-500">
            <a href="#biology">🐡生物班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-2xl text-3xl transition duration-500">
            <a href="#techs">🖥電脳班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-2xl text-3xl transition duration-500">
            <a href="#chemical">🧪化学班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-2xl text-3xl transition duration-500">
            <a href="#radio">📡無線班</a>
          </div>
          <div className="row-span-1 p-1 m-3 gap-3 text-center font-semibold bg-gray-200 border-2 border-transparent hover:border-indigo-500 rounded-2xl text-3xl transition duration-500">
            <a href="#biopsy">🐁標本班</a>
          </div>
        </div>
        <div className="col-span-3 rounded-2xl font-body grid-rows-none">
          <div className="row-span-1 p-1 gap-3 text-center font-extrabold text-4xl">
            活動実績
          </div>
          <post className="gap-5 m-5 row-span-1 bg-gray-200 rounded-2xl p-5 grid grid-rows-2 border-l-8 border-indigo-500">
            <topic className="row-span-1 border-b-2 border-gray-300 text-2xl p-2">
              Topic:無線班が全国大会で優勝しました！
            </topic>
            <content className="row-span-1">
              科学部無線班(登記名：
              <a href="https://www.tele.soumu.go.jp/musen/SearchServlet?pageID=4&IT=A&DFCD=0003638199&DD=1&styleNumber=50">
                成城高校科学部
              </a>{" "}
              / 局番：JA1YXX)が2022年度全市全郡コンテストで優勝しました。
            </content>
          </post>
          <post className="gap-5 m-5 row-span-1 bg-gray-200 rounded-2xl p-5 grid grid-rows-1 border-l-8 border-indigo-500">
            <topic className="row-span-1 border-b-2 border-gray-300 text-2xl p-2 ">
              Topic:第n回生物班フィールドワークを実施しました！
            </topic>
            <content className="row-span-1"></content>
          </post>
        </div>
        <div className="col-span-8 grid-rows-none">
          <div className="grid-rows-3">
            <div
              className="row-span-1 text-center text-5xl font-body font-bold my-5"
              id="biology"
            >
              生物班
            </div>
            <div className="row-span-2 text-center bg-gray-200 rounded-2xl p-5 m-3 font-body text-2xl">
              生物班では主に以下のような活動をしています。
              <br />
              ・水槽の掃除
              <br />
              ・魚類やその他動物、昆虫類の飼育
              <br />
              ・年数回の野外フィールドワークでの観察、採集活動
            </div>
          </div>
          <div className="grid-rows-3">
            <div
              className="row-span-1 text-center text-5xl font-body font-bold my-5"
              id="techs"
            >
              電脳班
            </div>
            <div className="row-span-2 text-center bg-gray-200 rounded-2xl p-5 m-3 font-body text-2xl">
              電脳班では主に以下のような活動をしています。
              <br />
              ・C#やPython、JavaScriptによるソフト開発
              <br />
              ・Blenderでの3Dモデリング
              <br />
              ・Unityでのゲーム制作
              <br />
              ・自作PCの組み立て、運用
            </div>
          </div>
          <div className="grid-rows-3">
            <div
              className="row-span-1 text-center text-5xl font-body font-bold my-5"
              id="chemical"
            >
              化学班
            </div>
            <div className="row-span-2 text-center bg-gray-200 rounded-2xl p-5 m-3 font-body text-2xl">
              化学班では主に以下のような活動をしています。
              <br />
              ・文化祭での演示実験
              <br />
              ・年数回の参加型化学実験
              <br />
              ・本校化学科への薬品の貸し出し
            </div>
          </div>
          <div className="grid-rows-3">
            <div
              className="row-span-1 text-center text-5xl font-body font-bold my-5"
              id="radio"
            >
              無線班
            </div>
            <div className="row-span-2 text-center bg-gray-200 rounded-2xl p-5 m-3 font-body text-2xl">
              無線班では主に以下のような活動をしています。
              <br />
              ・校外のアマチュア無線コンテストへの参加
              <br />
              ・アマチュア無線文化の存続、維持、継承
              <br />
              ・本校の緊急時通信手段のとしての訓練、整備
            </div>
          </div>
          <div className="grid-rows-3">
            <div
              className="row-span-1 text-center text-5xl font-body font-bold my-5"
              id="biopsy"
            >
              標本班
            </div>
            <div className="row-span-2 text-center bg-gray-200 rounded-2xl p-5 m-3 font-body text-2xl">
              標本班では主に以下のような活動をしています。
              <br />
              ・活動なんかしてるわけねぇだろ
            </div>
          </div>
        </div>
        <div className="bg-gray-200 col-span-8 rounded-2xl p-5 font-body text-center">
          &copy;1924~2023 Seijo Science Club. All Rights Reserved.
        </div>
      </div>
    </>
  );






}