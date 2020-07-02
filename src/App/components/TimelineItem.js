import React from 'react'
import styled from 'styled-components'

import { Heading, Subheading, Text } from 'Typography'
import { Jobs, Education, Military, Languages } from '../Data/data'


const TimelineJob = styled.div``

const TimelineJobContent = styled.div``

const TimelineEducation = styled.div``

const TimelineEducationContent = styled.div``

const TimelineMilitary = styled.div``

const TimelineMilitaryContent = styled.div``

const TimelineLanguages = styled.div``

const TimelineLanguagesContent = styled.div``

export const TimelineJobItem = ({Jobs}) => {
    <TimelineJob>
        <TimelineJobContent>
            <Text>{Jobs.title}</Text>
            <Text>{Jobs.yearStart}</Text>
            <Text>{Jobs.yearEnd}</Text>
            {Jobs.points.map((point) => {
                <Text>{point}</Text>
            })}
        </TimelineJobContent>
    </TimelineJob>
}

export const TimelineEducationItem = ({Education}) => {
    <TimelineEducation>
        <TimelineEducationContent>
            <Text>{Education.title}</Text>
            <Text>{Education.yearStart}</Text>
            <Text>{Education.yearEnd}</Text>
            <Text>{Education.description}</Text>
        </TimelineEducationContent>
    </TimelineEducation>
}

export const TimelineMilitaryItem = ({Military}) => {
    <TimelineMilitary>
        <TimelineMilitaryContent>
            <Text>{Military.title}</Text>
            <Text>{Military.yearStart}</Text>
            <Text>{Military.yearEnd}</Text>
            {Military.points.map((point) => {
                <Text>{point}</Text>
            })}
        </TimelineMilitaryContent>
    </TimelineMilitary>
}

export const TimelineLanguageItem = ({Languages}) => {
    <TimelineLanguages>
        <TimelineLanguagesContent>
            <Text>{Languages.language}</Text>
            <Text>{Languages.level}</Text>
        </TimelineLanguagesContent>
    </TimelineLanguages>
}
