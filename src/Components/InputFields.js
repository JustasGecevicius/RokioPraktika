export const InputField = (props) => {

    if(props.placeholder !== undefined)
    {
        return(
            <div className="inputDiv">
            <label className="inputLabel">
                {props.fieldName}
                    <input required value = {props.inputValue} name = {props.name} type={props.inputType} placeholder={props.placeholder} className="inputField" onChange={props.onChange}/>          
            </label>
        </div>
        )
    }
    else{
        return(
            <div className="inputDiv">
            <label className="inputLabel">
                {props.fieldName}
                    <input required value = {props.inputValue} name = {props.name} type={props.inputType} placeholder={props.fieldName} className="inputField"  onChange={props.onChange}/>          
            </label>
        </div>
        )
    }
}