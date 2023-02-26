import { Divider } from "@mui/material";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="appHeader">
      <div style={{ display: "flex" }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}logo.png`}
          width="100"
          height="50"
          alt="logo"
          className="logo"
        />
        <Divider
          orientation="vertical"
          variant="middle"
          style={{ color: "red" }}
          flexItem
        />
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            padding: "5px",
            fontWeight: "bolder",
            color: "#652D90",
          }}
        >
          PNG SOFTWARE TECHNOLOGIES
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          style={{ color: "red" }}
          flexItem
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          fontWeight: "bolder",
          marginLeft: "auto",
          // width: "100%",
          color: "#652D90",
        }}
      >
        <div
          className="navItem"
          style={{
            marginRight: "1rem",
          }}
        >
          <a href="#services">SERVICES</a>
        </div>
        {/* <Divider
          orientation="vertical"
          variant="middle"
          style={{ color: "red" }}
          flexItem
        /> */}
        <div
          className="navItem"
          style={{
            marginRight: "1rem",
          }}
        >
          <a href="#aboutus">ABOUT US</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
