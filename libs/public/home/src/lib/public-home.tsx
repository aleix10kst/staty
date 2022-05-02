import styles from './public-home.module.scss';

/* eslint-disable-next-line */
export interface PublicHomeProps {}

export function PublicHome(props: PublicHomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PublicHome!</h1>
    </div>
  );
}

export default PublicHome;
