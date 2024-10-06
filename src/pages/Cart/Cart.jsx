import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItemFromCart,
  incrementItem,
  decrementItem,
} from "../../redux/Slices/CartSlice/CartSlice";
import cart from "../../../public/cart.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.cart);

  const removeAllItems = () => {
    dispatch(clearCart());
    toast.warning(`removed All Items`, {
      autoClose: 1500,
    });
  };

  const totalPrice = items.reduce((a, b) => a + b.quantity * b.price, 0);

  console.log(items);

  return (
    <VStack w={"np"} mt={6}>
      {items.length > 0 ? (
        <Stack>
          {items.map((item) => {
            console.log(item);
            return (
              <Card key={item.id}>
                <CardBody>
                  <Flex
                    display={"flex"}
                    alignItems={"center"}
                    gap={20}
                    justifyContent={"space-between"}
                  >
                    <Image height={100} src={item?.image} alt="item" />
                    <Text>{item?.title}</Text>
                    <Button onClick={() => dispatch(incrementItem(item))}>
                      +
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button onClick={() => dispatch(decrementItem(item))}>
                      -
                    </Button>
                    <Text>${(item?.price * item?.quantity).toFixed(2)}</Text>
                    <Button onClick={() => dispatch(removeItemFromCart(item))}>
                      remove
                    </Button>
                  </Flex>
                </CardBody>
              </Card>
            );
          })}
          <Divider mt={4} />
          <Flex
            mt={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button onClick={removeAllItems}>Remove All Items</Button>
            <Heading size={"md"}>Total Price: ${totalPrice.toFixed(2)}</Heading>
          </Flex>
        </Stack>
      ) : (
        <div>
          <Box textAlign={"center"}>
            <Heading>YOUR CART IS EMPTY</Heading>
            <Button mt={6} onClick={() => navigate("/")}>
              START SHOPPING
            </Button>
            <Image mt={6} h={500} src={cart} alt="empty Cart" />
          </Box>
        </div>
      )}
    </VStack>
  );
};

export default Cart;
