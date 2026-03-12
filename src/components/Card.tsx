import Image from 'next/image'
import styles from './card.module.css'

interface Props {
  venueName: string
  imgSrc: string
}

export default function Card({ venueName, imgSrc }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={imgSrc}
          alt={venueName}
          width={300}
          height={200}
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardContent}>
        <h3>{venueName}</h3>
      </div>
    </div>
  )
}