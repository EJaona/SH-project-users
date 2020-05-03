import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/index';
import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm';
import Display from './component/Display';

function App(props) {

  useEffect(() => {

    props.fetchData()

  }, [])


  return (
    <div className="App">
      <UserForm />
      <Display />
    </div>
  );
}

const mapStateToProps = state => ({


})

export default connect(mapStateToProps, { fetchData })(App);
