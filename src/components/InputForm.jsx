export default function InputForm({ name, value, type, required, setState }) {
    return (
        <>
            <label htmlFor={name}>{ name }</label>
            <input
                id={name}
                type={type}
                value={value}
                onChange={(evento) => {
                    setState(evento.target.value)
                }}
                required={required}
            />
        </>
    )
}