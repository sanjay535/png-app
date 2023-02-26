import { Typography } from "@mui/material";
import { style } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const Message: React.FC<any> = ({ data }: any) => {
  if (data.align === "left") {
    return (
      <div data-aos={`fade-${data.align}`} className={styles.messageCard}>
        <div style={{ display: "flex" }}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image}`}
            alt="abc"
            width="300"
            height="300"
          />
          <div
            style={{
              width: "calc(90vw - 500px)",
              // textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            <figure>
              {" "}
              <blockquote>
                <q>{data.message}</q>
              </blockquote>
              <figcaption style={{ textAlign: "right" }}>
                — {data.name}, <cite>{data.position}</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
  if (data.align === "right") {
    return (
      <div data-aos={`fade-${data.align}`} className={styles.messageCard}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "calc(90vw - 500px)",
              // textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            <figure>
              {" "}
              <blockquote>
                <q>{data.message}</q>
              </blockquote>
              <figcaption style={{ textAlign: "left" }}>
                — {data.name}, <cite>{data.position}</cite>
              </figcaption>
            </figure>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image}`}
            alt="abc"
            width="300"
            height="300"
          />
        </div>
      </div>
    );
  }
  return <></>;
};
export default Message;
