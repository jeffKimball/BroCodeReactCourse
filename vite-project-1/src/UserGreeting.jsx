import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = (props) => {

    const welcomeMessage = <h2>Welcome {props.userName}</h2>
    const loginPrompt = <h2>Log in to continue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
       
     
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}


export default UserGreeting