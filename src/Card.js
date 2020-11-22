import {Component} from "react";
import {connect} from "react-redux";
import {counterSlice} from "./counter";

class _Card extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.dispatch(counterSlice.actions.click(this.props.id))
    }

    render() {
        return (
            <div onClick={this.onClick}>Card No.{this.props.id}! clicked {this.props.count}</div>
        )
    }
}

export const Card = connect(
    (reduxState, reactProps) => {
        return {
            count: reduxState.counter[reactProps.id] || 0,
        }
    },
    dispatch => {
        return {
            dispatch: dispatch,
        }
    }
)(_Card)