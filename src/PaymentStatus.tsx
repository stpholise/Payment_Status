import clsx from "clsx";
const PaymentStatus = ({ stage = 3 }: { stage?: number }) => {
  const progress = (stage / 4) * 93;
  return (
    <div className="bg-gray-50 w-full min-h-screen  h-full container flex flex-col max-w-[420px] mx-auto">
      <header className=" px-4 py-2 flex items-center justify-between ">
        <button className="bg-white size-9 flex items-center justify-center rounded-full ">
          <img src="/arrow_back.png" alt="back" className="h-6 w-6 " />
        </button>
        <h3 className="font-semibold text-xl">Payment Status</h3>
        <button className="bg-white size-9 flex items-center justify-center rounded-full ">
          <img src="/share-2-svgrepo-com.svg" alt="back" className="h-6 w-6 " />
        </button>
      </header>
      <main className="px-4 h-[520px]">
        <div className="bg-[rgba(0,0,0,0.7)] h-24 w-full rounded-xl  px-4 py-2 ">
          <div className="bg-black w-full h-5 my-2   rounded-2xl relative py-2 px-4 ">
            <div className="min-h-[400px] h-fit bg-white w-full rounded-lg  overflow-hidden shadow-xl  relative before:absolute before:left-0 before:top-0 before:w-full before:h-6 before:bg-linear-to-b before:from-black before:to-transparent ">
              <div className="  h-full">
                <div className="h-18 w-full bg-linear-to-b from-black/50  to-transparent px-3 py-4  ">
                  <p className=" border-y border-dashed py-1 text-center text-base font-medium">
                    Trip Invoice - Japan Summer 2025
                  </p>
                </div>
                <div className="px-3">
                  <div className="flex justify-between">
                    <p className=" text-gray-600"> Total</p>
                    <p className=" font-medium">$30,000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Per Person</p>
                    <p className="font-medium">$6,000</p>
                  </div>
                </div>
                <div className="px-4 py-2">
                  {persons.map((person, index) => (
                    <div
                      className="grid  grid-cols-[20%_80%] g items-center justify-between  border-y border-gray-100"
                      key={person.name + index}
                    >
                      <div className="w-full flex items-center justify-center px-2 py-1">
                        <img
                          src={person.image || "/user-circle-svgrepo-com.svg"}
                          alt="image"
                          className="w-8 h-8"
                        />
                      </div>
                      <div className="border-l border-gray-100 h-full flex justify-between items-center px-2 py-1">
                        <p className="">{person.name}</p>

                        {person.paid ? (
                          <div className=" flex items-center gap-1 justify-end ">
                            <button className="flex items-center gap-1 py-1 px-2 text-xs font-medium text-gray-600 rounded-lg border-gray-200 border">
                              <img src="paid.png" alt="" className="size-3" />
                              <span>Paid</span>
                            </button>
                          </div>
                        ) : (
                          <div className=" flex items-center gap-1 justify-end">
                            <button className="flex items-center gap-1 py-1 px-2 text-xs font-medium text-gray-600 rounded-lg border-gray-200 border">
                              <img
                                src="/orange_clock.png"
                                alt=""
                                className="size-3"
                              />
                              <span className="">unpaid</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-3 ">
                  <div className=" border-2 border-gray-100 rounded-lg py-3 px-2 flex flex-col gap-2 ">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 font-medium text-sm">
                        {" "}
                        Payment Status
                      </p>
                      <p className=" text-lg font-medium uppercase text-gray-900">
                        {" "}
                        unpaid
                      </p>
                    </div>
                    <section className="h-4">
                      <div className="relative  flex w-full    ">
                        <div className="absolute top-1/2 left-[3.5%] right-[3.5%] h-2 bg-gray-300  -translate-y-1/2"></div>
                        <div
                          className={clsx(
                            `   absolute top-1/2 left-[3.5%] h-2 bg-black  -translate-y-1/2`
                          )}
                          style={{ width: `${progress}%` }}
                        ></div>
                        <div
                          className={clsx(
                            "relative flex justify-between w-full h-2   "
                          )}
                        >
                          {[...Array(5)].map((_, i) => (
                            <div className={clsx(`flex items-center `)} key={i}>
                              <div className="size-7 rounded-full bg-white shadow-xl flex items-center justify-center   ">
                                {i < stage ? (
                                  <img
                                    src="paid.png"
                                    alt=""
                                    className="size-4"
                                  />
                                ) : i === stage ? (
                                  <div className="size-3 bg-black rounded-full"></div>
                                ) : (
                                  <img
                                    src="stamp-2-svgrepo-com.svg"
                                    alt=""
                                    className="size-4"
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="px-3  py-3 flex items-center justify-between gap-2 bg-white">
                  <button className="capitalize w-1/2 font-medium text-white bg-gray-600 px-4 py-0.5 rounded-xl text-sm shadow-gray-500 flex justify-center items-center shadow-2xl">
                    set reminder
                  </button>
                  <button className="capitalize w-1/2 font-medium bg-white text-gray-600 px-4 py-0.5 rounded-xl text-sm shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex justify-center items-center ">
                    Download invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-4 bg-white text-gray-600 flex  flex-col gap-4 py-4  mt-auto">
        <div className="flex justify-between items-center">
          <p className="">Payment Method </p>
          <div className="flex items-center gap-3">
            <span className="">visa Ending 2986</span>
            <div className="bg-blue-800 size-5 rounded-sm drop-shadow-sm"></div>
          </div>
        </div>
        <button className="w-full bg-gray-600 text-white font-medium rounded-lg py-2">
          Pay Now
        </button>
      </footer>
    </div>
  );
};

const persons: { name: string; image: string; paid: boolean }[] = [
  { name: "you", image: "", paid: true },
  { name: "olabode", image: "", paid: true },
  { name: "lukmon", image: "", paid: true },
  { name: "Hope", image: "", paid: false },
  { name: "dara", image: "", paid: false },
];

export default PaymentStatus;
