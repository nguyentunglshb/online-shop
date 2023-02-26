import React from "react";
import { Tbody, Td, Tr } from "@chakra-ui/react";

type TableBodyProps<T> = {
  tableProperty: (keyof T)[];
  data: T[];
};

export const TableBody = <T extends { productId: string }>(
  props: TableBodyProps<T>
) => {
  const { data, tableProperty } = props;

  console.log(tableProperty);

  const renderRow = <T,>(dataSource: T) => {
    return tableProperty.map((p, index) => {
      return <Td key={index}>{(dataSource as Record<any, any>)[p]}</Td>;
    });
  };

  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.productId}>{renderRow(item)}</Tr>
      ))}
    </Tbody>
  );
};
