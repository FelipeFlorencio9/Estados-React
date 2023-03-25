
import Cities from "./Cities";
import Informations from "./Informations";

import { cidades } from "../mocks/CidadesRepository"
import { pesquisarEstado } from "../mocks/EstadosRepository"
import {Estado} from '../models/Estado'
import { useEffect, useState } from "react";

type Response = {
 
        uf: string
        regiao: string,
        capital: string,
        descricao: string

}
export default function Card() {
    const [city, setCity] = useState<Response>();

    useEffect(() => {
        const fecth = async () => {
            const response = await pesquisarEstado("SP");
            setCity(response);
        };

        fecth();
    }, []);

    return (
        <div className="card-container">
            {
                city? <Informations city={city}/> : <p>Vc não selecionou nada</p>
            }
            <Cities cidades={cidades}/>
        </div>
    );
};
