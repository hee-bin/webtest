import React from "react";
import { Box, Text, Divider, Flex } from "@chakra-ui/react";

function PostDetail({ title, content, author, uploadTime, boardType }) {
  return (
    <Box p={6} borderWidth="1px" borderRadius="lg">
      <Text fontSize="1xl" fontWeight="bold" mb={4}>
        {boardType}
      </Text>

      <Flex justify="space-between" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Box textAlign="right">
          <Text>작성자: {author}</Text>
          <Text>업로드 시간: {uploadTime}</Text>
        </Box>
      </Flex>
      <Divider mb={4} />

      <Text fontSize="lg" mb={4}>
        {content}
      </Text>
    </Box>
  );
}

export default PostDetail;
