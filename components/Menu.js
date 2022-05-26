import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'

export default function Menu() {
  return (
    <>
        <div className={styles.logo}>
          <Link href="/">
          <Image className={styles.img}
        src="/images/logo.png"
        height={65}
        width={150}
        alt="Imagem Ilustrativa"
      />
            </Link>

          <Link href="/autor">
          <a className={styles.menuItem}>Cadastrar Autor</a>
        </Link>
        <Link href="/livro">
          <a className={styles.menuItem}>Cadastrar Livro</a>
        </Link>
        <Link href="/autores">
          <a className={styles.menuItem}>Autores</a>
        </Link>
        <Link href="/livros">
          <a className={styles.menuItem}>Livros</a>
        </Link>
          
      </div>

      <div className={styles.categoria}>

        </div>

    </>
  )
}