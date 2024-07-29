import React from 'react';
import Image from 'next/image';
import background from "../../../public/images/background.jpg";
import styles from "./style.module.css"

export default function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image
            alt="background image"
            src={background}
            placeholder="blur"
            quality={100}
            priority={true}
            fill
            sizes="100dvw"
            style={{
              objectFit: 'cover',
            }}
          />
      </div>
    </div>
  );
}
