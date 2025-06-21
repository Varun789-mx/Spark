import  { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";

interface PreviewScreenprops { 
    file:any;
    WebContainer:WebContainer;
}

export const PreviewScreen = ({file,WebContainer}:PreviewScreenprops)=> { 
    const [url,seturl] = useState("");
    async function main() {
        const installProcess = await WebContainer.spawn('npm',['install']);
        installProcess.output.pipeTo(new WritableStream({
            write(data) {
                console.log(data);
            }
        }));

        await WebContainer.spawn('npm',['run','dev']);

        WebContainer.on('server-ready',(port,url)=>{
            console.log(port)
            console.log(url)
            seturl(url)
        });
    }
    useEffect(()=> {
        main();
    },[]);

    return (
         <div className="h-full flex items-center justify-center text-gray-400">
      {!url && <div className="text-center">
        <p className="mb-2">Loading...</p>
      </div>}
      {url && <iframe width={"100%"} height={"100%"} src={url} />}
    </div>
  );
    
}