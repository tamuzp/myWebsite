import React from 'react'
import styled from 'styled-components'
import AwesomeIcon from './AwesomeIcon'
import { Heading, Subheading, Text } from './Typography'
import { render } from '@testing-library/react'


const TimelineJob = styled.div`
display: flex;
margin: 10px auto 10px auto;
`

const TimelineJobContent = styled.div`
background-color: #fff;
border-radius: 30px 10px 30px 10px;
    padding: 15px 10px;
    margin: 20px auto auto 0;
    height: 55px;
`

const TimelineEducation = styled.div``

const TimelineEducationContent = styled.div``

const TimelineMilitary = styled.div``

const TimelineMilitaryContent = styled.div``

const TimelineLanguages = styled.div``

const TimelineLanguagesContent = styled.div``

const Point = styled.div``

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
    }

    .single{
        margin-top: 37px;
    }
`

const Line = styled.div`
    width: 50px;
    border: 2px solid;
    height: 0;
    margin: auto 0 auto 0;
`

const Title = styled.div`
    display: flex;
    line-height: 30px;
    height: 30px;
    svg{
        margin-right: 5px;
    }
  ${Text}{
    font-weight: bold;
  }

  &:hover{
      cursor: pointer;
  }
`

const ToExpand = styled.div`
  height: 0;
  display: none;

  ${({show}) => show && css`
    height: 100px;
    opacity: 1;
  `}
`


export const TimelineJobItem = ({ Jobs }) => {
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
            <Line></Line>
            <TimelineJobContent>
                <Title>
                    <AwesomeIcon icon="caret-right" size="2x"/>
                    <Text>
                        {Jobs.title}
                    </Text>
                </Title>
                <ToExpand>
                {Jobs.points.map((point, i) => {
                    return (
                        <Point key={i}>
                            <Text>{point}</Text>
                        </Point>
                    )
                })}
                </ToExpand>
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
