import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addView } from '../redux'

const Views = ({ count, addView }) => {
    const [number, setNumber] = useState(1)
    return (
        <div className='items'>
            <h2>Views: {count}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => addView(number)}>View</button>
        </div>
    )
}

const mapStateToProps = ({ views }) => {
    return {
        count: views.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {
    addView: (number) => addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)