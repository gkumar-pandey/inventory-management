import { Box, Button, Container, Heading } from "@chakra-ui/react";
import ReportDataTable from "../components/ItemsData/reportDataTable";
import { useState } from "react";
import { RepeatIcon } from "@chakra-ui/icons";

const Analytics = () => {
  const [generateReport, setGenerateReport] = useState("");

  return (
    <>
      <Box width={"full"} p={5}>
        <Container maxW={"container.xl"}>
          <Box>
            <Heading>Report</Heading>
          </Box>
          <Box py={2} >
            <Box gap={5} display={'flex'} >
              <Button
                onClick={() => setGenerateReport("inventory")}
                colorScheme="teal"
                rightIcon={<RepeatIcon />}
              >
                Generate Inventory Report
              </Button>
              <Button
                onClick={() => setGenerateReport("sales")}
                colorScheme="teal"
                rightIcon={<RepeatIcon />}
              >
                Generate Sales Report
              </Button>
            </Box>
          </Box>
          <Box>
            {generateReport && (
              <ReportDataTable generateReport={generateReport} />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Analytics;
