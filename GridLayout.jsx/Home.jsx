// // 
// import Html from "../../../public/assets/html.png";
// import nodejs from "../../../public/assets/node-js.png";
// import { useState } from "react";
// import skillData from "../SkillData";

// const Home = () => {
//     const [items, setItems] = useState(skillData);

//     return (
//         <div className="w-full grid sm:grid-cols-12 gap-2 m-2 bg-slate-600 h-screen">
//             <div className="bg-orange-500 sm:col-span-2">
//                 <div className="flex items-center mt-2 ">
//                     <h1 className="text-center text-white">Techzee Solution</h1>
//                     <img className="w-14 h-14 block mx-auto mt-2" src={Html} alt="" />
//                 </div>
//                 <img className="w-20 h-24 mt-10 block mx-auto" src={nodejs} alt="" />
//             </div>
//             <div className="bg-red-200 sm:col-span-8">
//                 <div className="grid grid-cols-2 mt-2 md:grid-cols-4 gap-10">
//                     {items.map((data) => (
//                         <div key={data.id} className="flex flex-col rounded-xl p-2 border-slate-500 justify-center items-center">
//                             <img className="w-12 h-12" src={data.images} alt="" />
//                             <p className="text-center pt-3">{data.name}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="grid grid-cols-2 mt-2 md:grid-cols-4 gap-10">
//                     {items.map((data) => (
//                         <div key={data.id} className="flex flex-col rounded-xl p-2 border-slate-500 justify-center items-center">
//                             <img className="w-12 h-12" src={data.images} alt="" />
//                             <p className="text-center pt-3">{data.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="bg-teal-500 sm:col-span-2">
//                 <h1 className="text-center text-white">Rightbaar</h1>
//                 <div className="grid grid-cols-2 mt-2 sm::grid-cols-4 gap-10 sm:gap-2">
//                     {items.map((data) => (
//                         <div key={data.id} className="flex flex-col rounded-xl p-2 border-slate-500 justify-center items-center">
//                             <img className="w-12 h-12" src={data.images} alt="" />
//                             <p className="text-center pt-3">{data.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
// 
import Html from "../../../public/assets/html.png";
import nodejs from "../../../public/assets/node-js.png";
import { useState } from "react";
import ProjectData from "../ProjectData";

import skillData from "../SkillData";

const Home = () => {
    const [items, setItems] = useState(skillData);
    const [Data, setData] = useState(ProjectData)

    return (
        <div className="w-full grid sm:grid-cols-12 gap-2 m-2 bg-slate-600 h-screen">
            <div className="bg-orange-500 sm:col-span-2">
                <div className="flex items-center mt-2 ">
                    <h1 className="text-center text-white">Techzee Solution</h1>
                    <img className="w-14 h-14 block mx-auto mt-2" src={Html} alt="" />
                </div>
                <img className="w-20 h-24 mt-10 block mx-auto" src={nodejs} alt="" />
            </div>
            <div className=" sm:col-span-8">
                {
                    Data.map((data, idx) => {
                        return <div key={idx} className=" box shadow-2xl    duration-300  rounded-lg border-2  border-slate-700   " >
                            <div>

                                <img className="w-full  object-cover p-2" src={data.images} alt="" />
                            </div>

                            <div className=" text-yellow-400  text-center text-[20px] font-semibold p-2 ">
                                <h1>{data.Name}</h1>
                            </div>

                            <div className="p-3   text-white">
                                <p>{data.Description}</p>

                            </div>
                            <div className="p-4 flex justify-center items-center">
                                <a className=' outline-none bg-slate-950 border border-slate-400 rounded-md px-4 py-2  text-white ' href={data.link}>
                                    Visit Here</a>
                            </div>

                        </div>
                    })
                }

            </div>
            <div className="bg-teal-500 sm:col-span-2">
                <h1 className="text-center text-white">Rightbaar</h1>
                <div className="grid grid-cols-2 mt-2 sm::grid-cols-4 gap-10 sm:gap-2">
                    {items.map((data) => (
                        <div key={data.id} className="flex flex-col rounded-xl p-2 border-slate-500 justify-center items-center">
                            <img className="w-12 h-12" src={data.images} alt="" />
                            <p className="text-center pt-3">{data.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
