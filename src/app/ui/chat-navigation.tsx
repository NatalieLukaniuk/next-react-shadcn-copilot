'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { AArrowDown, Alarm } from "@deemlol/next-icons";

export default function ChatNavigation() {
  const navigation = [
    { name: "Chat", href: "/chat", icon: AArrowDown  },
    { name: "Chat Details", href: "/chat/chat-details", icon: Alarm  },
  ];
  const pathname = usePathname();
  console.log("pathname", pathname);
  
  return (
    <nav className="w-full flex-none md:w-64 bg-blue-50">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx('flex px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700', {
            'bg-blue-200 dark:bg-gray-700': pathname === item.href,
          })}
        >
          {item.icon && <item.icon className="mr-2 h-5 w-5" size={28} color={pathname === item.href ? "#2563eb" : "#6b7280"} strokeWidth={2} />} {item.name}
        </Link>
      ))}
    </nav>
  );
}
