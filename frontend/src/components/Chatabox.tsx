import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";


export const Chatbox = () => {
    const [chat, SetChat] = useState("");
    const [loading, setloading] = useState(false);
    const handleSubmit = () => {
        if (chat.trim()) {
            setloading(true);
            axios.post(`${BACKEND_URL}/chat`, {
                prompt: chat
            }).then((res) => {

                console.log(res);
            }).catch(error =>
                console.log(error)).finally(() => {
                    setloading(false);
                });
        }
    }

    const HandleRequest = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(loading, "From loading ")
            if (!loading) {
                handleSubmit();
            }
        }
    }
    return (
        <div className="w-full max-w-7xl mx-auto p-2">
            <label className="block text-white text-lg font-semibold mb-2">Describe your changes</label>
            <div className="relative">
                <form className="space-y-4" >
                    <textarea value={chat} onChange={(e) => SetChat(e.target.value)} onKeyDown={HandleRequest} disabled={loading} maxLength={500}
                        className={`w-md h-30 bg-[#0d1117] ${loading? "text-gray-500":
                   " text-white"} p-4 rounded-lg border 
                    border-[#3D3D3D] focus:outline-none 
                    focus:ring-2 focus:ring-blue-500 resize-none`}
                        placeholder="Create an elegant portfolio website" />
                </form>
            </div>
        </div>
    )
}
