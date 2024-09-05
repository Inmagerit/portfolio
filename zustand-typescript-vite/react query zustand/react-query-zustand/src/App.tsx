import { useFetchRepos } from './hooks/useRepos'
import './App.css'
import { favouriteReposStore } from './store/favouriteRepos'
import { Repository } from './hooks/types'
import Card from './components/card'

function App() {
  
const {data,isLoading} = useFetchRepos()
const {favouriteReposId} = favouriteReposStore()
if(isLoading) return <div>loading</div> 

return (
    <>
      <div>
        <h1>Repositorios de inMagerit</h1>
        
        <br/>
     {data?.map((repository:Repository) => (
      
      <Card repository={repository} 
      isFavorite={favouriteReposId.includes(repository.id)}
      key={repository.id}
    />
     ))}
      </div>
     
    </>
  )
}

export default App
