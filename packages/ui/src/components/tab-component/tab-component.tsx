import type React from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['프로젝트 정보', '출시', '성과', '팀 소개'];

  return (
    <div className={styles.tabContainer}>
      {/* 탭 헤더 */}
      <div className={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <div className={styles.tabContent}>
        {/* 이미지 슬라이더 */}
        <div className={styles.imageSlider}>
          <button className={`${styles.sliderButton} ${styles.left}`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className={styles.imagePlaceholder}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <button className={`${styles.sliderButton} ${styles.right}`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 페이지 인디케이터 */}
        <div className={styles.pageIndicator}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`${styles.indicator} ${i === 0 ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
