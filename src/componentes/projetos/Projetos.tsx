import './Projetos.css'
type ProjetosProps = {
    titulo:string,
    descricao:string,
    imagem:string
}
function Projetos(props:ProjetosProps){
    return(
        <div className="projetos-content">
            <div className="foto_projetos">
                <img className="img-projetos" src={props.imagem} alt="" />
            </div>
            <div className="text-titulo">
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
            </div>
        </div>
    )
}
export default Projetos