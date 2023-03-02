import image from "../../assets/homeImage.jpg";

const HomeImage: React.FC = () => (
  <div className="homeImage">
    <img src={image} />
    <p className="fakelandia">Welcome to Fakelandia.</p>
  </div>
);

export default HomeImage;
