  import Editor, { loader } from '@monaco-editor/react';
  import { FileExplorer } from './FileExplorer';

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
  function CodeEditor() {
  


    return (
      <div  className='w-2/3  '> 
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
