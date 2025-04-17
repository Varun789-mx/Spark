export const InputBox = () => {
  return (
    <div className="w-full max-w-md px-4 mt-6 bg-grey-500">
      <textarea
        className="flex min-h-[80px] w-full rounded-md border 
                border-input bg-transparent px-3 py-2 
                text-base shadow-sm placeholder:text-grey-200/50
                focus-visible:outline-none focus-visible:ring-1 
                focus-visible:ring-ring disabled:cursor-not-allowed 
                disabled:opacity-50 md:text-sm"
       
        placeholder="What are we building today, chief?"
      />
    </div>
  );
};
