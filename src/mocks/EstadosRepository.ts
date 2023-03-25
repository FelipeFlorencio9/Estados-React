import { Estado } from "../models/Estado";

export const pesquisarEstado = async(sigla : string) => {
    const url = `http://localhost:8080/estado/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json();
    return data;
}   