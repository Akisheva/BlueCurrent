
const Button = ({text, className, type}) => {
    return (
        <button className={className} type={type ? type : "button"}>
            {text}
        </button>
    )
}

export default Button