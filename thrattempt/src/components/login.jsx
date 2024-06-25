import { LoginIcon } from "./icons";

export const Registration = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="bg-white w-1/4 py-4 px-6 ">
        <img
          className="w-1/3 aspect-square flex m-auto rounded-md"
          src="/logo.png"
          alt="Logo"
        />
        <h1 className="text-center text-xl font-bold">Log in</h1>
        <div className="py-3">
          <form action="" className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                className=" bg-[#f0efef] p-1 border-[1px] border-gray-600 rounded-md"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                className="bg-[#f0efef] p-1 border-[1px] border-gray-600 rounded-md"
                type="password"
              />
              <a className="text-gray-500 text-sm" href="#">
                Forgot Password?
              </a>
            </div>

            <button className="bg-[#121212] text-white py-2 px-5 flex justify-center items-center gap-2 rounded-md">
              Log in <LoginIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
