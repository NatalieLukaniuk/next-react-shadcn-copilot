import { App, Cat, ChatHistoryItem } from "./definitions";

const CHATS_HISTORY_ENDPOINT = "https://6a142a476c7db8aac053f526.mockapi.io/api/v1/chats-history";
const CATS_ENDPOINT = "https://6a142a476c7db8aac053f526.mockapi.io/api/v1/images";
const APPS_ENDPOINT = "https://apps-api.free.beeceptor.com/apps";


export async function fetchChatsHistory(): Promise<ChatHistoryItem[]> {
    
  try {
    console.log("Fetching chats history...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Fetching chats history - done");
    const response = await fetch(CHATS_HISTORY_ENDPOINT);   
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch chats history:", error);
    return [];
  }
}

export async function fetchChatDetails(chatId: string): Promise<ChatHistoryItem | null> {
  try {
    const response = await fetch(`${CHATS_HISTORY_ENDPOINT}/${chatId}`);  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error(`Failed to fetch chat details for chatId ${chatId}:`, error);
    return null;
  }
}

export async function fetchCats(): Promise<Cat[]> {
  try {
    const response = await fetch(CATS_ENDPOINT);    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }   const data = await response.json();
    return data;
    } catch (error) {
    console.error("Failed to fetch cats:", error);
    return [];
  }
}

export async function fetchApps(): Promise<App[]> {
  try {
    const response = await fetch(APPS_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }
}

export async function fetchHistoryData(): Promise<{ chatsHistory: ChatHistoryItem[]; cats: Cat[]; apps: App[] }> {
    const [chatsHistory, cats, apps] = await Promise.all([fetchChatsHistory(), fetchCats(), fetchApps()]);
    return { chatsHistory, cats, apps };
}