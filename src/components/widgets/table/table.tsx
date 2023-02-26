import React from "react";
import { Table, TableContainer } from "@chakra-ui/react";

import { TableHeader, TableHeaderProps } from "./table-header";
import { TableBody } from "./table-body";

type TableProps<T> = {
  headers: TableHeaderProps<T>;
  data: T[];
};

export const CustomTable = <
  T extends {
    productId: string;
  }
>(
  props: TableProps<T>
) => {
  const { headers, data } = props;

  const tableProperty = headers.map((h) => h.value);

  return (
    <TableContainer>
      <Table>
        <TableHeader<T> headers={headers} />
        <TableBody<T> data={data} tableProperty={tableProperty} />
      </Table>
    </TableContainer>
  );
};
