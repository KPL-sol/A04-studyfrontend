import Banner from '@/components/Banner'
import Card from '@/components/Card'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      {/* Banner */}
      <Banner />

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          padding: '40px 20px'
        }}
      >
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
        />

        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
        />

        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
        />
      </div>

    </main>
  )
}