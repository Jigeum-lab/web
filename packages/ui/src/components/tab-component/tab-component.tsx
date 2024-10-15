import clax from 'clsx';
import type React from 'react';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

interface Props
  extends Omit<
    React.HTMLAttributes<HTMLUListElement>,
    'onChange' | 'children'
  > {
  tabs: { name: string; content: React.ReactNode }[];
  index?: number;
  onChange?: (index: number) => void;
}
export const TabComponent: React.FC<Props> = ({
  tabs,
  index = 0,
  onChange,
  className,
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState(index);

  useEffect(() => {
    setActiveTab(index);
  }, [index]);

  return (
    <div className={styles.tabContainer}>
      {/* 탭 헤더 */}
      <ul className={clax(styles.tabHeader, className)} {...rest}>
        {tabs.map(({ name }, index) => (
          <li
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
            onClick={() => {
              setActiveTab(index);
              onChange?.(index);
            }}
          >
            {name}
          </li>
        ))}
      </ul>

      {tabs[activeTab].content}
    </div>
  );
};
