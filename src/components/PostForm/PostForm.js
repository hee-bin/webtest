import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  InputGroup,
  InputLeftElement,
  Icon,
  Select,
} from "@chakra-ui/react";
import { MdTitle, MdDescription, MdAttachFile, MdPerson } from "react-icons/md";

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, category, author, file });
  };

  return (
    <Box bg="gray.100" p={5} rounded="md" boxShadow="xl">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>제목</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdTitle} color="gray.500" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>작성자</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdPerson} color="gray.500" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="작성자 이름을 입력하세요"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>카테고리</FormLabel>
            <Select
              placeholder="카테고리를 선택하세요"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="screenShare">화면공유</option>
              <option value="certification">자격증/취업</option>
              <option value="notesShare">필기공유</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>본문</FormLabel>
            <Textarea
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
            />
          </FormControl>

          <FormControl>
            <FormLabel>파일 첨부</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdAttachFile} color="gray.500" />
              </InputLeftElement>
              <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </InputGroup>
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" isFullWidth>
            UPLOAD
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default PostForm;
