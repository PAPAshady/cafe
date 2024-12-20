import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

export default function RatingStars({ rating }) {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check for half-star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <>
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <IoStar key={`full-${index}`} />
        ))}
      {hasHalfStar && <IoStarHalf key="half" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <IoStarOutline key={`empty-${index}`} />
        ))}
    </>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};
