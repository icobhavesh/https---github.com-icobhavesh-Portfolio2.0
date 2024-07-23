import { useEffect, useState } from "react"

const Form = () => {
    const [data, setData] = useState("")
    console.log(data);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(" Calling Server Api", data);
        }, 1000);
        return () => clearTimeout(timer)
    }, [data])

    return (
        <div className="">
            <h1>{data}</h1>
            <input className=" bg-zinc-700 text-white" type="text" value={data} onChange={(e) => setData(e.target.value)} />


        </div>
    )
}
export default Form
