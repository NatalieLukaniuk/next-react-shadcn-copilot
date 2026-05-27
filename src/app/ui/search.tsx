"use client";

import { Field } from "@/components/ui/field";
import { Search } from "@deemlol/next-icons";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function SearchField({
  isDisabled = false,
  children,
}: {
  isDisabled?: boolean;
  children?: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Field orientation="horizontal">
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          disabled={isDisabled}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString() || ''}
        />
        <InputGroupAddon align="inline-start">
          <Search size={16} color="#000000" strokeWidth={1.5} />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">{children}</InputGroupAddon>

      </InputGroup>
    </Field>
  );
}
