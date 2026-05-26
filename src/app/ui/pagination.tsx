"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function PaginationComponent({
  totalRecords = 100,
  recordsPerPage = 10
}: {
  totalRecords?: number;
  recordsPerPage?: number;
  currentPage?: number;
}) {
    const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createPageURL = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return "#";
    }
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage - 1)}  />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={createPageURL(page)} isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
