import React, { useEffect, useState } from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import ClassPostItem from "../components/ClassPostItem/ClassPostItem";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";

function ClassPage() {
  const [classPosts, setClassPosts] = useState([]);

  useEffect(() => {
    fetch("http://43.201.98.198:8080/photo") // 'http://' 프로토콜을 추가
      .then((response) => response.json())
      .then((data) => {
        setClassPosts(
          data.map((item) => ({
            ...item,
            images: [item["이미지"]],
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Box>
      <VStack spacing={4} align="stretch" m={4}>
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Title text="화면 공유" />
          <Button as={RouterLink} to="/upload" colorScheme="teal">
            글쓰기
          </Button>
        </Box>
        {classPosts.map((post) => (
          <ClassPostItem key={post.id} date={post.date} images={post.images} />
        ))}
      </VStack>
    </Box>
  );
}

export default ClassPage;
