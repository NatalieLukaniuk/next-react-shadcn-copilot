export interface ChatHistoryItem {
  id: string;
  createdAt: Date;
  topic: string;
  description: string;
}

export interface Cat {
  id: string;
  image: string;
}

export interface App {
  id: string;
  title: string;
  description: string;
  url: string;
}