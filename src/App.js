import React, {Component} from 'react';
import './App.css';
import MainPage from "./components/mainPage";
import EditPage from "./components/editPage";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { pageName, pageInfo } = this.props
    return (
          <div className="App">
            {pageName === "main" ? 
              <MainPage />:
              <EditPage info = {pageInfo} />
            }
          </div>
    );
  }  
}

const mapStateToProps = state => ({
  pageName: state.switchPageReducer.name,
  pageInfo: state.switchPageReducer.info
})

export default connect(mapStateToProps)(App);
