import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

function Title({ text }) {
  return (
    <Box className="title" textAlign="center" my="4">
      {" "}
      {/* marginTop과 marginBottom을 '4'로 설정 */}
      <Text as="h4" fontSize="xl" fontWeight="bold">
        {" "}
        {/* 'h4' 태그로 'xl' 크기의 볼드체 텍스트 */}
        {text}
      </Text>
      <Divider my="2" /> {/* 위아래 마진 '2'를 가진 구분선 */}
    </Box>
  );
}

export default Title;
