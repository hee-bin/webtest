import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, VStack, Button, Heading } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Title from "../components/Title/Title";
import PostItem from "../components/PostItem/PostItem";
import Footer from "../components/Footer/Footer";

const mockPosts = [
  { id: 1, title: "첫 번째 게시글", author: "홍길동", date: "2024-03-28" },
  { id: 2, title: "두 번째 게시글", author: "이순신", date: "2024-03-29" },
  { id: 3, title: "세 번째 게시글", author: "장보고", date: "2024-03-30" },
];

function JobPage() {
  return (
    <Box>
      <VStack spacing={4} align="stretch" m={4}>
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Title text="취업/자격증" />
          <Button as={RouterLink} to="/upload" colorScheme="teal">
            글쓰기
          </Button>
        </Box>
        {mockPosts.map((post) => (
          <RouterLink key={post.id} to={`/detail/${post.id}`}>
            <PostItem
              title={post.title}
              author={post.author}
              date={post.date}
            />
          </RouterLink>
        ))}
      </VStack>
    </Box>
  );
}

export default JobPage;
