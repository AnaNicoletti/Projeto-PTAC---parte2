import Head from 'next/head'
import api from '../pages/api/api'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function ListaAutor(props) {
  async function DeleteAutor(){
    let deletar = confirm("Quer mesmo deletar?") 
      if (deletar == true) {
            const response = await api.delete("/deletar/" + props.id)
            console.log(response);
            alert("Deletado!")
      } else {
            alert("Ocorreu um erro, tente novamente!")
        }
  }
  return (
    <div>
    <div className={styles.lista1}>
        <div className={styles.conteudo}>{props.nome} {props.sobrenome} <br/>{props.data_de_nascimento}
          </div>
      <button className={styles.delete} onClick={DeleteAutor}>Deletar</button>
    </div>
    </div>
  )
}