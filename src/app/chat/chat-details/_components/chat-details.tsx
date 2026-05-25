import { ChatHistoryItem } from "@/app/_lib/definitions";
import { fetchChatsHistory } from "@/app/_lib/fetch-data";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { ArrowRightBig } from "@deemlol/next-icons";
import { Suspense } from "react";

export default async function ChatDetailsList() {
  const chatsHistory = fetchChatsHistory();
  return (
    <Suspense fallback={<div>Loading chat details...</div>}>
      {ChatListWrapper(chatsHistory)}
    </Suspense>
  );
}

async function ChatListWrapper(
  chatsHistoryPromise: Promise<ChatHistoryItem[]>,
) {
  const chatsHistory = await chatsHistoryPromise;
  return (    
      <ItemGroup>
        {chatsHistory.length > 0 ? (
          chatsHistory.map((item) => (
            <ChatDetailsItem key={item.id} {...item} />
          ))
        ) : (
          <div>No chat history available.</div>
        )}
      </ItemGroup>
  );
}

function ChatDetailsItem(item: ChatHistoryItem) {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>{item.topic}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
      </ItemContent>
      <ItemActions><Button>
        <ArrowRightBig size={28} color="#ffffff" strokeWidth={1.5} /></Button></ItemActions>      
    </Item>
  );
}
