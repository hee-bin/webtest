import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function PostItem({ title, author, date }) {
  return (
    <Box
      p="5"
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="white"
      my="2"
      transition="all 0.2s ease-in-out" // 스무스한 트랜지션 효과
      _hover={{
        bg: "gray.100", // 호버 시 배경색 변경
        transform: "scale(1.01)", // 호버 시 약간 확대
        boxShadow: "lg", // 호버 시 그림자 효과 증가
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Flex alignItems="center">
          <Text fontWeight="semibold" mr="4">
            {author}
          </Text>
          <Text fontSize="sm">{date}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default PostItem;
