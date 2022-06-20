import Head from 'next/head'
import api from '../pages/api/api'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function ListaAutor(props) {
  async function DeleteAutor(){
    let deletar = confirm("Quer mesmo deletar?") 
      if (deletar == true) {
            const response = await api.delete("/autores/" + props.id)
            console.log(response);
            alert("Deletado!")
      } else {
            alert("Ocorreu um erro, tente novamente!")
        }
  }
  return (
    <div>
    <div className={styles.lista1}>
        <div className={styles.conteudo}>
          <Link href={`/autor/${props.id}`}><a>{props.nome} {props.sobrenome}</a></Link>
          <br/>{props.data_nascimento}
          </div>
      <button className={styles.delete} onClick={DeleteAutor}>Deletar</button>
    </div>
    </div>
  )
}