const Codesnipper = () => {
  const code = `
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false,
      });
      setInput(&apos;&apos;);
    }
  };

  return  (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-md border p-2"
        />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
      /* ... Todo items rendering ... */
    </div>
  );
};

export default TodoList;
  `;

  return (
    <div>
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 ">
          <div className="text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl">
              <span className="text-blue-400">Code that Writes itself</span>
            </h2>
            <p className="text-lg text-blue-400">
              Simply describe what you want, and watch as DevForge AI generates
              high-quality code in real-time.
            </p>
          </div>
          <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Codesnipper;
