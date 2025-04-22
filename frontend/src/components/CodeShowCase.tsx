

const CodeShowcase = () => {
  return (
    <div>
      <section id="how-it-works" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
              <span className="text-gradient">Code that Writes Itself</span>
            </h2>

            <p className="text-lg text-blue-500 ">{" "}
              Simply describe what you want, and watch as DevForge AI generates
              high-quality code in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="code-block overflow-hidden rounded-lg border border-border/50 bg-background backdrop-blur-sm">
                <div className="bg-secondary rounded-t-lg p-3 border-b border-border/50 flex items-center">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-sm text-blue-500">
                    TodoList.tsx
                  </div>
                </div>
                <div className="p-4 overflow-auto">
                  <pre className="text-xs md:text-sm leading-relaxed">
                    <code>
                      <span className="text-blue-500">import</span>{" "}
                      <span className="text-yellow-300">
                        React, {"{"} useState {"}"}
                      </span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-green-400">&apos;react&apos;</span>;
                      {"\n"}
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-yellow-300">
                        {"{"} Button {"}"}
                      </span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-green-400">
                        &apos;@/components/ui/button&apos;
                      </span>
                      ;{"\n\n"}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-300">TodoList</span>
                      {" = "}
                      <span className="text-purple-400">()</span>
                      {" => "}
                      {"{"}
                      {"\n  "}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">[todos, setTodos]</span>
                      {" = "}
                      <span className="text-yellow-300">useState</span>
                      <span className="text-blue-300">
                        ({"["}
                        { }''])
                      </span>
                      ;{"\n  "}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">[input, setInput]</span>
                      {" = "}
                      <span className="text-yellow-300">useState</span>
                      <span className="text-blue-300">(&apos;&apos;)</span>;
                      {"\n\n  "}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-300">handleAddTodo</span>
                      {" = "}
                      <span className="text-purple-400">()</span>
                      {" => "}
                      {"{"}
                      {"\n    "}
                      <span className="text-blue-400">if</span>
                      {" ("}
                      <span className="text-blue-300">input.trim()</span>
                      {")"} {"{"}
                      {"\n      "}
                      <span className="text-yellow-300">setTodos</span>
                      {"([..."}
                      <span className="text-blue-300">todos</span>
                      {", "}
                      {"{"}
                      {"\n        "}
                      <span className="text-green-400">id</span>:{" "}
                      <span className="text-blue-300">Date.now()</span>,
                      {"\n        "}
                      <span className="text-green-400">text</span>:{" "}
                      <span className="text-blue-300">input</span>,
                      {"\n        "}
                      <span className="text-green-400">completed</span>:{" "}
                      <span className="text-blue-300">false</span>,{"\n      "}
                      {"}"});{"\n      "}
                      <span className="text-yellow-300">setInput</span>
                      {"(&apos;&apos;);"}
                      {"\n    "}
                      {"}"}
                      {"\n  "}
                      {"}"};{"\n\n  "}
                      <span className="text-purple-400">return</span> {" ("}
                      {"\n    "}
                      {"<"}
                      <span className="text-yellow-300">div</span>{" "}
                      <span className="text-green-400">className</span>
                      {"="}
                      <span className="text-blue-300">
                        &quot;space-y-4&quot;
                      </span>
                      {">"}
                      {"\n      "}
                      {"<"}
                      <span className="text-yellow-300">div</span>{" "}
                      <span className="text-green-400">className</span>
                      {"="}
                      <span className="text-blue-300">
                        &quot;flex gap-2&quot;
                      </span>
                      {">"}
                      {"\n        "}
                      {"<"}
                      <span className="text-yellow-300">input</span>
                      {"\n          "}
                      <span className="text-green-400">value</span>
                      {"="}
                      {"{input}"}
                      {"\n          "}
                      <span className="text-green-400">onChange</span>
                      {"="}
                      {"{(e) => setInput(e.target.value)}"}
                      {"\n          "}
                      <span className="text-green-400">className</span>
                      {"="}
                      <span className="text-blue-300">
                        &quot;flex-1 rounded-md border p-2&quot;
                      </span>
                      {"\n        "}
                      {"/>"}
                      {"\n        "}
                      {"<"}
                      <span className="text-yellow-300">Button</span>{" "}
                      <span className="text-green-400">onClick</span>
                      {"="}
                      {"{handleAddTodo}"}
                      {">"}Add Todo{"</"}
                      <span className="text-yellow-300">Button</span>
                      {">"}
                      {"\n      "}
                      {"</"}
                      <span className="text-yellow-300">div</span>
                      {">"}
                      {"\n      "}
                      {"/* ... Todo items rendering ... */"}
                      {"\n    "}
                      {"</"}
                      <span className="text-yellow-300">div</span>
                      {">"}
                      {"\n  "}
                      {");"}
                      {"\n"}
                      {"}"};{"\n\n"}
                      <span className="text-blue-400">export</span>{" "}
                      <span className="text-blue-400">default</span>{" "}
                      <span className="text-yellow-300">TodoList</span>;{"\n"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Just Describe What You Need
                </h3>
                <div className="bg-secondary/30 p-4 rounded-lg border border-border/50">
                  <p className="italic text-blue-500">
                    &quot;Create a todo list component with the ability to add
                    new items and mark them as complete.&quot;
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex-shrink-0 mt-1 "></div>
                    <p className="text-white">
                      Spark AI understands your request and generates
                      structured, clean code.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex-shrink-0 mt-1"></div>
                    <p className="text-white">
                      All code is production-ready with proper TypeScript typing
                      and follows best practices.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex-shrink-0 mt-1"></div>
                    <p className="text-white">
                      Automatically integrates with your component library and
                      design system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CodeShowcase;
