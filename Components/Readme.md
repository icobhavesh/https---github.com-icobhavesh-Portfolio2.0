/ Hoisting takes place in the local scope as well
function doSomething(){
x = 33;
console.log(x);
var x;
}
doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope
Note - Variable initializations are not hoisted, only variable declarations are hoisted:
// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom"
// import ParticlesBg from "./Particles";
// const Header = () => {
// const [toggle, setToggle] = useState(false)
// //bg-blue-600
// return (
// <div className="    w-full p-4  ">
// <ParticlesBg />
// <div className=" max-w-[1240px] h-200px  flex justify-between items-center m-auto">
// <div className="space-grotesk  text-white md: text-[30px] ">
// <h1>Bhavesh</h1>
// </div>
// {/_ ToggleSection _/}
// {toggle ? (
// <AiOutlineClose
// onClick={() => setToggle(!toggle)}
// className="text-white text-2x md:hidden block "
// />
// ) : (
// <AiOutlineMenu
// onClick={() => setToggle(!toggle)}
// className="text-white text-2x md:hidden block "
// />
// )}
// {/_ hidden for sm device _/}
// <ul className=" 
// space-grotesk text-bolder hidden md:flex gap-10 text-white  hover:underline ml-0 text-xl  ">
// <Link to="/">Home</Link>
// <Link to="/about">About</Link>
// <Link to="/project">Project</Link>
// <Link to="/contact">Contact</Link>
// </ul>
// {/_ //////////navbar for sm using toogle button ///////// _/}
// <ul
// className={`"  anton-regular  
//                 duration-300 md:hidden gap-4  flex justify-between text-white bg-slate-950 h-autofixed text-xl 
//                 top-[58px]  left-[-100%] w-full ${toggle ? "left-[0]" : "left-[-100%]  "
//                         }`}
// >
// <Link to="/" className=" space-grotesk p-3 text-center ">Home</Link>
// <Link to="/about" className=" space-grotesk p-3 text-center ">About</Link>
// <Link to="/project" className=" space-grotesk p-3 text-center ">Project</Link>
// <Link to="/contact" className=" space-grotesk p-3 text-center ">Contact</Link>

// </ul>
// </div>
// </div>
// );
// };

// export default Header;
<!-- 
import ParticlesBg from "./Particles";
import SocialMedia from "./SocialMedia";
import "../index.css"
function Herosection() {
    return (
        <div className="w-full  h-auto py-12 md:py-16 lg:py-32 xl:py-46  ">
            <ParticlesBg />

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">

                    <div className="space-y-2">
                        <h1 className=" anton-regular  text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white  . ">
                            HEY, I'M<span className="text-blue-700 "> Bhavesh </span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
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
 -->