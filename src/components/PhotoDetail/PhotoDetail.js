import React from 'react';
import './PhotoDetail.scss';
import moment from 'moment';
import wrench from '../../images/wrench-black.png';
import done from '../../images/done-btn.png'
import imperfect from '../../images/imperfect-btn.png'

const PhotoDetail = ({ fileName, photoUrl, photoTakenAt, createdAt, completed, labels = [], handleImperfect, handleCompleted, changeButton }) =>  {
  const labelList = labels.map(
    (label, index) => {
      const { id, typeId, description } = label;
      const labelTypes = ['단순손상', '페인트 벗겨짐', '긴급 수리 필요', '전문가 의뢰 필요'];
      return (
        <div className='label' key={id}>
          <p className='count'>라벨 #{index+1}</p>
          <p><span className="label-type">유형</span> <span>{labelTypes[typeId-1]}</span></p>
          <p><span className="label-type">설명</span> <span>{description}</span></p>
        </div>
      )
    }
  );

  const onClick = () => {
    if(completed === 'true') {
      handleImperfect();
    } else {
      handleCompleted();
    }
  }

  return (
    <div className='photo-detail'>
      <p className="title">파일 상세 정보</p>
      <div className='detail-column'>
        <div className="column-1">
          <img src={photoUrl} alt={photoUrl} />
          <p><span className="photo-label">파일명</span><span>{fileName}</span></p>
          <p><span className="photo-label">촬영시간</span><span>{moment(photoTakenAt).format('YYYY.M.DD. 오전 hh:mm:ss ')}</span></p>
          <p><span className="photo-label">등록일</span><span>{moment(createdAt).format('YYYY.M.DD.')}</span></p>
        </div>
        <div className="column-2">
          <p className="label-title"><img src={wrench} alt="benth" /> 라벨 정보 </p>
          {labelList.length !== 0 ? labelList : '등록된 라벨이 없습니다.'}
        </div>
      </div>
      <div className="completed" onClick={onClick}>
        {completed === 'true' && <img src={done} alt="done" onClick={changeButton} />}
        {completed === 'false' && <img src={imperfect} alt="imperfect" onClick={changeButton} />}
      </div>
    </div>
  )
};

export default PhotoDetail;