import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WishListItem from "./WishListItem";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { removeAll } from "../../redux/Slices/WishListSlice/WishListSlice";
import EmptyWishlist from "../../../public/wishlist.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist);

  const removeWishlist = () => {
    dispatch(removeAll());
    toast.warning(`WishList was cleared`, {
      autoClose: 1500,
    });
  };

  const isEmpty =
    products?.wishlist?.length > 0 ? (
      <VStack>
        <SimpleGrid
          columns={4}
          mt={6}
          spacing={6}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {products?.wishlist?.map((item) => {
            return (
              <div key={item.id}>
                <WishListItem key={item.id} {...item} />
              </div>
            );
          })}
        </SimpleGrid>
        <Button
          mt={4}
          variant={"solid"}
          colorScheme={"blue"}
          onClick={removeWishlist}
        >
          Clear All
        </Button>
      </VStack>
    ) : (
      <Image height={570} src={EmptyWishlist} alt="empty wishlist" />
    );

  return (
    <div>
      <VStack mt={6}>
        <Heading>YOUR WISHLIST IS EMPTY</Heading>
        {isEmpty}
      </VStack>
    </div>
  );
};

export default WishList;
