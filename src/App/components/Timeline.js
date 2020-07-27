import React from 'react'
import styled from 'styled-components'
import ErrorDiv from './Error'
import { Jobs, Education, Languages, Military } from '../Data/data'
import { TimelineJobItem, TimelineEducationItem, TimelineMilitaryItem, TimelineLanguageItem } from './TimelineItem'

const TimelineContainer = styled.div`
    background-color: ${props => props.color || "#fff"};
    overflow: auto;
    height: 700px;
    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.scrollbarTrack || "#f1f1f1"}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.scrollbarThumb || "#888"}; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.scrollbarHover || "#555"}; 
}

`

function TimelineItem(props) {
    switch (props.type) {
        case "Jobs":
            return (Jobs.map((Jobs, idx) => (
                <TimelineJobItem Jobs={Jobs} key={idx} />
            )))
        case "Education":
            return (Education.map((Education, idx) => (
                <TimelineEducationItem Education={Education} key={idx} />
            )))
        case "Military":
            return (Military.map((Military, idx) => (
                <TimelineMilitaryItem Military={Military} key={idx} />
            )))
        case "Language":
            return (Languages.map((Languages, idx) => (
                <TimelineLanguageItem Languages={Languages} key={idx} />
            )))
        default:
            return (<ErrorDiv />)
    }
}

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
    }

    shiftColor(color, val) {
        if (color) {
            let valArr = color.match(/\d+/g).map(Number)
            let newArr = valArr.map((color, i) => {
                return color + val
            })
            return ("rgb(" + newArr[0] + "," + newArr[1] + "," + newArr[2] + ")")
        } else {
            return null
        }
    }

    render() {
        return (
            <TimelineContainer
                color={this.props.color}
                scrollbarTrack={this.shiftColor(this.props.color, 30)}
                scrollbarThumb={this.shiftColor(this.props.color, -30)}
                scrollbarHover={this.shiftColor(this.props.color, -50)}
            >
                <TimelineItem type={this.props.type} />
            </TimelineContainer>
        )
    }
}
