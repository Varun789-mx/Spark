import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";


export const Chatbox = () => {
    const [chat, SetChat] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (chat.trim()) {
            axios.put(`${BACKEND_URL}/chat`, {
                prompt: chat
            }).then((res) => {
                console.log(res);
            }).catch(error => console.log(error));
        }

    }
    return (
        <div className="w-full max-w-7xl mx-auto">
            <label className="block text-white text-lg font-semibold mb-2">Describe your changes</label>
            <div className="relative">
                <form className="space-y-4" onSubmit={handleSubmit} >
                    <textarea value={chat} onChange={(e) => SetChat(e.target.value)} maxLength={500} className="w-md h-30 bg-[#0d1117] 
                    text-white p-4 rounded-lg border border-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                </form>
            </div>
        </div>
    )
}
