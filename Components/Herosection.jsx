
import ParticlesBg from "./Particles";
import SocialMedia from "./SocialMedia";
import "../index.css"
function Herosection() {
    return (
        <div className=" w-full h-auto  flex justify-center items-center md:pt-40 pt-20 ">
            <ParticlesBg />

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">

                    <div className="">
                        <h1 className=" anton-regular  text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white   text-center ">
                            HEY, I'M<span className="text-blue-700 "> Bhavesh </span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400   text-center">
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </p>
                        <div className=" md:block ">
                            <SocialMedia />

                        </div>
                        <div className="flex gap-10 justify-center items-center pt-10">
                            <button className="border-2 border-slate-700 px-6 py-2 rounded-full text-white  hover:bg-blue-800  bg-[rgb(24,10,47)]">Contact Me</button>
                            <button className="border-2 px-10 hover:bg-blue-800  bg-[rgb(24,10,47)] text-white  py-2 rounded-full border-slate-700">CV</button>
                        </div>
                        <div className="flex justify-center items-center md:pt-10 ">
                            <h1 className="text-white flex-2 text-2xl">Here are a few of my favorite projects.</h1>

                            <h1 className="border-[1px] border-purple-900 justify-center items-center flex  border- w-full h-1 md:block hidden"></h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Herosection;
