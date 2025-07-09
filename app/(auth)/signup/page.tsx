"use client";
import {
  FaApple,
  FaBars,
  FaFacebook,
  FaFile,
  FaGoogle,
  FaHome,
  FaRocket,
  FaUser,
} from "react-icons/fa";
import { useProvider } from "@/app/components/general/NavOpenAndThemeProvider";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/general/Sidebar";
import Footer from "@/app/components/general/Footer";
import Card from "@/app/components/general/Card";

function Nav() {
  const router = useRouter();
  const { toggleIsOpen } = useProvider();
  return (
    <>
      {/* Desktop */}
      <nav className="hidden w-5/6 mx-auto mt-3 text-white justify-between items-center lg:flex ">
        <h2
          onClick={() => router.push("/dash")}
          className="text-sm cursor-pointer font-semibold"
        >
          PURITY UI DASHBOARD
        </h2>
        <nav className="flex gap-5">
          <div
            onClick={() => router.push("/dash")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaHome size={12} />
            <h2>Dashboard</h2>
          </div>
          <div
            onClick={() => router.push("/profile")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaUser size={12} />
            <h2>Profile</h2>
          </div>
          <div
            onClick={() => router.push("/signup")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaRocket size={12} />
            <h2>Sign Up</h2>
          </div>
          <div
            onClick={() => router.push("/signin")}
            className="flex font-semibold text-sm cursor-pointer gap-1.5 items-center"
          >
            <FaFile size={12} />
            <h2>Sign In</h2>
          </div>
        </nav>
        <button className="cursor-pointer bg-gradient-to-r px-8 py-3 rounded-full text-xs text-white from-blue-950 to-black/85 font-bold">
          Free Download
        </button>
      </nav>

      {/* Mobile */}
      <nav className="lg:hidden w-5/6 mx-auto mt-3 text-white justify-between items-center flex ">
        <h2
          onClick={() => router.push("/dash")}
          className="text-sm cursor-pointer font-semibold"
        >
          PURITY UI DASHBOARD
        </h2>
        <div className="cursor-pointer" onClick={toggleIsOpen}>
          <FaBars size={20} />
        </div>
      </nav>
    </>
  );
}

function SignUp() {
  const router = useRouter();
  return (
    <div className="p-4">
      <div className="p-3 lg:p-6 bg-sec rounded-2xl">
        <div className="lg:hidden block">
          <Sidebar />
        </div>
        <Nav />
        <div className="text-white text-center mx-auto w-3/5 lg:w-1/5 mt-14">
          <h2 className="text-4xl font-semibold">Welcome!</h2>
          <p className="mt-6">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full md:w-4/5 lg:w-2/5">
        <Card>
          <div className="p-6 w-full flex flex-col gap-5 justify-center items-center">
            <h2 className="font-semibold text-xl">Register With</h2>
            <section className="flex gap-5">
              <div className="border p-4 rounded-lg">
                <FaFacebook size={40} />
              </div>
              <div className="border p-4 rounded-lg">
                <FaApple size={40} />
              </div>
              <div className="border p-4 rounded-lg">
                <FaGoogle size={40} />
              </div>
            </section>

            <h2 className="font-semibold text-lg">or</h2>
            
            <div className=" flex w-full justify-center items-center h-full">
              <div className=" flex flex-col w-full gap-5">
                <label className="flex gap-2 flex-col">
                  <p className="text-sm">Name:</p>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="p-3 text-sm rounded-lg border border-tet outline-0  w-full"
                    name=""
                    id=""
                  />
                </label>
                <label className="flex gap-2 flex-col">
                  <p className="text-sm">Email:</p>
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="p-3 text-sm rounded-lg border border-tet outline-0  w-full"
                    name=""
                    id=""
                  />
                </label>
                <label className="flex gap-2 flex-col">
                  <p className="text-sm">Password:</p>
                  <input
                    type="text"
                    placeholder="Your Password"
                    className="p-3 text-sm rounded-lg border border-tet outline-0  w-full"
                    name=""
                    id=""
                  />
                </label>

                <label className="flex mt-3 items-center gap-3 mb-4 cursor-pointer">
                  <input type="checkbox" className="toggle-switch" />
                  <span className="">Remember me</span>
                </label>

                <button className="bg-sec/90 rounded-lg w-full text-[10px] font-semibold py-3.5 text-white uppercase ">
                  Sign up
                </button>

                <h2 className="text-center text-tet font-semibold">
                  Already have an account?{" "}
                  <span
                    onClick={() => router.push("/signin")}
                    className="text-sec cursor-pointer"
                  >
                    Sign in
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="w-full md:w-3/4 mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
