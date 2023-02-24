import React from "react";
import { Tbody, Td, Tr } from "@chakra-ui/react";

type TableBodyProps<T> = {
  data: T[];
};

export const TableBody = <T extends { productId: string }>(
  props: TableBodyProps<T>
) => {
  const { data } = props;

  const renderRow = <T,>(dataSource: T) => {
    return Object.entries(dataSource as Record<string, string | number>).map(
      ([key, value]) => {
        return <Td key={key}>{value}</Td>;
      }
    );
  };

  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.productId}>{renderRow(item)}</Tr>
      ))}
    </Tbody>
  );
};
