import { Editor } from "@monaco-editor/react";
import type { FileItem } from "./types";
import { Skeleton } from "./ui/skeleton";


interface CodeEditorprop {
  File: FileItem | null,
}



export function CodeEditor({ File }: CodeEditorprop) {
  if (!File) {
    return (
      <div className='h-full flex items-center justify-center text-gray-400'>
  <Skeleton/>
      </div>
    )
  }
  return (
    <div className="bg-neutral-900">
          <Editor
            height="70vh"
            theme="vs-dark"
            defaultLanguage="typescript"
            defaultValue="// some comment"
            value={File?.content || ""}
            options={{
              readOnly: true,
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: "on",
              scrollBeyondLastLine: false,
            }}
          />
         
        </div>
  )
}