import { styled } from 'styled-components';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { useState } from 'react';
import {sliderItems} from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow-x: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.Direction === 'left' && '10px'};
    right: ${props=> props.Direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper =styled.div`
     display: flex;
     height: 100%;
     transition: all 1.5s ease;
     transform: translateX(${(props)=>props.slideIndex * - 100}vw);
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

`;
const Title = styled.h1`
    font-size: 85px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;

`;
const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
    font-size: 25px;
    letter-spacing: 2px;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex]=useState(0);
    const handleClick=(Direcion)=>{
        if(Direcion === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
  return (
    <Container>
        <Arrow Direction='left' onClick={()=> handleClick("left")}>
        <ArrowLeftOutlinedIcon/>  
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((items)=>(     
            <Slide bg={items.bg}>
            <ImageContainer>
                <Image src={items.img} />
            </ImageContainer>
            <InfoContainer>
                <Title>{items.title}</Title>
                <Description>{items.desc}</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
           ))}
        </Wrapper>
        <Arrow Direction='right' onClick={()=> handleClick("right")}>
         <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
