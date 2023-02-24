import React from "react";
import { Td, Thead, Tr } from "@chakra-ui/react";

type TableHeaderProps = string[];

export const TableHeader = ({ headers }: { headers: TableHeaderProps }) => {
  return (
    <Thead>
      <Tr>
        {headers.map((h) => (
          <Td key={h}>{h}</Td>
        ))}
      </Tr>
    </Thead>
  );
};
