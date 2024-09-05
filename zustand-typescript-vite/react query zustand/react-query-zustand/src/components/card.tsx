import { Repository } from "../hooks/types";
import { favouriteReposStore } from '../store/favouriteRepos'


type cardProps = {
    repository:Repository,
    isFavorite:boolean
}

function Card({repository,isFavorite}:cardProps){
    const addRepo = favouriteReposStore(state => state.addFavouriteRepo)
    const removeRepo = favouriteReposStore(state => state.removeFavouriteRepo)
    const handleLike = () =>{
        if(isFavorite){removeRepo(repository.id)
            return
        }
        else(addRepo(repository.id))
    }
    return(
        <div className="cardItem">{repository.name} <br/> <br/> 
        <button onClick={handleLike}>{
            isFavorite ? 'dislike' : 'like'
            }</button>
        </div>
    )
}

export default Card