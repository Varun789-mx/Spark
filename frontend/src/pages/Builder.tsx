import { Background } from "../components/Background";
import { Chatbox } from "../components/Chatabox";
import { Navbar } from "../components/Navbar";
import { ResponseDisplay } from "../components/ResponseDisplay";

export function Builder() {
  return (
    <div className=" relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>
      <div className="relative -z-10 flex flex-col ">
        <Navbar />
      </div>

      <div className=" w-full flex justify-around  ">
        <div className="absolute h-2/3 w-[60%] top-1/4 right-8 my-auto ">
          <ResponseDisplay />
        </div>
        <div className="absolute top-3/4  left-8 flex-1 items-center ">
          <Chatbox />
        </div>
      </div>
    </div>
  );
}
