import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";

function Nav() {
  const navBgColor = useColorModeValue("white", "gray.800"); // 배경색을 흰색으로 설정
  const textColor = useColorModeValue("gray.800", "white"); // 글자색을 더 진하게 설정
  const borderBottomColor = useColorModeValue("gray.200", "gray.700"); // 밑줄 색상

  // 현재 선택된 메뉴 항목에 대한 스타일
  const activeLinkStyle = {
    borderBottom: "3px solid",
    borderBottomColor: "red.500", // 보라색 그라디언트로 설정 가능
    paddingBottom: "1px", // 밑줄과 텍스트 사이의 간격 조정
  };

  return (
    <Box as="nav" bg={navBgColor} boxShadow="sm" p="4" rounded="md">
      <Flex as="ul" justify="center" listStyleType="none" m="0">
        <Box as="li" mx="4" transition="background-color 0.2s ease-in-out">
          <Link
            as={RouterLink}
            to="/class"
            p="2"
            d="block"
            color={textColor}
            _hover={{ textDecoration: "none", bg: borderBottomColor }}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            화면공유
          </Link>
        </Box>
        <Box as="li" mx="4" transition="background-color 0.2s ease-in-out">
          <Link
            as={RouterLink}
            to="/job"
            p="2"
            d="block"
            color={textColor}
            _hover={{ textDecoration: "none", bg: borderBottomColor }}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            자격증/취업
          </Link>
        </Box>
        <Box as="li" mx="4" transition="background-color 0.2s ease-in-out">
          <Link
            as={RouterLink}
            to="/free"
            p="2"
            d="block"
            color={textColor}
            _hover={{ textDecoration: "none", bg: borderBottomColor }}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            필기공유
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Nav;
