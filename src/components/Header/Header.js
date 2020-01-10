import React from 'react'
import './Header.scss';
import titleImage from '../../images/title.png';

const Header = ({ types, handleChange }) => (
    <header className='header'>
      <p className="title">
        <img src={titleImage} alt="group" className="title-image" />
        <span>라벨 종류 선택</span>
      </p>
      <div className="label-list">
        <label>
          <input type="checkbox" name={types[0]} value='type1' onChange={handleChange} />
          단순 손상
        </label>
        <label>
          <input type="checkbox" name={types[1]} value='type2' onChange={handleChange} />
          페인트 벗겨짐
        </label>
        <label>
          <input type="checkbox" name={types[2]} value='type3' onChange={handleChange} />
          긴급 수리 필요
        </label>
        <label>
          <input type="checkbox" name={types[3]} value='type4' onChange={handleChange} />
          전문가 의뢰 필요
        </label>
      </div>
    </header>
);

export default Header;