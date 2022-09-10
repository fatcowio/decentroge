import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import PageTitle from "../components/Typography/PageTitle";

export default function NFT() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
      description: "short descriptions",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "3.00 ETH",
      description: "short descriptions",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      description: "short descriptions",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      description: "short descriptions",
    },
    {
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
      description: "short descriptions",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
      description: "short descriptions",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",

      price: "$7.50",
      description: "short descriptions",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      description: "short descriptions",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",

      price: "$7.50",
      description: "short descriptions",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      description: "short descriptions",
    },
  ];

  return (
    <>
      <PageTitle>Decentroge NFT Marketplace</PageTitle>

      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {item.price}
                  </Text>
                  <p className="text-sm">{item.description}</p>
                </Row>
              </Card.Footer>
              <button className="mx-4 mb-3 bg-blue-500 rounded-full text-white p-1">
                Buy
              </button>{" "}
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
