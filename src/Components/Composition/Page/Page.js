import React from 'react';
import TopSide from '../TopSide/TopSide';
import Middle from '../Middle';
import Bottom from '../Bottom';

import styles from './style.module.scss';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <TopSide/>
        <Middle/>
        <Bottom />
        </div>
    </div>
    
  )
}

export default Page;