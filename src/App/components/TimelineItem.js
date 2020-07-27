import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import AwesomeIcon from './AwesomeIcon'
import { Heading, Subheading, Text } from './Typography'
import { render } from '@testing-library/react'

const growShrink = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.01);
    }
    100%{
        transform: scale(1);
    }
`

const TimelineJob = styled.div`
    display: flex;
    margin: 10px auto 10px auto;
`

const TimelineJobContent = styled.div`
    transition: all .3s ease-in-out;
    white-space: nowrap;
    max-width: 80%;

    @media(max-width:480px){
        white-space: unset;
        margin: 3px auto auto 0;
        max-width:65%;
    }

    svg{
        transition: transform .3s;
        margin-right: 5px;
        
        ${({ open }) => open && css`
        transform: rotate(90deg);
      `}
    }

    /*${({ open }) => !open && css`
        &:hover{
            animation: ${growShrink} .2s ease-in-out;
        }    
    `}*/

    ${({ open }) => open && css`

    svg{
        transform: rotate(90deg);
    }
    `}

`

const TimelineEducation = styled.div``

const TimelineEducationContent = styled.div``

const TimelineMilitary = styled.div``

const TimelineMilitaryContent = styled.div``

const TimelineLanguages = styled.div``

const TimelineLanguagesContent = styled.div``

const Point = styled.div`
    padding: 10px 10px 0;
    margin: 0 50px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 30px 10px 30px 10px;
    width: fit-content;
    white-space: pre-wrap;

    @media (max-width:480px){
        margin: 0 5px 0 0;
    }
`

const Year = styled.div`
    border-radius: 50%;
    background-color: #fff;
    width: 100px;
    height: 100px;
    text-align: center;
    margin: 0 0 auto 20px;
    font-weight: bold;
    
    ${Text}{
        margin-top: 25px;
        font-size: 21px;
    }
    
    .single{
        margin-top: 37px;
    }
    
    @media(max-width:480px){
        margin: 0 0 auto 10px;
        width: 70px;
        height: 70px;

        ${Text}{
            margin-top: 17px;
            font-size:17px;
        }
        
        .single{
            margin-top: 26px;
        }
    }    
`

const HorizintalLine = styled.div`
    width: 50px;
    border: 2px solid;
    height: 0;
    margin: 50px 0 auto 0;

    @media(max-width:480px){
        width:15px;
        margin: 35px 0 auto 0;
        }
    
`

const VerticalLine = styled.div`
    width: 0px;
    border: 2px solid;
    height: 20px;
    margin: 0 100px;

    @media(max-width:480px){
        height:15px;
        margin: 0 50px;
    }
    
`

const Title = styled.div`
    padding: 15px 10px 0;
    margin: 20px auto auto 0;
    background-color: #fff;
    border-radius: 30px 10px 30px 10px;
    display: flex;
    width: fit-content;
    outline:0;
    user-select: none;
    ${Text}{
        position: relative;
    top: 5px;
        font-weight: bold;
    }

    &:hover{
        cursor: pointer;
    }
    
    @media (max-width:480px){
        margin: 5px auto auto 0;
        padding: 10px 10px 5px;
    }
`

const PointWrapper = styled.div`
    max-height: 0;
    /*max-width: 0;*/
    overflow: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;

    ${({open}) => open && css`{
        max-height:300px;
        display: block;
        max-width: 800px;
        opacity: 1;
    }
    `}
    
`

const Points = styled.div`


  transition: all .3s;
  ${Text}{
    position: relative;
    top: 5px;
      font-size:18px;
  }
`

// function openItem(){

// }

export const TimelineJobItem = ({ Jobs }) => {
    const [open, setOpen] = useState(false)

    return (
        <TimelineJob>
            <Year>
                {Jobs.yearEnd === Jobs.yearStart &&
                    <Text className="single">
                        {Jobs.yearStart}
                    </Text>
                }
                {Jobs.yearEnd !== Jobs.yearStart &&
                    <Text>
                        {Jobs.yearStart + " - " + Jobs.yearEnd}
                    </Text>
                }
            </Year>
            <HorizintalLine></HorizintalLine>
            <TimelineJobContent open={open}>
                <Title onClick={() => setOpen(!open)}>
                    <AwesomeIcon icon="caret-right" size="2x" />
                    <Text>
                        {Jobs.title}
                    </Text>
                </Title>
                <Points>
                    {Jobs.points.map((point, i) => {
                        return (
                            <PointWrapper key={i} open={open}>
                                <VerticalLine></VerticalLine>
                                <Point>
                                    <Text>{point}</Text>
                                </Point>
                            </PointWrapper>
                        )
                    })}
                </Points>
            </TimelineJobContent>
        </TimelineJob>
    )
}

export const TimelineEducationItem = ({ Education }) => {
    return (
        <TimelineEducation>
            <TimelineEducationContent>
                <Text>{Education.yearStart} - {Education.yearEnd}</Text>
                <Text>{Education.title}</Text>
                <Text>{Education.description}</Text>
            </TimelineEducationContent>
        </TimelineEducation>
    )
}

export const TimelineMilitaryItem = ({ Military }) => {
    return (
        <TimelineMilitary>
            <TimelineMilitaryContent>
                <Text>{Military.yearStart} - {Military.yearEnd}</Text>
                <Text>{Military.title}</Text>
                {Military.points.map((point, i) => {
                    return (
                        <Point key={i}>
                            <Text>{point}</Text>
                        </Point>
                    )
                })}
            </TimelineMilitaryContent>
        </TimelineMilitary>
    )
}

export const TimelineLanguageItem = ({ Languages }) => {
    return (
        <TimelineLanguages>
            <TimelineLanguagesContent>
                <Text>{Languages.language}</Text>
                <Text>{Languages.level}</Text>
            </TimelineLanguagesContent>
        </TimelineLanguages>
    )
}
