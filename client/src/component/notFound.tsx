// import notFoundImage from "../assets/notFoundImage.jpg";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="notFoundContainer">
      {/* <img className="notFound__img" src={notFoundImage} /> */}
      <div className="notFound__text">
        <h2 className="notFound__title">Are you lost in mountains?</h2>
        <p className="notFound__p">
          Follow me to the{" "}
          <a
            className="notFound__a"
            onClick={() => {
              navigate("/");
            }}
          >
            Fakelandia
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
