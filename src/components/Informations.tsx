import Icon from "./Icon";

type InformationsProps = {
   city : {
        uf: string
        regiao: string,
        capital: string,
        descricao: string
   }
}
export default function Informations({city}: InformationsProps) {
    return (
        <div className="informations">
            <Icon estado={city.uf}/>
            <div className="texts">
                <h2>{city.descricao}</h2>
                <div className="texts__category">
                    <div className="capital">
                        <h3>Capital:</h3>
                        <p>{city.capital}</p>
                    </div>
                    <div className="regiao">
                        <h3>Região:</h3>
                        <p>{city.regiao}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
