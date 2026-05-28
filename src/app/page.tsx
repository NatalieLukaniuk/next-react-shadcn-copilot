import Login from "./ui/login";
import ResizeTracker from "./ui/resize-tracker";

export default function Home() {
  return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <ResizeTracker />
        <Login></Login>
      </div>
  );
}
