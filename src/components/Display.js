import React from 'react'
import { connect } from 'react-redux'

const Display = (props) => {
    return (
        <div>
            <p>Subscriber: {props.count}</p>
        </div>
    )
}

const mapStateToProps = ({ subscribers }) => {
    return { count: subscribers.count }
}
export default connect(mapStateToProps)(Display)
