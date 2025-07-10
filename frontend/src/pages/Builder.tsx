import { Navbar } from "../components/Navbar";
import { Chatbox } from "../components/Chatabox";
import { Background } from "../components/Background";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { type FileItem, StepType, type Step } from "../components/types";
import { Parsexml } from "../Steps";
import { Steplist } from "../components/Steps";
import { Editor } from "../components/Editor";
// import { useWebContainer } from "../hooks/useWebContainer";

export function Builder() {
  const location = useLocation();
  const Stateprompt = location.state?.prompt;
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [prompts, setPrompts] = useState<string>("");
  const [files, Setfiles] = useState<FileItem[]>([]);
  // const WebContainer = useWebContainer();

  const { prompt } = location.state as { prompt: string };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/template`, {
          prompt: Stateprompt.trim(),
        });

        const { promptsData, uiprompt } = response.data;
        setPrompts(promptsData);
        const parsedSteps = Parsexml(uiprompt);
        setSteps(parsedSteps);
        if (parsedSteps.length > 0) {
          setCurrentStep(parsedSteps[0].id);
          setSteps(parsedSteps);
        }

        Setfiles(files);

      } catch (error) {
        console.error("Error loading steps:", error);
      }
    };
    fetchData();
  }, [prompt]);
  useEffect(() => {
    let originalFiles = [...files];
    let updatehappened = false;
    steps.filter(({ Status }) => Status === 'Pending').map(step => {
      updatehappened = true;
      if (step?.type === StepType.CreateFile) {
        let parsedPath = step.path?.split('/');
        let currentFileStructure = [...originalFiles];
        let finalAnswer = currentFileStructure;
        let currentFolder = '';

        
        while (parsedPath?.length) {
          currentFolder = `${currentFolder}/${parsedPath[0]}`;
          let currentFolderName = parsedPath[0];
          parsedPath = parsedPath.slice(1);
          if (!parsedPath.length) {
            let file = currentFileStructure.find(x => x.path === currentFolder);
            if (!file) {
              currentFileStructure.push({
                name: currentFolderName,
                type: 'File',
                path: currentFolder,
                content: step.code
              })
            } else {
              file.content = step.code

            }
          }
          else {
            let folder = currentFileStructure.find(x => x.path === currentFolder);
            if (!folder) {
              currentFileStructure.push({
                name: currentFolder,
                type: 'Folder',
                path: currentFolder,
                children: []
              })
            }
            currentFileStructure = currentFileStructure.find(x => x.path === currentFolder)!.children!;
          }
        }
        originalFiles = finalAnswer;
      }
    })
    if (updatehappened) {
      console.log(originalFiles);
      Setfiles(originalFiles)
      setSteps(steps => steps.map((s: Step) => {
        return {
          ...s,
          Status: 'Completed'
        }
      }))
    }
  }, [files, steps]);

  // useEffect(() => {
  //   const createMountStructure = (file: FileItem[]) => {
  //     const MountStructure: Record<string, any> = {};
  //     const processFile = (file: FileItem, isRootFolder: boolean) => {
  //       if (file.type === 'Folder') {
  //         MountStructure[file.name] = {
  //           directory: file.children ?
  //             Object.fromEntries(
  //               file.children.map(child => [child.name, processFile(child, false)])
  //             ) : {}
  //         }
  //       }
  //       else if (file.type === 'File') {
  //         if(isRootFolder) { MountStructure[file.name] = {
  //           file: {
  //             contents: file.content || ''
  //           }
  //       }
  //     }
  //      } else {
  //         return {
  //           file: {
  //             contents: file.content || ''
  //           }
  //         }
  //       }
  //       return MountStructure[file.name];
  //     };
  //     file.forEach(file => processFile(file, true));
  //     console.log(MountStructure);
  //     WebContainer?.mount(MountStructure);
  //   };
  // }, [files, WebContainer])
  return (
    <div className="relative min-h-screen">
      <span className="">{prompts}</span>
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="flex w-full justify-items-center px-6 m-2">
        <div className="absolute w-1/3 mt-8 flex-1 flex-col items-center p-2 gap-4">
          <Steplist
            step={steps}
            currentstep={currentStep}
            onStepClick={setCurrentStep}
          />
          <Chatbox />
        </div>
        <div className="absolute top-16 right-0 w-3/5 p-2">
          <Editor Files={files} />
        </div>
      </div>
    </div>
  );
}