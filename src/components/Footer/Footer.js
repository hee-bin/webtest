import React from "react";
import { Box, Text } from "@chakra-ui/react"; // Chakra UI 컴포넌트를 임포트합니다.

function Footer() {
  return (
    <Box
      as="footer"
      className="footer"
      textAlign="center"
      p="20px"
      bg="gray.100"
    >
      <Text>© 2024 게시판. 모든 권리 보유.</Text>
    </Box>
  );
}

export default Footer;
