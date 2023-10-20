import { useState } from 'react'
import Projetos from '../projetos/Projetos'
import './Main.css'
type ProjetosType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
function Portfolio() {
  const [texto,setTexto]=useState("")

  const projetos:ProjetosType[] = [
      {
          id:1,
          titulo:'NVC',
          descricao:"Nesse projeto participamos de treinos e competições ao decorrer do ano. Atualmente estamos participando da Conesul, campeonato estadual do MS o qual aguardamos os resultados classificatórios para as semifinais.",
          imagem:'/nvc.jpeg'
      },
      {
          id:2,
          titulo:'Winner Ballet',
          descricao:'Dou aula de Ballet na Winner School para crianças do infantil 3 e infantil 4. As aulas ocorrem de Segunda-Feira a Quinta-Feira das 17h30min às 18h30min, sendo intercalado os dias de cada turma',
          imagem:'/ballet.jpeg'
      },
      {
          id:3,
          titulo:'Site Disney',
          descricao:'Em sala está sendo realizado a criação de um site de filmes, o qual está associado a disciplina de Frameworks. Nesse site cadastramos alguns filmes, no meu, escolhi os filmes da Disney.',
          imagem:'/projetobarbie.jpeg'
      },
      {
          id:4,
          titulo:'UCADNAV',
          descricao:"Esse é um projeto evangélico da igreja Assembleia de Deus Ministério do Belém de Naviraí, o qual eu participo. Esse projeto visa envolver crianças e apresenta-las a palavra de Deus.",
          imagem:'/ucadnav.jpeg'
      },
  ]
  

  function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
      setTexto(e.target.value)
  }
  return (
    <>
     {
    (
      <>
      <main>
       
        <p>...</p>
        <h1 className='my-title'>Olá, eu sou a Stefanny</h1>
        <p className='my-text'>Sejam bem-vindos ao meu blog pessoal!</p>
        <p className='my-text'>Aqui vocês poderam encontrar diversas atividades</p>
        <p className='my-text'>que faço no meu dia a dia. Espero que gostem!</p>
        <h1 className='my-title'>O que gosto de fazer?</h1>
        <p  className='my-text'>-Ensinar babys a dançar Ballet</p>
        <p  className='my-text'>-Jogar Vôlei</p>
        <p  className='my-text'>-Sair com a família</p>
       
      </main>
      </>
    )
}

          <div className="campo_pesquisa">
              <p>Busque um projeto</p>
              <input type="text" 
                     className='botao_pesquisa'
                     placeholder='Pesquise um Projeto'
                     onChange={TrataTexto} />


              {
              (texto)?
              <p>Resultados Para: {texto} </p>:""}
          </div>
          <div className="contents">
          <div className="content">
             
              {
                  
                  projetos.filter((projetos)=>projetos.titulo.toLowerCase().includes(texto)).map(
                      (projetos)=>
                          <Projetos 
                              key={projetos.id}
                              descricao={projetos.descricao}
                              titulo={projetos.titulo}
                              imagem={projetos.imagem}
                          />
                  )
              }
            </div>
            </div>
            
      </>
  )
}

export default Portfolio
