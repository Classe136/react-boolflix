import { FaStar, FaRegStar } from "react-icons/fa";
import style from "./Card.module.css";

const imgPath = import.meta.env.VITE_iMG_PATH;
/**
 * Renders a card component with an image, title, badge, and description.
 *
 * @param {string} image - The URL of the image to display at the top of the card. Defaults to a placeholder image.
 * @param {string} title - The title of the card.
 * @param {ReactNode} badge - A badge element to display within the card.
 * @param {string} description - The description text of the card. Defaults to "Descrizione non presente".
 *
 * @returns {JSX.Element} A JSX element representing the card.
 */
const flags = ["de", "en", "es", "it", "fr"];
function Card({ media }) {
  const flag = flags.includes(media.original_language)
    ? media.original_language + ".png"
    : "placeholder.jpg";
  const drawStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      //voto 1,5
      const star =
        i <= Math.ceil(media.vote_average / 2) ? (
          <FaStar key={i} />
        ) : (
          <FaRegStar key={i} />
        );
      stars.push(star);
    }
    return stars;
  };
  return (
    <div className={`card ${style.cardWrapper} ${style.cardEffect}`}>
      <img
        src={imgPath + media.poster_path}
        className={`card-img-top ${style.cardImg}`}
        alt={media.title || media.name}
      />
      <div className={`card-body ${style.cardInner}`}>
        <h5 className="card-title">{media.title || media.name}</h5>
        <p className="card-text">
          {media.overview.length > 400
            ? media.overview.substring(0, 300) + "..."
            : media.overview}
        </p>
        <div className={style.flag}>
          <img
            src={`/img/flags/${flag}`}
            alt={media.original_language}
            className="img-fluid"
          />
        </div>
        <div className={style.cardStar}>{drawStars()}</div>
      </div>
    </div>
  );
}

export default Card;
