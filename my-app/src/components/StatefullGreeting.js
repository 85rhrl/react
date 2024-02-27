import React from "react";

class StatefullGreeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name} {this.props.greeting}</h1>
    }
}

export default StatefullGreeting;