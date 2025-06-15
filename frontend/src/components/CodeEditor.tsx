import { Editor } from "@monaco-editor/react";
import type { FileItem } from "./types";

interface CodeEditorprop {
  File: FileItem,
}



export function CodeEditor({ File }: CodeEditorprop) {
  if (!File) {
    return (
      <div className='h-full flex items-center justify-center text-gray-400'>
        Please Select a file to view its content
      </div>
    )
  }
  return (
    <div>
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