export interface FileItem {
    name: string;
    type: 'File' | 'Folder';
    children?: FileItem[];
    content?: string;
    path: string;
}
export enum StepType {
    CreateFile,
    CreateFolder,
    EditFile,
    DeleteFile,
    RunScript
}


export interface Step {
    id: number;
    title: string;
    name?:string;
    description: string;
    type: StepType;
    Status: 'Pending' | 'In-progress' | 'Completed';
    code?: string;
    path?: string
}
export interface FileViewerprop {
    File: FileItem | null;
    onclose: () => void;
}