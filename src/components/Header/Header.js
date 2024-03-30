import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      textAlign="center"
      p="40px"
      w="100%"
      bgGradient="linear(to-l, purple.300, pink.200)" // 박스에 그라디언트 배경 적용
      borderRadius="lg" // 박스 모서리를 둥글게
      boxShadow="xl" // 박스에 그림자 효과 적용
    >
      <Text
        fontSize="6xl"
        fontWeight="extrabold"
        color="white" // 텍스트 색상을 흰색으로 설정
      >
        AWSOME WIKI
      </Text>
    </Box>
  );
}

export default Header;
