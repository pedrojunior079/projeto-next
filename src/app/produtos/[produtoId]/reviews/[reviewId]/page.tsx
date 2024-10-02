interface ReviewsParams{
    params:{
      produtoId: number
      reviewId: number
    }
  }

function Review({params}: ReviewsParams){
  return(
     <div>
        <p>Produto{params.produtoId}</p>
        <p>Review {params.reviewId}</p>
     </div>
  );  
}

export default Review;