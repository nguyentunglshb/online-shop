import React from "react";
import { Td, Thead, Tr } from "@chakra-ui/react";

export type TableHeaderProps<T> = {
  label: string;
  value: keyof T;
}[];

export const TableHeader = <T,>({
  headers,
}: {
  headers: TableHeaderProps<T>;
}) => {
  return (
    <Thead>
      <Tr>
        {headers.map((h) => (
          <Td key={h.label}>{h.label}</Td>
        ))}
      </Tr>
    </Thead>
  );
};
