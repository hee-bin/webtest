import React from "react";
import { Box, Image, Grid } from "@chakra-ui/react";

function ClassPostItem({ date, images }) {
  return (
    <Box
      backgroundColor="white"
      p="5"
      borderRadius="10px"
      m="5"
      boxShadow="sm"
      _hover={{
        boxShadow: "md", // 호버 시 그림자 효과 증가
      }}
      transition="all 0.3s ease-in-out" // 부드러운 트랜지션 효과
    >
      <Box textAlign="center" fontSize="lg" color="gray.600" mb="5">
        {date}
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {images.map((image, index) => (
          <Box
            key={index}
            _hover={{
              transform: "scale(1.05)", // 호버 시 이미지 확대
              boxShadow: "lg", // 호버 시 그림자 효과 적용
            }}
            transition="all 0.3s ease-in-out" // 부드러운 트랜지션 효과
          >
            <Image
              src={image}
              alt={`Class Image ${index + 1}`}
              borderRadius="5px"
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default ClassPostItem;
