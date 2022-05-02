import styles from './public-stats.module.scss';

/* eslint-disable-next-line */
export interface PublicStatsProps {}

export function PublicStats(props: PublicStatsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PublicStats!</h1>
    </div>
  );
}

export default PublicStats;
