import { createElement } from 'react';

var SampleComponent = function (props) {
    var text = props.text;
    // const [value] = React.useState("abc");
    return (createElement("div", { style: { backgroundColor: "black", color: "white" } },
        "32 ",
        text));
};

export default SampleComponent;
