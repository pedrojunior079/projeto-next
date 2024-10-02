interface InfoParams{
  params:{
    produtoId: number
  }
}

function Info({params}: InfoParams){
  return(
    <>
      <h1>Informações do produto {params.produtoId}</h1>
    </>
  );  
}
export default Info;