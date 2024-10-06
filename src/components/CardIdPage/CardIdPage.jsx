import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useItemId from "../hooks/useItemId";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWishList,
  removeItemFromWishList,
} from "../../redux/Slices/WishListSlice/WishListSlice";
import { addItemToCart } from "../../redux/Slices/CartSlice/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardIdPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.wishlist.wishlist).some(
    (item) => item?.id?.toString() === id
  );

  const handleAddToCart = () => {
    dispatch(addItemToCart(products));
    toast.success(`${products?.title.slice(0, 20)} is added to Cart!`, {
      autoClose: 1500,
    });
  };

  const handleWishlist = () => {
    if (state) {
      dispatch(removeItemFromWishList(products));
      toast.warning(`${products?.title.slice(0, 20)} removed from WishList`, {
        autoClose: 1500,
      });
    } else {
      dispatch(addItemToWishList(products));
      toast.success(`${products?.title.slice(0, 20)} is added to WishList`, {
        autoClose: 1500,
      });
    }
  };

  const { products, isLoading, error } = useItemId(`/${id}`);
  if (!error && isLoading) {
    return <Loader />;
  }
  if (!isLoading && error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <Card w={"full"} display={"flex"} p={3}>
        <Breadcrumb fontWeight="medium" fontSize="lg" p={6}>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate(-1)} color={"blue.500"}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>{products?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <CardBody
          maxH={500}
          maxW={1500}
          mb={30}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Image
              src={products?.image}
              width={400}
              height={400}
              alt={products?.title}
              borderRadius={"lg"}
              cursor={"pointer"}
              maxW={"450px"}
              mr={6}
            />
          </Box>
          <Box>
            <Stack spacing={3} display={"flex"} justifyContent={"center"}>
              <Heading size={"lg"} minHeight={"50px"}>
                {products?.title}
              </Heading>
              <Divider color={"black"} />
              <Text color={"yellow.400"} fontSize={22}>
                available
              </Text>
              <Text color={"gray.600"} fontSize={20}>
                Categories: {products?.category.name}
              </Text>
              <Text color={"gray.600"} fontSize={20}>
                Price: ${products?.price}
              </Text>
              <Text color={"blue.500"} fontSize={20}>
                {products?.description}
              </Text>
            </Stack>
            <ButtonGroup mt={6} spacing={2}>
              <Button
                variant={"solid"}
                colorScheme={"blue"}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant={"solid"}
                colorScheme={"blue"}
                onClick={handleWishlist}
              >
                {state ? "Remove" : "Add To WishList"}
              </Button>
            </ButtonGroup>
          </Box>
        </CardBody>
      </Card>
    </div>
  );
};

export default React.memo(CardIdPage); //react memo!!
