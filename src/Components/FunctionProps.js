import react from "react";


function FunctionProps(props){
    return(
        <div>
            <h4>Hello Function props {props.name}  and </h4>
            <p>{props.children}</p>
        </div>
    );
}

export default FunctionProps