import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { FC } from "react";

interface OverviewCardProps {
  title: string;
  value: number;
}

const OverviewCard: FC<OverviewCardProps> = ({ title, value }) => {
  return (
    <>
      <Card border={"1px solid #eee"} boxShadow={"lg"} size={"lg"}>
        <CardHeader>
          <Heading size={"md"}>{title}</Heading>
        </CardHeader>
        <CardBody>
          <Heading size={"lg"}>{value}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default OverviewCard;
