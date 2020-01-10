import React from 'react'
import { Link } from 'react-router-dom';
import './PhotoItem.scss';
import done from '../../images/done-label.png';
import imperfect from '../../images/imperfect-label.png';
import wrench from '../../images/wrench-blue.png';

const PhotoItem = ({ id, fileName, photoUrl, labelCount, completed }) => {
  return (
    <div className='photo-item'>
      <Link to={`/photo/${id}`}>
        <div className='item-header'>
          <img className='item-image' 
            src={photoUrl}
            alt={fileName}
          />
          <p className='completed'>
            {completed ? 
              <img src = {done} alt="done" />
            : <img src = {imperfect} alt="imperfect" />
            }
          </p>
        </div>
        <div className='item-body'>
          <p className="filename">{fileName}</p>
          <p className="label"><img src={wrench} alt="wrench" />라벨 {labelCount}개</p>
        </div>
      </Link>
    </div>
  )
}

export default PhotoItem;