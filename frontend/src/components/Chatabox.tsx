import { useState } from "react"

export const Chatbox = () => {
    const [chat, SetChat] = useState("");
    return <>
        <div className="w-full max-w-3xl mx-auto p-4">
            <label className="block text-white text-lg font-semibold mb-2">
                Describe your website
            </label>
            <div className="relative">
                <textarea
                    maxLength={500}
                    placeholder="Create an elegant portfolio website for a photographer with a dark theme..."
                    className="w-full h-40 bg-[#0D1117] text-white p-4 rounded-xl border border-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <span className="absolute bottom-2 right-3 text-sm text-gray-500">
                    0/500
                </span>
            </div>
        </div>

    </>

}
export function dee() {
    return (<>
        <div className=" w-full max-w-3xl mx-auto p-4 ">
                <h2 className="block text-lg font-medium text-white p-2 ">Describe your Changes</h2>
                <textarea className="w-1/3 h-1/4 rounded-2xl bg-slate-900 text-slate-400 "
                    value={chat} onChange={(e) => SetChat(e.target.value)} />
            </div>

        </div></>)
}