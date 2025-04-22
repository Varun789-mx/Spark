import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const InputBox = () => {
  const [prompt, setprompt] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      Navigate(`/builder`, { state: { prompt } });
      axios.post(`${BACKEND_URL}/chat`, {
        prompt: prompt,
      }).then((res) => {
        console.log(res.data);
      }).catch(error=> console.log(error))
      
    }
    else {
      alert("Please provide a valide prompt");
    }
  }
  return (
    <>
      <div className=" flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 " >
            <textarea value={prompt} onChange={(e) => setprompt(e.target.value)} placeholder="Describe the project you want to build.. "
              className="w-full h-32 p-4 bg-gray-900 text-gray-100 border
                 border-gray-700 rounded-lg focus:ring-2
                  focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500" />
            <button type="submit" className="w-full mt-4 bg-blue-400 text-gray-100 py-3 px-6 rounded-lg font-medium hover:bg-blue-700  transition-colors">
              Generate your Project</button>
          </div>
        </form>
      </div>
    </>
  )
};
