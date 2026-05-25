import ChatDetailsList from "./_components/chat-details";
import AppsList from "./_components/apps-list";
import CatsList from "./_components/cats-list";

export default async function Page() {


  return (
    <>
    <div>
      <h1>Chat Details</h1>
      
        <ChatDetailsList  />

    </div>
    {/* <div>
      <h1>Cats</h1>
        <CatsList />
    </div>
    <div>
      <h1>Apps</h1>
        <AppsList />
    </div> */}
      
    </>
  );
}