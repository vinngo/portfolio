function Button({type, text}){
    <div id = "button" onClick = {buttonHandler(type)}>
        {text}
    </div>
}

function buttonHandler(type){
    console.log("this works")
}
;
export default Button;