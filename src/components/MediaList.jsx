import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Card from "./Card";
export default function MediaList({ title, list }) {
  const myRef = useRef(null);

  function scrollLft() {
    myRef.current.scrollBy({
      left: -1200,
      behavior: "smooth",
    });
  }
  function scrollRgt() {
    myRef.current.scrollBy({
      left: 1200,
      behavior: "smooth",
    });
  }
  return (
    <section className="container py-4 my-4  position-relative">
      <h2>{title}</h2>
      {/* <div className="row gy-4">
        {list.map((media) => (
          <div className="col-12 col-md-4 col-lg-3" key={media.id}>
            <Card media={media} />
          </div>
        ))}
      </div> */}
      <div className="row py-4 flex-nowrap overflow-x-scroll nobar" ref={myRef}>
        {list.map((media) => (
          <div className="col-12 col-md-4 col-lg-3" key={media.id}>
            <Card media={media} />
          </div>
        ))}
      </div>
      <div
        className="position-absolute top-50 start-0 bg-black z-3"
        onClick={scrollLft}
      >
        <FaAngleLeft />
      </div>
      <div
        className="position-absolute top-50 end-0 bg-black z-3"
        onClick={scrollRgt}
      >
        <FaAngleRight />
      </div>
    </section>
  );
}
