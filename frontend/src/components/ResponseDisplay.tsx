import CodeEditor from "./Editor"

export const ResponseDisplay = () => {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-24 bg-[#0d1117]">
                <button className="bg-[#0d1117] focus:bg-grey-500 focus:border-2">Code</button>
                <button className="bg-[#0d1117] focus:bg-grey-500 focus:border-2 ">Code</button>
                <CodeEditor />
            </div>
        </div>
    )
}
