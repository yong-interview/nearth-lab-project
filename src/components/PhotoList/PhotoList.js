import React from 'react'
import './PhotoList.scss';
import PhotoItem from '../PhotoItem';
import Pagination from '../Pagination';
import ListSkeleton from '../ListSkeleton';

const PhotoList = ({ photos, meta, loading, handleModal }) => {
  const { total, per, currentPage, maxPage } = meta;
  
  const photoList = photos.map(
    (photo) => {
      const { id, photoUrl, completed, labels } = photo.toJS();
      const completedLocal = localStorage.getItem(`${id} completed`) === null
        ? completed
        : localStorage.getItem(`${id} completed`) === 'true' ? true : false
      const labelCount = labels.length;
      const fileName = photoUrl.split('/')[3];
      
      return (
        <PhotoItem
          key={id}
          id={id}
          fileName={fileName}
          photoUrl={photoUrl}
          completed={completedLocal}
          labelCount={labelCount}
          handleModal={handleModal}
        />
      )
    }
  )

  return (
    <div className='photo-list'>
      <p className='title'>전체 {total}개</p>
      <div className='photos'>
        {loading ? <ListSkeleton /> : photoList}
      </div>
      <div className="bottom">
        <Pagination 
          per={per}
          currentPage={currentPage}
          total={total}
          maxPage={maxPage}
        /> 
      </div>
    </div>
  )

}

export default PhotoList;