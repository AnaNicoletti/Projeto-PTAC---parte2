import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ACN Library</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Menu/>

      <main className={styles.main}>
        <div className={styles.meio}>
          <Image className={styles.img2}
        src="/images/principal.jpg"
        height={800}
        width={1500}
        alt="Imagem Ilustrativa"
      />
        </div>
        <div className={styles.nada}>
          <div className={styles.escrita}>
          <h2>Seja muito bem vindo(a) a ACN Library!</h2>
        <h4>Aqui você encontra diversas opções de livros e o melhor de tudo é que é de graça!</h4>
          <h4>Confira logo abaixo as nossa categorias de livros:</h4>
            </div>
        </div>
        
        <div className={styles.oferece1}>
          <div className={styles.oferece2}>
              <h1>O que a ACN Library oferece?</h1>
          </div>
        </div>
        
        <div>
          <div className={styles.bloco1}>
            <div className={styles.classificacao}>
              <h1>Romance</h1>
              <div className={styles.contexto}>
                <p>O amor ésta no ar,<br/> e nas palavras!</p>
              </div>
            </div>
          </div>
          <div className={styles.bloco2}>
            <div className={styles.classificacao}>
              <h1>Drama</h1>
              <div className={styles.contexto}>
                <p>Nem tudo é um<br/> conto de fadas!</p>
              </div>
            </div>
          </div>
          <div className={styles.bloco3}>
            <div className={styles.classificacao}>
              <h1>Ciência</h1>
              <div className={styles.contexto}>
                <p>A sabedoria está<br/> onde você procura!</p>
              </div>
            </div>
          </div>
          <div className={styles.bloco4}>
            <div className={styles.classificacao}>
              <h1>Comédia</h1>
              <div className={styles.contexto}>
                <p>A principal arte da <br/>vida é simples: rir!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
          Todos os direitos reservados
      </footer>
    </div>
  )
}
