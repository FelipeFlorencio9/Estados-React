import Cities from "./Cities";
import Informations from "./Informations";

type CardProps = {
   sigla: string,
}
export default function Card() {
    return (
        <div>
            <Informations
                sigla="AC"/>
            <Cities/>
        </div>
    )
}
  