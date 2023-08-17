import { styled } from "styled-components";

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    text-align: center;
    align-items: center;
    font-size: 20px;
    padding-top: 5px;
    letter-spacing: 2px;
`;

const Announcement = () => {
  return (
    <Container>
        Super deal! Free shipping on Orders over 50$.
    </Container>
  )
}

export default Announcement
