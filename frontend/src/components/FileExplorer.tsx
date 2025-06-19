import { useState } from "react";
import { ChevronDown, ChevronRight, FolderTree, File } from "lucide-react";
import type { FileItem } from "./types";

interface FileExplorerProps {
    files: FileItem[];
    onFileSelect: (file: FileItem) => void;
}

interface FileNodeProps {
    item: FileItem ;
    depth: number;
    onFileClick: (file: FileItem) => void;
}

function FileNode({ item, depth, onFileClick }: FileNodeProps) {
    const [isExpanded, setExpanded] = useState(false);

    const handleClick = () => {
        if (item.type === 'Folder') {
            setExpanded(!isExpanded);
        } else {
            onFileClick(item);
        }
    };

    return (
        <div className="select-none max-w-60 overflow-y-auto scroll-auto">
            <div 
                className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
                style={{ paddingLeft: `${depth * 1.5}rem` }}
                onClick={handleClick}
            >
                {item.type === 'Folder' && (
                    <span className="text-gray-400">
                        {isExpanded ? (
                            <ChevronDown className="w-4 h-4" />
                        ) : (
                            <ChevronRight className="w-4 h-4" />
                        )}
                    </span>
                )}
                {item.type === 'Folder' ? (
                    <FolderTree className="w-4 h-4 text-blue-400" />
                ) : (
                    <File className="w-4 h-4 text-gray-300" />
                )}
                <span className="text-gray-200">{item.name}</span>
            </div>
            {item.type === 'Folder' && isExpanded && item.children && (
                <div>
                    {item.children.map((child, index) => (
                        <FileNode
                            key={`${child.path}-${index}`}
                            item={child}
                            depth={depth + 1}
                            onFileClick={onFileClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function sortFiles(files: FileItem[]): FileItem[] {
    return [...files].sort((a, b) => {
        // First, prioritize 'src' folder at the top
        if (a.name === 'src' && a.type === 'Folder') return -1;
        if (b.name === 'src' && b.type === 'Folder') return 1;
        
        // Then, sort folders before files
        if (a.type === 'Folder' && b.type !== 'Folder') return -1;
        if (b.type === 'Folder' && a.type !== 'Folder') return 1;
        
        // Finally, sort alphabetically within the same type
        return a.name.localeCompare(b.name);
    });
}

export function FileExplorer({ files, onFileSelect }: FileExplorerProps) {
    // Safety check - ensure files is an array
    const safeFiles = Array.isArray(files) ? files : [];
    
    // Sort files with src folder at top
    const sortedFiles = sortFiles(safeFiles);

    return (
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 h-full">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-100">
                <FolderTree className="w-5 h-5" />
                File Explorer
            </h2>
            <div className="space-y-1 max-h-95 overflow-y-auto scrollbar-hide">
                {sortedFiles.length === 0 ? (
                    <div className="text-gray-400 text-sm">No files to display</div>
                ) : (
                    sortedFiles.map((file, index) => (
                        <FileNode
                            key={`${file.path}-${index}`}
                            item={file}
                            depth={0}
                            onFileClick={onFileSelect}
                        />
                    ))
                )}
            </div>
        </div>
    );
}