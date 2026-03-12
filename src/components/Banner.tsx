import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image 
                src="/img/cover.png" 
                alt="Banner Image" 
                fill={true} 
                priority
                className={styles.bannerImg}
            />
            
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <p>สัมผัสประสบการณ์การจัดงานที่เหนือระดับ</p>
            </div>
        </div>
    );
}