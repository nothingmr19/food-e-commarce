import Link from "next/link";

export default function page() {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <a href="/" className="h4 font-bold">
          Sign up
        </a>
        <div className="w-full  rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="">
            <h6 className="h6 text-center pt-4 pb-10">
              Please give us some of your information to get free access
            </h6>
            <form className="" method="POST" action="/auth/login/">
              <div>
                <label htmlFor="email" className="h6 text-sm">
                  Name
                </label>
                <input
                  type="email"
                  name="login"
                  id="email"
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-800 sm:text-sm rounded-md block w-full px-4 py-3 mt-[6px]"
                  placeholder="name"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="email" className="h6 text-sm">
                  Phone or Email
                </label>
                <input
                  type="email"
                  name="login"
                  id="email"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-800 sm:text-sm rounded-md block w-full px-4 py-3 mt-[6px]"
                  placeholder="name@company.com"
                />
              </div>
              <div className="py-4">
                <label htmlFor="password" className="h6 text-sm ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-800 sm:text-sm rounded-md block w-full px-4 py-3 mt-[6px]"
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 h6 font-normal"
                    >
                      Click ‘Sign up’ to agree to our{" "}
                      <span className="text-[#208B18] hover:underline cursor-pointer">
                        {" "}
                        Terms
                      </span>{" "}
                      and
                      <span className="text-[#208B18] hover:underline cursor-pointer">
                        {" "}
                        Privacy Policy.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="text-white hover:bg-[#1D7E16] bg-[#208B18] py-3 px-4  font-bold w-full rounded-md mb-3"
              >
                Sign up
              </button>

              <p className="font-normal h6 text-gray-500 py-3">
                Already have an account?
                <Link
                  href="/sign-in"
                  className="font-normal h6 text-[#208B18] hover:underline "
                >
                  {" "}
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
