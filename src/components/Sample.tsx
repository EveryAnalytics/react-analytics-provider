import * as React from 'react';

interface Props {
  text: string;
}

const SampleComponent = (props: Props) => {
  const {text} = props;
  const [value] = React.useState('Ready to use React Hook!');
  return (
    <>
      <div style={{backgroundColor: 'black', color: 'white'}}>
        {text}
        {value}
      </div>
    </>
  );
};

export default SampleComponent;
