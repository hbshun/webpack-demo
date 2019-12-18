import React from 'react';
import ReactDOM from "react-dom";

class R extends React.Component{
    render() {
        return <h2>Hello React1</h2>
    }
}

ReactDOM.render(
    <R />,
    document.getElementById('react-root'),
);
