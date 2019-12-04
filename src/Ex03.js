import React, { Component } from "react";
//import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import "./App.css";
import { Drawer, List, ListItem } from "material-ui";

//injectTapEventPlugin();

class Ex03 extends Component {
  constructor() {
    super();

    this.state = {
      drawerOpened: false
    };
  }

  onLeftIconButtonClickHandler() {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="My App"
            onLeftIconButtonClick={() => this.onLeftIconButtonClickHandler()}
          />
          <Drawer
            open={this.state.drawerOpened}
            docked={false}
            onRequestChange={() => this.onLeftIconButtonClickHandler()}
          >
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Ex03;
