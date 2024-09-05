import api from "../API/github";
import { useQuery } from "@tanstack/react-query";
import { Repository } from "./types";

async function fetchRepos () {

    const {data} = await api.get<Repository[]>('https://api.github.com/users/Inmagerit/repos')
    return data

}

export function useFetchRepos() {
    return useQuery({
        queryKey:['repos'],
        queryFn:fetchRepos
    }); 
}
