import {AnalyticsPageView, AnalyticsClick} from '@every-analytics/react-analytics-provider';
import {useRouter} from 'next/router';
import styles from './index.module.css';

const ColorPage = () => {
  const router = useRouter();
  const {color} = router.query;

  return (
    <AnalyticsPageView params={{color}}>
      <h1>{color} fruites</h1>
      <ul className={styles.container}>
        {getProductsByColor(color).map(product => {
          return (
            <AnalyticsClick key={product} name="color" params={{product}}>
              <li key={product}>{product}</li>
            </AnalyticsClick>
          );
        })}
      </ul>
    </AnalyticsPageView>
  );
};

export default ColorPage;

function getProductsByColor(color?: unknown) {
  if (typeof color === 'string')
    switch (color) {
      case 'red':
        return ['Strawberry', 'Tomato'];
      case 'yellow':
        return ['Banana', 'Lemon'];
      default:
        return [];
    }
  return [];
}
