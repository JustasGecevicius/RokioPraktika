export const InputField = ({...props}) => {
        return(
            <div className="inputDiv">
            <label className="inputLabel">
                {props.name}

                    <input  placeholder = {props.name} {...props} className="inputField"/>          
            </label>
        </div>        
    )
}