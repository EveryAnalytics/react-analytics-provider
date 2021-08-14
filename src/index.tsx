import * as React from 'react';

interface IProps {
  text: string;
}

const SampleComponent = (props: IProps) => {
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
<<<<<<< HEAD
export * from "./components/AnalyticsProvider";
export * from "./utils/googleAnalytics";
=======
export * from './components/AnalyticsProvider';
>>>>>>> b5f1030bf167d6e0e10c185fbc61bf5800e59213
