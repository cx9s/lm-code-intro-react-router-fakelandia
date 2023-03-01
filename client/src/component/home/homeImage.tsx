import image from "../../assets/homeImage.jpg";

const HomeImage: React.FC = () => (
  <div className="homeImage">
    <img src={image} width="100%" height="400px" />
    <p className="fakelandia">Welcome to Fakelandia.</p>
  </div>
);

export default HomeImage;
