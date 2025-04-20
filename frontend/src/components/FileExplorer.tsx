import { useState } from "react";
import { ChevronDown, ChevronRight, FolderTree, File } from "lucide-react";
import type { FileItem } from "./types";

interface FileExplorerProp {
    files: FileItem[];
    onFileSelect: (file: FileItem) => void;
}


interface FileNodeProps {
    item: FileItem;
    depth: number;
    onFileClick: (File: FileItem) => void;
}
function Filenode({ item, depth, onFileClick }: FileNodeProps) {
    const [isExpanded, setExpanded] = useState(false);

    const HandleCick = () => {
        if (item.type === 'Folder') {
            setExpanded(!isExpanded);
        }
        else {
            onFileClick(item);
        }
    };
    return (
        <>
            <div className="select-none">
                <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
                    style={{ paddingLeft: `${depth * 1.5}rem` }} onClick={HandleCick}>
                    {item.type === 'Folder' && (
                        <span className="text-gray-400">
                            {isExpanded ? (
                                <ChevronDown className="w-4 h-4" />) : (
                                <ChevronRight className="w-4 h-4" />
                            )}
                        </span>
                    )}
                    {item.type === 'Folder' ? (
                        <FolderTree className="w-4 h-4 text-blue-400 " />
                    ) : (
                        <File className="w-4 h-4 text-gray-800" />
                    )}
                    <span className="text-gray-200">{item.name}</span>
                </div>
                {item.type === 'Folder' && isExpanded && item.children && (
                    <div>
                        {item.children.map((Child, index) => (
                            <Filenode key={`${Child.path}-${index}`}
                                item={Child}
                                depth={depth + 1}
                                onFileClick={onFileClick} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export function FileExplorer({files,onFileSelect}:FileExplorerProp) { 
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 h-full overflow-auto">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-100 ">
                <FolderTree className="w-5 h-5"/>
                File Explorer
            </h2>
            <div className="space-y-1">
                {files.map((file,index)=>(
                            <Filenode key={`${file.path}-${index}`}
                            item={file}
                            depth={0}
                            onFileClick={onFileSelect}
                            />
                ))}
            </div>
        </div>
    )
}