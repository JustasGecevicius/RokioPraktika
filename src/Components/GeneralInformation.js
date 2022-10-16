import generalInformationObject from "./VariousObjects";

function GeneralInformation (props){
    return (
        <div className="GeneralInformation">
            <h2 className="GeneralInformationTitle">General Information</h2>
            <div className="GeneralInformationContent">
                {generalInformationObject.forEach((dalykas) => {

                })
            </div>
        </div>
    )
}

export default GeneralInformation;