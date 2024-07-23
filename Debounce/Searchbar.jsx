import { useEffect } from "react"
import { useState } from "react"

const Searchbar = () => {

    const data_1 = [
        {
            id: 1,
            team: "india"
        },
        {
            id: 1,
            team: " Pakistan "
        },
        {
            id: 1,
            team: " England "
        }

    ]
    const [data, setData] = useState(data_1)
    console.log(data)
    const [search, setSearch] = useState("")
    useEffect(() => {
        const time = setTimeout(() => {

        }, 2000);
        return () => clearTimeout(time)

    }, [search])
    const searchItem = data.filter((ele) => {
        if (search === "") {
            return ele
        }
        else {
            return ele.team.toLowerCase().includes(search.toLowerCase())

        }


    })
    return (
        <div className="bg-red-800 w-full h-screen ">
            < input type="text"
                onChange={(e) => setSearch(e.target.value)} />
            {
                searchItem.map((ele, i) => (
                    <div key={i} className="text-white">
                        <h1>{ele.id}</h1>
                        <h1>{ele.team}</h1>
                    </div>
                ))
            }
        </div>
    )
}
export default Searchbar