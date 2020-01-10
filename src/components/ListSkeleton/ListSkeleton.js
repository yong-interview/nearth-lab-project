import React, { Fragment } from 'react'
import './ListSkeleton.scss';


const SkeletonItem = () => {
  return (
    <div className='skeleon-item'>
        <div className='item-image' />
        <div className="item-content" />
    </div>
  )
}

const ListSkeleton = () => {
  return (
    <Fragment>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </Fragment>
  )

}

export default ListSkeleton;