import { useState, createElement, Fragment } from 'react';

var SampleComponent = function (props) {
    var text = props.text;
    var value = useState("Ready to use React Hook!")[0];
    return (createElement(Fragment, null,
        createElement("div", null, value),
        createElement("div", { style: { backgroundColor: "black", color: "white" } }, text)));
};

export default SampleComponent;
