import React from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends React.Component{
  render() {
    return (
      <p>
        Hello1121s, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
};

//setInterval(function() {
  ReactDom.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
// }, 100);