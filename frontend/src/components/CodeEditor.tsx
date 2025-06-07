
import Editor, { loader } from '@monaco-editor/react';

loader.init().then((monaco) => {
    monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [],
        colors: {
            'editor.background': '#0d1117',
        },
    });
});
function CodeEditor() {
 
  return (
    <div  className='w-full'> 
      {" "}
      <Editor  
        height="90vh"
        theme="myTheme"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      ;
    </div>
  );
}

export default CodeEditor;
