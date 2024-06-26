function Buttons({buttonClick})
{
    const buttonValues=['C','%','Back','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','='];
    return(
        <div className="w-[90%]">
            {buttonValues.map((buttonValue)=>(
                <button className="shadow-xl m-3 p-2 w-[6em] h-[3em]" onClick={()=>buttonClick(buttonValue)}>{buttonValue}</button>
            ))}
            
        </div>
    );
}

export default Buttons;