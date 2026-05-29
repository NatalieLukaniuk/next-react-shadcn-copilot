import { App, Cat, ChatHistoryItem } from "./definitions";

const CHATS_HISTORY_ENDPOINT =
  "https://6a142a476c7db8aac053f526.mockapi.io/api/v1/chats-history";
const CATS_ENDPOINT =
  "https://6a142a476c7db8aac053f526.mockapi.io/api/v1/images";
const APPS_ENDPOINT = "https://apps-api.free.beeceptor.com/apps";

export async function fetchChatsHistory(): Promise<ChatHistoryItem[]> {
  const response = await fetch(CHATS_HISTORY_ENDPOINT);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
}

export async function fetchChatDetails(
  chatId: string,
): Promise<ChatHistoryItem | null> {
  const response = await fetch(`${CHATS_HISTORY_ENDPOINT}/${chatId}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
}

export async function fetchCats(): Promise<Cat[]> {
  const response = await fetch(CATS_ENDPOINT);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
}

export async function fetchApps(): Promise<App[]> {
  const response = await fetch(APPS_ENDPOINT);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
}

export async function fetchHistoryData(): Promise<{
  chatsHistory: ChatHistoryItem[];
  cats: Cat[];
  apps: App[];
}> {
  const [chatsHistory, cats, apps] = await Promise.all([
    fetchChatsHistory(),
    fetchCats(),
    fetchApps(),
  ]);
  return { chatsHistory, cats, apps };
}
