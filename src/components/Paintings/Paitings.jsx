import PropTypes from 'prop-types';
import defaultImage from '../Images/Paitings/painting_template.jpg';
import styles from './Paintings.module.css'

export default function Painting({
  imageUrl = defaultImage,
  title,
  author = 'unknown',
  profileUrl,
  price,
  quantity,
}) {
  return (
    <div className={styles.container}>
    <img className={styles.image} src={imageUrl} alt={title} width="300" />
    <h2 className={styles.title}>{title}</h2>

    <p className={styles.author}>
      Author: <a href={profileUrl}>{author}</a>
    </p>

    <p className={styles.price}>Price: {price} credits</p>

    <p className={styles.availability}>
      Availability: {quantity < 10 ? 'Ending soon' : 'is enough'}
    </p>
    <button type="button">Add to Cart</button>
  </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profileUrl: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
