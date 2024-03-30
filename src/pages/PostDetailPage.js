import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import PostDetail from "../components/PostDetail/PostDetail";
import Footer from "../components/Footer/Footer";

function PostDetailPage() {
  // URL에서 게시물 ID를 가져옵니다.
  const { id } = useParams();

  // 임시 데이터를 사용하여 게시물 정보를 설정합니다.
  const post = {
    id: id,
    title: "코드 공유합니다!",
    content: "",
    author: "익명의 누군가",
    uploadTime: "2024.08.11",
    boardType: "취업/자격증",
  };

  return (
    <Box>
      <Box maxW="800px" mx="auto" mt={8} px={4}>
        {/* 게시물 상세 정보를 보여주는 PostDetail 컴포넌트를 렌더링합니다. */}
        <PostDetail
          title={post.title}
          content={post.content}
          author={post.author}
          uploadTime={post.uploadTime}
          boardType={post.boardType}
        />
      </Box>
    </Box>
  );
}

export default PostDetailPage;
