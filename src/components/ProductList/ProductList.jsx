import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import {
  Heading,
  SimpleGrid,
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Select,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import Loader from "../Loader/Loader";
import { getAxiosItems } from "../../redux/Slices/getProductsSlice";
import {
  setSearchedProduct,
  setCategory,
} from "../../redux/Slices/FilterSlice/FilterSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.items);
  const { searchedProduct, category } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getAxiosItems());
  }, []);

  let filteredItems;

  if (searchedProduct) {
    filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
  } else if (category.length > 0) {
    if (category === "All") {
      filteredItems = items;
    } else {
      filteredItems = items.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  } else {
    filteredItems = items;
  }

  const categories = [
    { name: "jewelery", value: "jewelery" },
    { name: "men's clothing", value: "men's clothing" },
    { name: "electronics", value: "electronics" },
    { name: "women's clothing", value: "women's clothing" },
  ];

  return (
    <div>
      {status == "loading" ? (
        <Loader />
      ) : (
        <VStack mt={6}>
          <Heading>POPULAR PRODUCTS</Heading>

          <Flex
            display={"flex"}
            gap={400 * 3}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex
              display={"flex"}
              m={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack>
                <Select
                  ml={50}
                  placeholder="All"
                  width={210}
                  value={category}
                  onChange={(e) => dispatch(setCategory(e.target.value))}
                >
                  {categories.map((item) => {
                    console.log(item);
                    return (
                      <option value={item.value} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </Select>
              </Stack>
            </Flex>

            <IconButton
              aria-label="search"
              icon={<FaSearch />}
              variant={"ghost"}
              colorScheme="gray"
              display={{ base: "flex", md: "none" }}
              rounded={"full"}
              size={"md"}
            />
            <InputGroup size={"md"} mr={8}>
              <Input
                m={7}
                maxW={500}
                display={"flex"}
                justifyContent={"center"}
                variant={"filled"}
                placeholder="Search..."
                value={searchedProduct}
                onChange={(e) => dispatch(setSearchedProduct(e.target.value))}
              />
              <InputRightElement m={7} cursor={"pointer"}>
                {searchedProduct === "" ? (
                  <FaSearch />
                ) : (
                  <FaWindowClose
                    onClick={() => dispatch(setSearchedProduct(""))}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </Flex>
          <SimpleGrid
            columns={4}
            mt={6}
            spacing={6}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {filteredItems.length > 0 ? (
              filteredItems?.map((item) => {
                return <ProductCard key={item?.id} {...item} />;
              })
            ) : (
              <Heading>Nothing found</Heading>
            )}
          </SimpleGrid>
        </VStack>
      )}
    </div>
  );
};
// {error && <h2>{error}</h2>}
export default ProductList;
