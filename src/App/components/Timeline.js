import React from 'react'
import styled from 'styled-components'
import ErrorDiv from './Error'
import { Jobs, Education, Languages, Military } from '../Data/data'
import { TimelineJobItem, TimelineEducationItem, TimelineMilitaryItem, TimelineLanguageItem } from './TimelineItem'

const TimelineContainer = styled.div`
    background-color: ${props => props.color || "#fff"};
    box-shadow: 3px -2px 5px 0px rgba(0,0,0,0.25);
`

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
            type: props.type,
            color: props.color
        }
        
    }

    render() {

        return (
            <TimelineContainer color={this.props.color}>
                <TimelineItem type={this.props.type}/>
            </TimelineContainer>
        )
    }
}
