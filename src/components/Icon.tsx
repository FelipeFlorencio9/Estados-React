type IconProps = {
    estado: String;
}
export default function Icon({estado} : IconProps) {
    return (
        <div className="icon">
            <h2>
                {estado}
            </h2>
        </div>
    );
}
  