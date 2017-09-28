import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Main = ({ token, user }) => {
  if (!token) {
  	
    return <Redirect to="/login" />;
  }
  console.log(JSON.parse(user));
  return <div> You are logged in.</div>;
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user
});

export default connect(mapStateToProps)(Main);