import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../redux/Slices/CartSlice/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ ...item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBuyNow = () => {
    navigate("/cart");
    dispatch(addItemToCart(item));
    toast("let's buy now!", {
      autoClose: 1500,
    });
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
    toast.success(`${item?.title?.slice(0, 20)}is added to Cart!`, {
      autoClose: 1500,
    });
  };

  return (
    <Card maxW={"sm"} minW={400}>
      <CardBody>
        <Flex display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Image
            display={"flex"}
            src={item?.image}
            width={300}
            height={300}
            alt={item?.title}
            borderRadius={"lg"}
            cursor={"pointer"}
            onClick={() => navigate(`${item?.id}`)}
          />
        </Flex>
        <Stack mt={6}>
          <Heading size={"md"} minHeight={"100px"}>
            {item?.title}
          </Heading>
          <Text color={"blue.500"} fontSize={18}>
            ${item?.price}
          </Text>
        </Stack>
        <ButtonGroup mt={6}>
          <Button variant={"solid"} colorScheme={"blue"} onClick={handleBuyNow}>
            Buy now
          </Button>
          <Button
            variant={"solid"}
            colorScheme={"blue"}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
