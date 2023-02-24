import React from "react";
import { Table, TableContainer } from "@chakra-ui/react";

import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";

type TableProps<T> = {
  headers: string[];
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
  return (
    <TableContainer>
      <Table>
        <TableHeader headers={headers} />
        <TableBody data={data} />
      </Table>
    </TableContainer>
  );
};
