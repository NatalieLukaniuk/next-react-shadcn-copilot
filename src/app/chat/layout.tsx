import ChatNavigation from "../ui/chat-navigation";
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
      <header className="flex items-baseline justify-between gap-6 bg-white px-4 py-4 shadow-sm dark:bg-gray-900">
        <Image src="/logo_deloitte.svg" alt="DeloitteLogo" width={127} height={24} />
        <h1 className="grow text-center text-2xl font-semibold text-gray-900 dark:text-white">
          My playground app
        </h1>
      </header>
      <div className="flex-1 overflow-hidden md:flex">
        <ChatNavigation />
        <section className="grow p-6 md:overflow-y-auto md:p-12">{children}</section>
      </div>
    </div>
  );
}
