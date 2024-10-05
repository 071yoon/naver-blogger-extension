import * as React from "react";
import styled from "@emotion/styled";
import { deleteAllPostsInTab, likeAllLikablePosts } from "./postFunctions";

export default function App() {
  return (
    <Container>
      <Header>네이버 블로그 확장</Header>
      <Paragraph>블로그 홈페이지에서 사용해주세요</Paragraph>

      <Button
        onClick={() => {
          likeAllLikablePosts();
        }}
      >
        한번에 좋아요 누르기
      </Button>
      <Button
        onClick={() => {
          deleteAllPostsInTab();
        }}
      >
        모든 페이지 삭제
      </Button>
      <Footer
        onClick={() => {
          window.open("http://github.com/071yoon");
        }}
      >
        @071yoon
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.2rem 0.4rem;
  width: 12rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.h1`
  font-size: 1.2rem;
  margin: 0.2rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 0.7rem;
  margin: 0rem;
  color: #555;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #02c75a;
  color: white;
  border: none;

  cursor: pointer;
`;

const Footer = styled.footer`
  font-size: 0.8rem;
  display: flex;
  justify-content: right;
  color: #888;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
