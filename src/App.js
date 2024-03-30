import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box, Flex, CSSReset } from "@chakra-ui/react";
import ClassPage from "./pages/ClassPage";
import JobPage from "./pages/JobPage";
import MainPage from "./pages/MainPage";
import UploadPage from "./pages/UploadPage";
import PostDetailPage from "./pages/PostDetailPage"; // PostDetailPage 추가

import FreePage from "./pages/FreePage";
import Header from "./components/Header/Header"; // 가정: Header 컴포넌트가 있다고 가정함
import Nav from "./components/Nav/Nav"; // 가정: Nav 컴포넌트가 있다고 가정함
import Footer from "./components/Footer/Footer"; // 가정: Footer 컴포넌트가 있다고 가정함

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Box className="App" textAlign="center" bgColor="#f5f6f7">
          <Flex
            className="App-container"
            maxW="800px"
            m="0 auto"
            p="20px"
            bg="#fff"
            minHeight="100vh"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.05)"
            borderRadius="10px"
            direction="column"
          >
            <Header />
            <Nav />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/class" element={<ClassPage />} />
              <Route path="/job" element={<JobPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/free" element={<FreePage />} />
              <Route path="/detail/:id" element={<PostDetailPage />} />{" "}
              {/* PostDetailPage 추가 */}
              {/* 추가적인 라우트 설정 */}
            </Routes>
            <Footer />
          </Flex>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
