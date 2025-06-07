import styles from './HeaderList.module.scss';

function HeaderList() {
  const items = ['GameHive', 'Coo', 'Loliware', 'Garden Party'];

  return (
    <>
      <ul className={styles.headerList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default HeaderList;
