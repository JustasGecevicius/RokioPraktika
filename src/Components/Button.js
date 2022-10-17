export const Button = (props) => {
    return(
        <button onClick={props.handleClick} type={props.buttonType}>{props.text}</button>
    )
}