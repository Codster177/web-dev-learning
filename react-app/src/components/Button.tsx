
interface Props{
    buttonName: string;
    buttonColor?: 'light' | 'dark';
    buttonFun: () => void;
}

function Button({buttonName, buttonColor = "light", buttonFun}: Props){
    return(
        <>
            <button 
                type="button" 
                className={"btn btn-" + buttonColor}
                onClick={() =>
                    buttonFun()
                }
                >
                    {buttonName}
            </button>
        </>
    )
}

export default Button;