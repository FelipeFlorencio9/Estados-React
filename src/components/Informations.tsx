type InformationsProps = {
    sigla : string
}
export default function Informations(props : InformationsProps) {
    return (
        <div className="informations">
            <span className="icon">
                <h2>{props.sigla}</h2>
            </span>
        </div>
    )
}
  