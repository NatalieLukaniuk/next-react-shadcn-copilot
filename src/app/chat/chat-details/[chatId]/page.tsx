import { fetchChatDetails } from "@/app/_lib/fetch-data";

export default async function ChatItem({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const id = (await params).chatId;
  const post = await fetchChatDetails(id);

  if(!post) {
    return <div>Chat details not found.</div>;
  }

  return (
    <div>
      <p>
        <strong>ID:</strong> {post.id}
      </p>
      <p>
        <strong>Title:</strong> {post.topic}
      </p>
      <p>
        <strong>Last Message:</strong> {post.description}
      </p>
      <p>
        <strong>Timestamp:</strong> {new Date(post.createdAt).toLocaleString()}
      </p>
    </div>
  );
}


