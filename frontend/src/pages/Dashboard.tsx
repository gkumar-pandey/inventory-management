import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import OverviewCard from "../components/cards/Cards";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect } from "react";
import { fetchItems, fetchSales } from "../store/features";
import {
  getTotalProfit,
  getTotalRevenue,
  getTotalSales,
  getTotalStocks,
} from "../utils";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.items);
  const { sales } = useAppSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  return (
    <Box width={"full"} p={5}>
      <Container maxW={"container.xl"}>
        <Box>
          <Heading>Welcome Gautam</Heading>
          <Text>Here what happening with your store today.</Text>
        </Box>
        <Grid templateColumns="repeat(4,1fr)" gap={5} my={4}>
          <OverviewCard title={"Total Stocks"} value={getTotalStocks(items)} />
          <OverviewCard title={"Total Sales"} value={getTotalSales(sales)} />
          <OverviewCard
            title={"Total Revenue"}
            value={getTotalRevenue(sales)}
          />
          <OverviewCard title="Total Profit" value={getTotalProfit(sales)} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
