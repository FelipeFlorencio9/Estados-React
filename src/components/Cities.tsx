

type CityProps = {
    cidades : string[]
}

export default function Cities(props : CityProps){
    return(
        <div className="cities">
            <h3>Cidades</h3>
            <ul id="cities">
               {props.cidades.map((item)=>
                    <li>{item}</li>
               )}
            </ul>
        </div>

    )

}