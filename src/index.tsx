import * as React from "react";

interface IProps {
  text: string;
}

const SampleComponent = (props: IProps) => {
  const { text } = props;
  // const [value] = React.useState("abc");
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>32 {text}</div>
  );
};

export default SampleComponent;
