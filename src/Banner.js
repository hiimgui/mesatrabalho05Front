import img from "../src/Untitled.png";
import "../src/Banner.css";
export const Banner = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <button>Clique aqui</button>
      <img src={img} alt="Banner"></img>
    </>
  );
};

export default Banner;
