import React from 'react'
import styled from 'styled-components'
import ErrorDiv from './Error'
import { Jobs, Education, Languages, Military } from '../Data/data'
import { TimelineJobItem, TimelineEducationItem, TimelineMilitaryItem, TimelineLanguageItem } from './TimelineItem'

const TimelineContainer = styled.div``

function TimelineItem(props){
    switch (props.type) {
        case "Jobs":
            return( Jobs.map((Jobs, idx) => (
                <TimelineJobItem Jobs={Jobs} key={idx} />
            )))
        case "Education":
            return( Education.map((Education, idx) => (
                <TimelineEducationItem Education={Education} key={idx} />
            )))
        case "Military":
            return( Military.map((Military, idx) => (
                <TimelineMilitaryItem Military={Military} key={idx} />
            )))
        case "Language":
            return( Languages.map((Languages, idx) => (
                <TimelineLanguageItem Languages={Languages} key={idx} />
            )))
        default:
            return (<ErrorDiv />)
    }
}

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: props.type
        }
        
    }

    render() {

        return (
            <TimelineContainer>
                <TimelineItem type={this.props.type}/>
            </TimelineContainer>
        )
    }
}
