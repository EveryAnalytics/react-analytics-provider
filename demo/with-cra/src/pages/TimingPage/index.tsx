import {googleAnalytics} from '@every-analytics/react-analytics-provider';
import {toaster} from '../../utils/toaster';

const TimingPage = () => {
  return (
    <div>
      <button onClick={greeting}>Test Timing</button>
      <pre>
        {`
          function greeting(): void {
            setTimeout(() => {
              const startMark = window.performance.now();
              console.log('Hello GA World');

              const endMark = window.performance.now();
              googleAnalytics.timing({
                name: 'greeting',
                value: Math.round(endMark - startMark),
              });
            }, 2000);
          }
        `}
      </pre>
    </div>
  );
};

export default TimingPage;

function greeting(): void {
  const startMark = window.performance.now();
  setTimeout(() => {
    console.log('Hello GA World');

    const endMark = window.performance.now();
    googleAnalytics.timing({
      name: 'greeting',
      value: Math.round(endMark - startMark),
    });

    toaster.timing('greeting', Math.round(endMark - startMark));
  }, 2000);
}
