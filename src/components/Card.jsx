import { useState } from "react";
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
  return (
    <div className={`card ${style.cardWrapper} ${style.cardEffect}`}>
      <img
        src={imgPath + media.poster_path}
        className={`card-img-top ${style.cardImg}`}
        alt={media.title}
      />
      <div className={`card-body ${style.cardInner}`}>
        <h5 className="card-title">{media.title}</h5>
        <p className="card-text">{media.overview}</p>
        <div className={style.flag}>
          <img src={`/img/flags/${flag}`} alt={flag} className="img-fluid" />
        </div>
        <div>{media.vote_average}</div>
      </div>
    </div>
  );
}

export default Card;
