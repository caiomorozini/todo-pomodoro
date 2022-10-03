import React from "react";

class Button extends React.Component {
  render() {
    const backgroundColor = 'blue';
    return <button style={{
      backgroundColor,
    }}>Click me</button>;
  }
}

export default Button;