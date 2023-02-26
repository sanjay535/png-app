import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TypeIt from "typeit-react";
import styles from "@/styles/Home.module.css";

const InitSection = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "50vh", marginBottom: "50vh" }}
    >
      <h1>
        <TypeIt> One Stop Solution For All Of Your Digital Needs</TypeIt>
      </h1>
      <div
        style={{
          zIndex: 2,
          // borderRadius: "80px",
          // background: "white",
          height: "80px",
          margin: "auto",
          color: "white",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        className={styles.move_up_down}
      >
        <span
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.scroll({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          {" "}
          SCROLL DOWN <br />
          <b>
            <ArrowDownwardIcon
              style={{ height: "2rem", fontWeight: "bolder" }}
            />
          </b>
        </span>
      </div>
    </div>
  );
};
export default InitSection;
