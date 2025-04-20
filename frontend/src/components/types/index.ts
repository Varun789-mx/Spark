export interface FileItem { 
    name:string;
    type:'File'| 'Folder';
    children?:FileItem[];
    content?:string;
    path:string;
}