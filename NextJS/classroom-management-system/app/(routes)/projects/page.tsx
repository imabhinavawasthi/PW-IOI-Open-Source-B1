"use client"

import { useState } from "react"

export default function ProjectsPage() {
    // let num = 5;
    // function increaseNum() {
    //     console.log("hello")
    //     num++;
    //     console.log(num)
    // }
    const [num, setNum] = useState(0);
    return (
        <>

            <div>
                {num} Number of Projects
            </div>

            <button
                onClick={()=>setNum(num+1)}
                type="button"
                className="text-black bg-green-100 box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Increase 📈
            </button>
            <button
                onClick={()=>setNum(num-1)}
                type="button"
                className="text-black bg-red-100 box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Decrease 📉
            </button>
        </>
    )
}