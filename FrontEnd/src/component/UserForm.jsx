import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

const UserForm = (props) => {

   

    const [newUser, setNewUSer] = useState({
        name: '',
        age: '',
        gender: ''
    })

    const handleSubmit = (e) => {

        console.log(newUser)
        
        e.preventDefault()
        props.addUser(newUser)

    }

    const handleChange = e => {

        setNewUSer({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    // const handleNameChange = e => {

    //     props.name = e.target.value
        
    // }
    // const handleAgeChange = e => {

    //     props.age = e.target.value
        
    // }
    // const handleGenderChange = e => {

    //     props.gender = e.target.value
        
    // }


    return(

        <div className="user">
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="name..." name="name" value={props.name} onChange={handleChange} />
                <input type="text" placeholder="age..." name="age" value={props.age} onChange={handleChange}/>
                <input type="text" placeholder="gender..." name="gender" value={props.gender} onChange={handleChange}/>

                <input type="submit"/>

            </form>
        </div>
    )
}

const mapStateToProps = state => ({

    user: state.user // { name, age, gender }
})

export default connect(
    mapStateToProps,
    { addUser }
)(UserForm);