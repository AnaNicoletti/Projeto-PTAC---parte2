import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import {useRouter} from 'next/router'
import api from '../pages/api/api'
import axios from 'axios'

export default function Autor() {
  const [formulario , setFormulario] = useState ({})
  function handleInputChange(e) {
    const {id, value} = e.target;
    setFormulario({ ...formulario, [id]: value });
  }
  console.log(formulario);
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      nome: formulario.nome,
      sobrenome: formulario.sobrenome,
      data_nascimento: formulario.data,
    }
    console.log(data)
    const response = await axios.post('https://PTAS-Projeto.ananicoletti.repl.co/autores', data)
    console.log(response);
    router.push('/autores')
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ACN Library</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <div className={styles.autor}>
          <div className={styles.img3}>
          <img className={styles.img3}
        src="/images/autor1.jpg"
        height={700}
        width={680}
        alt="Imagem Ilustrativa"
      />
            </div>

          <form onSubmit={handleSubmit} className={styles.todo} action="/send-data-here" method="post">
            
          <div className={styles.title}>
            Cadastre um novo Autor
          </div>
            
          <div className={styles.nome}>
            <label for="nome">Nome:</label><br/>
            <input className={styles.caixa} type="text" placeholder="Digite o nome do autor" id="nome" onChange={handleInputChange} value = {formulario.nome || ''} />
          </div>
    
          <div className={styles.sobrenome}>
            <label for="sobrenome">Sobrenome:</label> <br/>
            <input className={styles.caixa} type="text" placeholder="Digite o sobrenome do autor" id="sobrenome" onChange={handleInputChange} value = {formulario.sobrenome || ''} />
          </div>
    
          <div className={styles.nascimento}>
            <label for="date">Data de Nascimento:</label> <br/>
            <input className={styles.caixa} type="date" id="data" onChange={handleInputChange} value = {formulario.data || ''} />
          </div>
    
          <div className={styles.enviar}>
            <button className={styles.botao} type="submit">Enviar</button>
          </div>
      </form>
        </div>
      </main>

      <footer className={styles.footer}>
          Todos os direitos reservados
      </footer>
    </div>
  )
}