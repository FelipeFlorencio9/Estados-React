type IconProps = {
    estado: String;
}
export default function Icon(props : IconProps) {
    return (
            <span>
                {props.estado}
            </span>
        )
   
}
  