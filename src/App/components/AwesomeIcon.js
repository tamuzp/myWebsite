import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebookSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'

library.add(faCaretRight, faEnvelope, faLinkedin, faFacebookSquare, faGithubSquare)

const AwesomeIcon = ({ icon, size = "", rotation = 0, flip = "", animate = "", prefix = "fas", color=""}) => (
    <FontAwesomeIcon 
        color={color}
        icon={[prefix, icon]} 
        size={size} 
        rotation={rotation}
        {...animate}/>
)

export default AwesomeIcon