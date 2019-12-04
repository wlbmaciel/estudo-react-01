import React, { Component } from "react";

class Ex02 extends Component {
  constructor() {
    super();

    this.state = {
      valorBotao: "OK"
    };
  }

  mouseOverHandler() {
    this.setState({
      valorBotao: "Cancelar"
    });
  }

  mouseOutHandler() {}

  render() {
    console.log(this.props);

    return (
      <form>
        <input type="text" placeholder={this.props.placeholderDoInput} />
        <button
          onMouseOut={() => this.mouseOutHandler()}
          onMouseOver={() => this.mouseOverHandler()}
        >
          {this.state.valorBotao}
        </button>
      </form>
    );
  }
}

export default Ex02;
