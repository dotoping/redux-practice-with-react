import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/index'

const Users = ({ fetchUsers, loading, users }) => {
    useEffect(() => {
        fetchUsers()
    }, [])

    const userList = loading ? (<div>is loading....</div>) : (
        users.map(user => (
            <div key={user.id}>
                {user.id}. <h3>Name: {user.name}</h3>
                <p>Email: {user.email}</p>
            </div>
        ))
    )

    return (
        <div className='users' >
            {userList}
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        users: users.items
    }
}

const mapDispatchToProps = { fetchUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Users)
