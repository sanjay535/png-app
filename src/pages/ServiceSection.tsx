import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styles from "@/styles/Home.module.css";

const items = [
  {
    name: "Digital Marketing",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Web Development",
    description: "Hello World!",
  },
];
const Item = ({ item }: any) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          background: "white",
          color: "rgb(101, 45, 144, 0.9)",
          width: "30vw",
          cursor: "pointer",
          borderRadius: "20px",
          height: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{item.name}</h2>
        <p>{item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </div>
      <div
        style={{
          background: "white",
          color: "rgb(101, 45, 144, 0.9)",
          width: "30vw",
          cursor: "pointer",
          borderRadius: "20px",
          height: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{item.name}</h2>
        <p>{item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </div>
      <div
        style={{
          background: "white",
          color: "rgb(101, 45, 144, 0.9)",
          width: "30vw",
          cursor: "pointer",
          borderRadius: "20px",
          height: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{item.name}</h2>
        <p>{item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <Carousel
      autoPlay
      cycleNavigation
      animation="slide"
      duration={300}
      height={300}
      className={styles.carousel}
      indicators={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
export default Services;
