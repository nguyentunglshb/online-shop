import React from "react";
import { Tbody, Td, Tr, Icon } from "@chakra-ui/react";

import { ColumnDefinitionType } from "./table";
import { CloseIcon } from "@/assets";

type TableBodyProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnDefinitionType<T, K>[];
  hasCloseIcon?: boolean;
};

export const TableBody = <T, K extends keyof T>(
  props: TableBodyProps<T, K>
) => {
  const { columns, hasCloseIcon = false, data } = props;

  const rows = data.map((row, idx1) => {
    return (
      <Tr key={idx1}>
        {hasCloseIcon && (
          <Td>
            <Icon as={CloseIcon} />
          </Td>
        )}
        {columns.map((column, idx2) => {
          return (
            <Td key={idx2}>
              {column.render
                ? column.render(row)
                : (row[column.key] as React.ReactNode)}
            </Td>
          );
        })}
      </Tr>
    );
  });

  return <Tbody>{rows}</Tbody>;
};
