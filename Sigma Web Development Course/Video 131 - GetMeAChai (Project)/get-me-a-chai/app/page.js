export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 text-white h-[44vh]">

        <div className="font-bold text-4xl flex justify-center items-center">Buy me a Chai <img className='invertImg' src="/tea.gif" alt="TeaImg" width={88} /></div>
        <p>A croud funding website for creators. Get funded by your fans and followers. Start now!</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex justify-around  gap-5">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img width={88} className="bg-slate-300 rounded-full p-2 text-black " src="man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img width={88} className="bg-slate-300 rounded-full p-2 text-black " src="coin.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img width={88} className="bg-slate-300 rounded-full p-2 text-black " src="group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-2xl font-bold text-center mb-14">Learn more about us</h2>
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
    </>
  );
}
