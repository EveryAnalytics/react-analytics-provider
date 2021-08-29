import {NextPage} from 'next';
import {useRouter} from 'next/dist/client/router';
import styles from './index.module.css';

const ColorPage: NextPage = () => {
  const router = useRouter();
  const {color} = router.query;

  return (
    <>
      <h1>{color} fruites</h1>
      <ul className={styles.container}>
        {getProductsByColor(color).map(_color => (
          <li key={_color}>{_color}</li>
        ))}
      </ul>
    </>
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
