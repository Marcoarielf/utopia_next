import Head from 'next/head'
import Nav from '../components/nav/nav'
import TecnologiasExponenciales from '../components/tecExponenciales/index'
import Header from '../components/header'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Header />
      <TecnologiasExponenciales />
    </div>
  )
}
