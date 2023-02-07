import classes from './Pagination.module.css';

import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';

const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <img src={leftArrow} alt='left arrow' style={{ marginRight: 14 }} />
      <div style={{ background: '#2D3B4E', borderRadius: '4px 0px 0px 4px', color: '#fff' }}>
        1
      </div>
      <div style={{ borderRadius: '0' }}>2</div>
      <div style={{ borderRadius: '0px 4px 4px 0px' }}>3</div>
      <img src={rightArrow} alt='right arrow' style={{ marginLeft: 14 }} />
    </div>
  );
};

export default Pagination;
