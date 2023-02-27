import React from "react";
import { Th, Thead, Tr } from "@chakra-ui/react";

import { ColumnDefinitionType } from "./table";

export type TableHeaderProps<T, K extends keyof T> = {
  columns: ColumnDefinitionType<T, K>[];
  hasCloseIcon?: boolean;
};

export const TableHeader = <T, K extends keyof T>({
  columns,
  hasCloseIcon = false,
}: TableHeaderProps<T, K>) => {
  return (
    <Thead>
      <Tr>
        {hasCloseIcon && <Th></Th>}
        {columns.map((h) => (
          <Th w={h.width} key={h.key as string}>
            {h.header}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};
