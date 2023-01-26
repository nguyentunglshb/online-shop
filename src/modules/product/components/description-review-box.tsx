import React from "react";
import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";

interface DescriptionReviewBoxProps {
  description: string;
  review: string;
}

export const DescriptionReviewBox = (
  props: Partial<DescriptionReviewBoxProps>
) => {
  const { description = "", review = "" } = props;

  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Description</Tab>
        <Tab>Reviews</Tab>
      </TabList>
      <TabPanels border="1px solid" borderColor="inherit">
        <TabPanel p={12}>
          <Text>{description}</Text>
        </TabPanel>
        <TabPanel p={12}>
          <Text>{review}</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
