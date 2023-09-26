
function Square({value, onSquareClick, color}){
    return (
    <>
        <button className="m-0.5 h-10 w-10 border-2 border-white text-xl font-bold" 
        style={{backgroundColor: color}}
        onClick={onSquareClick}
        >{value}</button>
    </>
    )
}

function MakeRow({noOfCol = 3, value, onSquareClick}){
    let count = 1;
    const row = [];
    for(let col = 1; col <= noOfCol; col++){
        row.push(<Square />);
        count += 1;
    }
    return (
        <div className="m-1 h-10">{row}</div>
    )
}

function MakeBoard({noOfRows = 3,}){
    const board = [];
    for(let rowNo = 1; rowNo <= noOfRows; rowNo++){
            board.push(<MakeRow noOfCol={noOfRows}/>)
    }
    return <div>{board}</div>;
}

export default MakeBoard;
