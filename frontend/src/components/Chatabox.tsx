import { useState } from "react"

export const Chatbox = () => {
    const [chat, SetChat] = useState("");
    return <>
        <div className=" w-full">

            <div className="mb-2 justify-between  bg-black h-screen">
                <h2 className="text-lg font-medium text-white ">Describe your Changes</h2>
                <textarea className="w-2/3 h-1/4 bg-slate-900 text-slate-400 " />
            </div>

        </div>    </>

}