import React, { Component } from "react";

class Ex01 extends Component {
  constructor() {
    super();

    this.state = {
      contador: 0
    };
  }

  somarContador() {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  render() {
    return (
      <div>
        <p>A soma é {this.state.contador}</p>
        <button onClick={e => this.somarContador(e)}>Somar 1</button>
      </div>
    );
  }
}

export default Ex01;
