import { Navbar } from "../components/Navbar";
import { Chatbox } from "../components/Chatabox";
import { Background } from "../components/Background";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import type { Step } from "../components/types";
import { Parsexml } from "../Steps";
import { Steplist } from "../components/Steps";

const a = [
  {
    id: 1,
    title: 'Create Todo Backend',
    description: '',
    type: 1,
    status: 'Pending'
  },
  {
    id: 2,
    title: 'Create package.json',
    description: '',
    type: 0,
    status: 'Pending',
    code: '{\n' +
      '  "name": "todo-backend",\n' +
      '  "version": "1.0.0",\n' +
      '  "description": "Simple Todo Backend",\n' +
      '  "main": "server.js",\n' +
      '  "type": "module",\n' +
      '  "scripts": {\n' +
      '    "start": "node server.js"\n' +
      '  },\n' +
      '  "dependencies": {\n' +
      '    "@libsql/client": "^0.5.1",\n' +
      '    "cors": "^2.8.5",\n' +
      '    "express": "^4.18.2"\n' +
      '  },\n' +
      '  "devDependencies": {\n' +
      '    "nodemon": "^3.1.0"\n' +
      '  }\n' +
      '}',
    path: 'package.json'
  },
  {
    id: 3,
    title: 'Create server.js',
    description: '',
    type: 0,
    status: 'Pending',
    code: "import express from 'express';\n" +
      "import cors from 'cors';\n" +
      "import { createClient } from '@libsql/client';\n" +
      '\n' +
      'const app = express();\n' +
      'const port = 3000;\n' +
      '\n' +
      '// Enable CORS for all origins\n' +
      'app.use(cors());\n' +
      '\n' +
      '// Parse JSON request bodies\n' +
      'app.use(express.json());\n' +
      '\n' +
      'const client = createClient({\n' +
      "  url: 'libsql://your-database.turso.io',\n" +
      "  authToken: 'your-auth-token'\n" +
      '});\n' +
      '\n' +
      'await client.execute(`\n' +
      '  CREATE TABLE IF NOT EXISTS todos (\n' +
      '    id INTEGER PRIMARY KEY AUTOINCREMENT,\n' +
      '    text TEXT NOT NULL,\n' +
      '    completed INTEGER DEFAULT 0\n' +
      '  )\n' +
      '`);\n' +
      '\n' +
      '// Get all todos\n' +
      "app.get('/todos', async (req, res) => {\n" +
      '  try {\n' +
      "    const result = await client.execute('SELECT * FROM todos');\n" +
      '    const todos = result.rows;\n' +
      '    res.json(todos);\n' +
      '  } catch (error) {\n' +
      "    console.error('Error fetching todos:', error);\n" +
      "    res.status(500).json({ error: 'Failed to fetch todos' });\n" +
      '  }\n' +
      '});\n' +
      '\n' +
      '// Create a new todo\n' +
      "app.post('/todos', async (req, res) => {\n" +
      '  const { text } = req.body;\n' +
      '\n' +
      '  if (!text) {\n' +
      "    return res.status(400).json({ error: 'Text is required' });\n" +
      '  }\n' +
      '\n' +
      '  try {\n' +
      '    const result = await client.execute({\n' +
      "      sql: 'INSERT INTO todos (text) VALUES (?)',\n" +
      '      args: [text],\n' +
      '    });\n' +
      '\n' +
      '    const id = result.lastInsertRowid;\n' +
      '\n' +
      '    res.status(201).json({ id, text, completed: 0 });\n' +
      '  } catch (error) {\n' +
      "    console.error('Error creating todo:', error);\n" +
      "    res.status(500).json({ error: 'Failed to create todo' });\n" +
      '  }\n' +
      '});\n' +
      '\n' +
    
'// Update a todo\n' +
      "app.put('/todos/:id', async (req, res) => {\n" +
      '  const { id } = req.params;\n' +
      '  const { text, completed } = req.body;\n' +
      '\n' +
      '  if (text === undefined || completed === undefined) {\n' +
      "    return res.status(400).json({ error: 'Text and completed status are required' });\n" +
      '  }\n' +
      '\n' +
      '  try {\n' +
      '    await client.execute({\n' +
      "      sql: 'UPDATE todos SET text = ?, completed = ? WHERE id = ?',\n" +
      '      args: [text, completed, id],\n' +
      '    });\n' +
      '    res.json({ id, text, completed });\n' +
      '  } catch (error) {\n' +
      "    console.error('Error updating todo:', error);\n" +
      "    res.status(500).json({ error: 'Failed to update todo' });\n" +
      '  }\n' +
      '});\n' +
      '\n' +
      '// Delete a todo\n' +
      "app.delete('/todos/:id', async (req, res) => {\n" +
      '  const { id } = req.params;\n' +
      '\n' +
      '  try {\n' +
      '    await client.execute({\n' +
      "      sql: 'DELETE FROM todos WHERE id = ?',\n" +
      '      args: [id],\n' +
      '    });\n' +
      '    res.status(204).send();\n' +
      '  } catch (error) {\n' +
      "    console.error('Error deleting todo:', error);\n" +
      "    res.status(500).json({ error: 'Failed to delete todo' });\n" +
      '  }\n' +
      '});\n' +
      '\n' +
      'app.listen(port, () => {\n' +
      '  console.log(`Server is running on port ${port}`);\n' +
      '});',
    path: 'server.js'
  },
  {
    id: 4,
    title: 'Run command',
    description: '',
    type: 4,
    status: 'Pending',
    code: 'npm install &amp;&amp; node server.js'
  }
]




export async function Builder() {
    const location = useLocation();
    const [step, setSteps] = useState<Step[]>([]);

    const { prompt } = location.state as { prompt: string };

    try {
        const response = await axios.post(`${BACKEND_URL}/template`, {
            prompt: prompt.trim(),
        });

        const [ prompts, uiprompt ] = response.data;
        setSteps(Parsexml(uiprompt[0]));
    } catch (error) {
        console.log(error);
    }
    

    return (
        
        <div className="relative min-h-screen">
            <span className="hidden">{prompts}</span>
            <div className="fixed inset-0 -z-10">
                <Background />
            </div>
            <div className="relative z-10">
                <Navbar />
            </div>
            <div className="flex w-full justify-items-center px-6 m-2">
                <div className="absolute w-1/3 top-3/4 flex-1 flex-col items-center p-2">
<Steplist step={a}/>
                    <Chatbox />
                </div>
                <div className="absolute top-16 right-0 w-3/5 p-2">
                    {step.map(res=><span key={res.id}>{res.description}</span>)};
                </div>
            </div>
        </div>
    );
}
