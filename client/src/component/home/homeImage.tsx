import image from "../../assets/homeImage.jpg";

const HomeImage: React.FC = () => (
  <div className="homeImage">
    <img src={image} className="homeImage__img" />
    <p className="fakelandia">Welcome to Fakelandia.</p>
  </div>
);

export default HomeImage;
