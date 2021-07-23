import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber } from '../redux/index'

const Subscribers = ({ count, addSubscriber }) => {
    return (
        <div className='items'>
            <h2>Subscribers: {count}</h2>
            <button onClick={() => addSubscriber()}>Subscribe</button>
        </div>
    )
}

const mapStateToProps = ({ subscribers }) => {
    return {
        count: subscribers.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {
    addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)