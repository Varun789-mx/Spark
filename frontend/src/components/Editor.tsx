import { FileExplorer } from './FileExplorer';
import type { FileItem } from './types';
import { useState } from 'react';
import { CodeEditor } from './CodeEditor';


interface Editorprop {
  Files: FileItem[];
}

export function Editor({ Files }: Editorprop) {
  const [isPressed, setIsPressed] = useState(false)
  console.log(Files);



  const handleFileSelect = (file: FileItem) => {
    (file);
    console.log("Selected file:", file);
  };

  return (
    <div className='bg-neutral-900 rounded-lg p-2 border-2 border-blue-900 h-[87vh]'>
      <div >
        <div className=" rounded-sm m-4 p-1  w-fit bg-gray-800">
          <button onClick={() => setIsPressed(!isPressed)} className={` font-semibold w-15 rounded-lg p-1 text-sm  ${isPressed ? "bg-black text-white" : "text-gray-500"}`}>Code</button>
          <button onClick={() => setIsPressed(!isPressed)} className={` font-semibold w-15 rounded-lg p-1 text-sm  ${!isPressed ? "bg-black text-white" : "text-gray-500"}`}>Preview</button>
        </div>
      </div>
      <div className='w-full flex justify-center bg-black rounded-lg border-2'>
        {" "}
        <div className='w-1/3'>
          <FileExplorer files={Files} onFileSelect={handleFileSelect} />
       console.log(Files);
        </div>
        <div className='w-full'>
          {isPressed ?
            <CodeEditor File={Files} />
            : <div className=''>Empty</div>
          }
        </div>

      </div>
    </div>
  );
}

export default CodeEditor;
