import ChatDetailsList from "./_components/chat-details";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  console.log("Search query:", query);

  return (
    <>
      <div>
        <h1>Chat Details</h1>

        <ChatDetailsList searchQuery={query} currentPage={currentPage} />
      </div>

    </>
  );
}
