import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./returnButton.css";

const ReturnButton = () => {
  return (
    <button className="return-button" aria-label="Scroll to top">
      <Link to="/">
        <FaArrowLeft />
      </Link>
    </button>
  );
};

export default ReturnButton;
