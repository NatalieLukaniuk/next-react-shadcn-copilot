import { App } from "@/app/_lib/definitions";
import { fetchApps } from "@/app/_lib/fetch-data";
import { Suspense } from "react";

export default async function AppsList() {
  const apps = await fetchApps();
  return (
    <ul>
      <Suspense fallback={<div>Loading apps...</div>}>
        {apps.map((item) => (
          <AppItem key={item.id} {...item} />
        ))}
      </Suspense>
    </ul>
  );
}

function AppItem(item: App) {
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </li>
  );
}
