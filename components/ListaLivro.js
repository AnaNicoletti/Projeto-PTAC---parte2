import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'
import api from '../pages/api/api'

export default function ListaLivro(props) {
  async function DeleteLivro(){
    let deleta = confirm("Quer mesmo deletar?") 
      if (deleta == true) {
            const response = await api.delete("/deletar_livro/" + props.id)
            console.log(response);
            alert("Deletado!") 
      } else {
            alert("Ocorreu um erro, tente novamente!")
        }
  }
  return (
    <div>
    <div className={styles.lista}>
        <div className={styles.conteudo}>{props.nome}<br/>{props.editora} <br/>{props.preco} <br/>{props.datapublicacao} 
         </div>
      <button className={styles.delete} onClick={DeleteLivro}>Deletar</button>
    </div>
      </div>
  )
}