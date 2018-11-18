import {Component} from "react";
import React from "react";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {changeFirstName, changeSecondName} from "../store/actions";

class App extends Component {
    render() {
        const {firstName, secondName, changeFirstName, changeSecondName} = this.props;
        return (
            <div>
                <div>
                    <input
                        type='text'
                        value={firstName}
                        placeholder='first name'
                        onChange={(event) => {
                            changeFirstName(event.target.value)
                        }}
                    />
                </div>
                <div>
                    <input type='text'
                           value={secondName}
                           placeholder='second name'
                           onChange={(event) => {
                               changeSecondName(event.target.value)
                           }}
                    />
                </div>
                <div>{`${firstName} ${secondName}`}</div>
            </div>
        );
    }
}


const putStateToProps = (state) => {
    console.log('Map state: ', state);
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

const saveActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
};


export default connect(putStateToProps, saveActionsToProps)(App);