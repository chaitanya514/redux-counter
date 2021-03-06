import React from "react"
import { connect } from "react-redux"
import { INCREMENT, DECREMENT, increment, decrement, reset } from "./actions"

class Counter extends React.Component {
    // state = { count: 0 }; // remove this

    increment = (props) => {
        this.props.increment()
    };

    decrement = () => {
        /*
        // Also remove this
        this.setState({
          count: this.state.count - 1
        });
        */
        this.props.decrement()
    };

    reset = () => {
        this.props.reset()
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{
                        // Replace state:
                        //// this.state.count
                        // With props:
                        this.props.count
                    }</span>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapsDispatchToProps = {
    increment,
    decrement,
    reset

}




export default connect(mapStateToProps)(Counter)