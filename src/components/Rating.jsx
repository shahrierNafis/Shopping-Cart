import propTypes from "prop-types";
import { useEffect } from "react";
function Rating({ rating }) {
  useEffect(() => {});
  // floor the rating
  let flooredRating = Math.floor(rating.rate);
  const ratingText = [];
  // Add filled starts
  while (flooredRating) {
    ratingText.push(<span className="fa fa-star checked"></span>);
    flooredRating--;
  }
  // Add empty starts
  while (5 - ratingText.length) {
    ratingText.push(<span className="fa fa-star"></span>);
  }
  // return the rating
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {ratingText}({rating.count})
    </>
  );
}
Rating.propTypes = {
  rating: propTypes.object.isRequired,
};
export default Rating;
