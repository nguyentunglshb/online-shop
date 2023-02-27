import React from "react";
import { Table, TableContainer } from "@chakra-ui/react";

import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
  render?: (data: T) => React.ReactNode;
};

type TableProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnDefinitionType<T, K>[];
  hasCloseIcon?: boolean;
};

export const CustomTable = <T, K extends keyof T>(props: TableProps<T, K>) => {
  const { columns, data, hasCloseIcon = false } = props;

  return (
    <TableContainer>
      <Table>
        <TableHeader<T, K> columns={columns} hasCloseIcon={hasCloseIcon} />
        <TableBody<T, K>
          data={data}
          columns={columns}
          hasCloseIcon={hasCloseIcon}
        />
      </Table>
    </TableContainer>
  );
};
