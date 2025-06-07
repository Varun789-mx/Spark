import Editor, { loader } from '@monaco-editor/react';
import { FileExplorer } from './FileExplorer';
import type { FileItem } from './types';
import { useState } from 'react';

loader.init().then((monaco) => {
  monaco.editor.defineTheme('myTheme', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#0d1117',
    },
  });
});


const sampleFiles: FileItem[] = [
  {
    name: "src",
    path: "/src",
    type: "Folder",
    children: [
      {
        name: "App.tsx",
        path: "/src/App.tsx",
        type: "File",
      },
      {
        name: "components",
        path: "/src/components",
        type: "Folder",
        children: [
          {
            name: "Header.tsx",
            path: "/src/components/Header.tsx",
            type: "File",
          },
        ],
      },
    ],
  },
  {
    name: "package.json",
    path: "/package.json",
    type: "File",
  },
];

function CodeEditor() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  const handleFileSelect = (file: FileItem) => {
    setSelectedFile(file);
    console.log("Selected file:", file);
  };
  return (
    <div>
      <div>
        <div className=''>
        <button className='text-gray-500 font-semibold bg-black rounded-lg p-1 text-sm focus:bg-gray-800'>Code</button>
        <button className='text-gray-500 bg-black font-semibold rounded-xl p-1 text-sm focus:bg-gray-800'>preview</button>
      </div>
      </div>
      <div className='w-full flex justify-center bg-black '>
        {" "}

        <FileExplorer files={sampleFiles} onFileSelect={handleFileSelect} />
        <Editor
          height="87vh"
          theme="myTheme"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
        ;
      </div>
    </div>
  );
}

export default CodeEditor;
