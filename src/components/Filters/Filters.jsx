import React from 'react';
import { Tabs, Tab } from '@mui/material';
import styles from './Filters.module.css';

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        indicatorColor="primary"
        className={styles.tabs}
        TabIndicatorProps={{
          style: { backgroundColor: 'var(--color-primary)' },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab className={styles.tab} label={ele.label} key={ele.key} />
        ))}
      </Tabs>
    </div>
  );
}
export default Filters;