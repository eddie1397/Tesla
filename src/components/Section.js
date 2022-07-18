import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, rightBtnText, leftBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p> 
            </ItemText>
        </Fade> 
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText &&
                        <RightButton>
                            { rightBtnText }
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
        <DownArrow  src='/images/down-arrow.svg' />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url('/images/${props.bgImage}')`}


`
const ItemText = styled.div`
  padding: 15vh;
  text-align: center;


`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer; 
  @media(max-width: 768px) {
    flex-direction: column;
  }
  

`
const RightButton = styled.div`
  background-color: lavender;
  height: 40px;
  width 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px;


`

const LeftButton = styled(RightButton)`
  background-color: black;
  color: white;

`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-: hidden;
  animation: animateDown infinite 1.5s;

  


`

const Buttons = styled.div`


`
