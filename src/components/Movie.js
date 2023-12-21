const Movie=(props)=>{
    return(
       <div class="poster">
         <div class="left-part">
            <div class="title">
                <img src={props.Images[1]} alt=""/>
                <div class="year">
                    <h1>{props.Title}</h1>
                    <p><span>year : </span>{props.Year}</p>
                    <p> <span>Director </span>:{props.Director}</p>
                    <p><span>Writer</span> : {props.Writer}</p>
                    
                </div>
            </div>
            <div>
                <p>{props.Plot}</p>
            </div>
            <div class="desc">
                <p><span>Rating:</span>{props.imdbRating}</p>
               <p> <span>Genre:</span> {props.Genre}</p>
                <p><span>Actor:</span> {props.Actors}</p>
            </div>
         </div>
         <div class="right-part">
            <img src={props.Images[0]} alt=""/>
         </div>
       </div>
    )
}
export default Movie;