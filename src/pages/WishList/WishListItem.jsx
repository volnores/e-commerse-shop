import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { removeItemFromWishList } from "../../redux/Slices/WishListSlice/WishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/Slices/CartSlice/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishListItem = ({ ...item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.wishlist.wishlist);
  console.log(state);

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
    toast.success(`${item?.title.slice(0, 20)} is added to Cart!`, {
      autoClose: 1500,
    });
  };

  const removeFromWishList = () => {
    dispatch(removeItemFromWishList(item.id));
    toast.warning(`${item?.title.slice(0, 20)} removed from WishList`, {
      autoClose: 1500,
    });
  };

  return (
    <div>
      <Card maxW={"sm"} minW={400}>
        <CardBody>
          <Image
            src={item?.image}
            width={400}
            height={400}
            alt={item?.title}
            borderRadius={"lg"}
            cursor={"pointer"}
            onClick={() => navigate(`${item?.id}`)}
          />
          <Stack mt={6}>
            <Heading size={"md"} minHeight={"50px"}>
              {item?.title}
            </Heading>
            <Text color={"blue.500"} fontSize={18}>
              ${item?.price}
            </Text>
          </Stack>
          <ButtonGroup mt={6}>
            <Button
              variant={"solid"}
              colorScheme={"blue"}
              onClick={handleAddToCart}
            >
              Add to Card
            </Button>
            <Button
              variant={"solid"}
              colorScheme={"blue"}
              onClick={removeFromWishList}
            >
              Remove
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default WishListItem;
