import { ChatHistoryItem } from "@/app/_lib/definitions";
import { fetchChatsHistory } from "@/app/_lib/fetch-data";
import PaginationComponent from "@/app/ui/pagination";
import SearchField from "@/app/ui/search";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { ArrowRightBig } from "@deemlol/next-icons";
import Link from "next/link";
import { Suspense } from "react";

export default async function ChatDetailsList({searchQuery, currentPage}: {searchQuery: string, currentPage: number}) {
  const chatsHistory = fetchChatsHistory();
  return (
    <Suspense fallback={<div>Loading chat details...</div>}>
      {ChatListWrapper({ chatsHistoryPromise: chatsHistory, searchQuery, currentPage })}
    </Suspense>
  );
}

async function ChatListWrapper(
  {chatsHistoryPromise, searchQuery, currentPage}: {chatsHistoryPromise: Promise<ChatHistoryItem[]>, searchQuery: string, currentPage: number}
) {
  const recordsPerPage = 5;
  const chatsHistory = await chatsHistoryPromise;
  const filteredChats = chatsHistory.filter(chat => 
    chat.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const firstChatIndex = currentPage === 1 ? 0 : (currentPage - 1) * recordsPerPage;
  const lastChatIndex = currentPage * recordsPerPage;
  console.log(firstChatIndex, lastChatIndex);
  const currentPageChats = filteredChats.slice(firstChatIndex, lastChatIndex);
  return (
    <>
    <ItemGroup>
        <SearchField isDisabled={chatsHistory.length === 0}>
          <p className="text-blue-300 mr-6">{filteredChats.length} chat(s) found.</p>
        </SearchField>
        {chatsHistory.length === 0 && <div>No chat history available.</div>}
        {filteredChats.length > 0 ? (
          currentPageChats.map((item) => (
            <ChatDetailsItem key={item.id} {...item} />
          ))
        ) : (          
          chatsHistory.length > 0 && <div>No chat history matching the search query available.</div>
        )}
      </ItemGroup>
      <PaginationComponent totalRecords={filteredChats.length} recordsPerPage={recordsPerPage} />
    </>    
      
  );
}

function ChatDetailsItem(item: ChatHistoryItem) {
  return (
    <Link href={`/chat/chat-details/${item.id}`} className="w-full">
    <Item>
      <ItemContent>
        <ItemTitle>{item.topic} {item.id}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
      </ItemContent>
      <ItemActions><Button>
        <ArrowRightBig size={28} color="#ffffff" strokeWidth={1.5} /></Button></ItemActions>      
    </Item>
    </Link>
    
  );
}
