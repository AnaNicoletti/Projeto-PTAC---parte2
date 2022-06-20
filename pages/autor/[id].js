import Menu from '/components/Menu.js'
import styles from '/styles/Home.module.css'
import Image from 'next/image'
import axios from 'axios'

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await axios.get(`https://PTAS-Projeto.ananicoletti.repl.co/autores/${id}`)
  const post = await response.data
  return {
    props: {
      post
    }
  }
}

const Autorid = ({ post }) => {
  return (
    <>
      <Menu />
      <Image className={styles.imgAutor}
        src="/images/principal.jpg"
        height={800}
        width={1500}
        alt="Imagem Ilustrativa"
      />
      <div className={styles.body}><br/>
        <div className={styles.form}>Id do autor(a): {post.id}
        <br/>
        Nome: {post.nome} {post.sobrenome}
        <br/>
        Data de Nascimento: {post.data_nascimento}
          
        </div>
      </div>
        <footer className={styles.footer1}>
          Todos os direitos reservados
      </footer>
    </>
  )
}
export default Autorid