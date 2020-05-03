import React from 'react';
import { connect } from 'react-redux';



const Display = (props) => {

    return(
        <div className="user">
            {
                props.users.map(user => (
                    <div className="user">
                        <h1>name: {user.name} </h1>
                        <h1>age: {user.age} </h1>
                        <h1>gender: {user.gender} </h1>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({

    users: state.users
})

export default connect(
    mapStateToProps,
    {}
)(Display);