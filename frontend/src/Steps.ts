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
const data = 
    "```xml\n<boltArtifact id=\"create-todo-backend\" title=\"Create Todo Backend\">\n  <boltAction type=\"file\" filePath=\"package.json\">\n{\n  \"name\": \"todo-backend\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Simple Todo Backend\",\n  \"main\": \"server.js\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"start\": \"node server.js\"\n  },\n  \"dependencies\": {\n    \"@libsql/client\": \"^0.5.1\",\n    \"cors\": \"^2.8.5\",\n    \"express\": \"^4.18.2\"\n  },\n  \"devDependencies\": {\n    \"nodemon\": \"^3.1.0\"\n  }\n}\n</boltAction>\n  <boltAction type=\"file\" filePath=\"server.js\">\nimport express from 'express';\nimport cors from 'cors';\nimport { createClient } from '@libsql/client';\n\nconst app = express();\nconst port = 3000;\n\n// Enable CORS for all origins\napp.use(cors());\n\n// Parse JSON request bodies\napp.use(express.json());\n\nconst client = createClient({\n  url: 'libsql://your-database.turso.io',\n  authToken: 'your-auth-token'\n});\n\nawait client.execute(`\n  CREATE TABLE IF NOT EXISTS todos (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    text TEXT NOT NULL,\n    completed INTEGER DEFAULT 0\n  )\n`);\n\n// Get all todos\napp.get('/todos', async (req, res) => {\n  try {\n    const result = await client.execute('SELECT * FROM todos');\n    const todos = result.rows;\n    res.json(todos);\n  } catch (error) {\n    console.error('Error fetching todos:', error);\n    res.status(500).json({ error: 'Failed to fetch todos' });\n  }\n});\n\n// Create a new todo\napp.post('/todos', async (req, res) => {\n  const { text } = req.body;\n\n  if (!text) {\n    return res.status(400).json({ error: 'Text is required' });\n  }\n\n  try {\n    const result = await client.execute({\n      sql: 'INSERT INTO todos (text) VALUES (?)',\n      args: [text],\n    });\n\n    const id = result.lastInsertRowid;\n\n    res.status(201).json({ id, text, completed: 0 });\n  } catch (error) {\n    console.error('Error creating todo:', error);\n    res.status(500).json({ error: 'Failed to create todo' });\n  }\n});\n\n// Update a todo\napp.put('/todos/:id', async (req, res) => {\n  const { id } = req.params;\n  const { text, completed } = req.body;\n\n  if (text === undefined || completed === undefined) {\n    return res.status(400).json({ error: 'Text and completed status are required' });\n  }\n\n  try {\n    await client.execute({\n      sql: 'UPDATE todos SET text = ?, completed = ? WHERE id = ?',\n      args: [text, completed, id],\n    });\n    res.json({ id, text, completed });\n  } catch (error) {\n    console.error('Error updating todo:', error);\n    res.status(500).json({ error: 'Failed to update todo' });\n  }\n});\n\n// Delete a todo\napp.delete('/todos/:id', async (req, res) => {\n  const { id } = req.params;\n\n  try {\n    await client.execute({\n      sql: 'DELETE FROM todos WHERE id = ?',\n      args: [id],\n    });\n    res.status(204).send();\n  } catch (error) {\n    console.error('Error deleting todo:', error);\n    res.status(500).json({ error: 'Failed to delete todo' });\n  }\n});\n\napp.listen(port, () => {\n  console.log(`Server is running on port ${port}`);\n});\n</boltAction>\n  <boltAction type=\"shell\">npm install &amp;&amp; node server.js</boltAction>\n</boltArtifact>\n```"


    console.log(Parsexml(data));