import {Cat } from "@/app/_lib/definitions";
import { fetchCats } from "@/app/_lib/fetch-data";
import { Suspense } from "react";

export default async function CatsList() {
  const cats = await fetchCats();
  return (
    <ul>
      <Suspense fallback={<div>Loading cats...</div>}>
        {cats.map((item) => (
          <CatItem key={item.id} {...item} />
        ))}
      </Suspense>
    </ul>
  );
}

function CatItem(item: Cat) {
  return (
    <li>
      <h3>{item.image}</h3>
    </li>
  );
}
