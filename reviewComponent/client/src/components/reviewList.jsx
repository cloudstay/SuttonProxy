import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx';

const ReviewList = (props) => (
    <div>
        {props.currentReviews.map((review) => (
            <ReviewListEntry key={Math.random()} review={review} search={props.search} isActive={props.isActive}/>
        ))}
    </div>
)

export default ReviewList;