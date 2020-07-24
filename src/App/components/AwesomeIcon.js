import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)

const AwesomeIcon = ({ icon, size = "", rotation = 0, flip = "", animate = ""}) => (
    <FontAwesomeIcon 
        icon={["fas", icon]} 
        size={size} 
        rotation={rotation}
        {...animate}/>
)

export default AwesomeIcon