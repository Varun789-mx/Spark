import { StepType, type Step } from "./components/types";


export function Parsexml(response: string): Step[] {
    const xmlMatch = response.match(
        /<boltArtifact[^>]*>([\s\S]*?)<\/boltArtifact>/,
    );
    if (!xmlMatch) {
        return [];
    }
    const xmlContent = xmlMatch[1];
    const Steps: Step[] = [];
    let StepId = 1;

    const titleMatch = response.match(/title="([^"]*)"/);
    const artifactTitle = titleMatch ? titleMatch[1] : "Project Files";

    Steps.push({
        id: StepId++,
        title: artifactTitle,
        description: "",
        type: StepType.CreateFolder,
        status: "Pending"
    })

    const actionRegex = /<boltAction\s+type="([^"]*)"(?:\s+filePath="([^"]*)")?>([\s\S]*?)<\/boltAction>/g;
    let match;
    while ((match = actionRegex.exec(xmlContent)) !== null) {
        const [, type, filePath, content] = match;
        if (type == 'file') {
            Steps.push({
                id: StepId++,
                title: `Create ${filePath || 'file'}`,
                description: "",
                type: StepType.CreateFile,
                status: "Pending",
                code: content.trim(),
                path: filePath,
            });
        }
        else if (type === 'shell') {
            Steps.push({
                id: StepId++,
                title: "Run command",
                description: "",
                type: StepType.RunScript,
                status: "Pending",
                code: content.trim(),
            })
        }
    }

    return Steps;
}
