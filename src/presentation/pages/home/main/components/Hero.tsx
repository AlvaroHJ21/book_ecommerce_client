import { container } from "../../../../utils";


export const Hero = () => {
  return (
      <div className="py-20 bg-secondary relative">
          <div className={`${container} flex items-center gap-4 flex-col md:flex-row`}>
              <div className="flex-1 space-y-6">
                  <h1 className="text-6xl">Buy and sell your textbooks for the best price</h1>
                  <p className="max-w-[70%]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ad odio
                      iure quas esse recusandae ea quia iste?
                  </p>
                  <form className="p-2 bg-white max-w-fit">
                      <input
                          className="outline-none"
                          type="text"
                          placeholder="Search for ISBN number"
                      />
                      <input
                          className="bg-primary text-white py-2 px-6 cursor-pointer hover:bg-green-700 transition-colors"
                          type="button"
                          value="Search"
                      />
                  </form>
              </div>
              <div className="flex-1">
                  <img
                      src="https://wellcomebookprize.org/sites/default/files/Group%20standing_0.png"
                      alt=""
                  />
              </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-secondary p-1 absolute bottom-[-32px] left-0 right-0 m-auto cursor-pointer">
              <div className="w-full h-full rounded-full flex justify-center items-center bg-white">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                  </svg>
              </div>
          </div>
      </div>
  );
}
