
function Square({value, onSquareClick}){
    return (
        <>
            <button className=" py-0.5 px-2.5 border-white border-2 border-x-1 text-xl font-bold" onClick={onSquareClick}>{value}</button>
        </>
    )
}

function MakeRow({noOfCol = 3, value, onSquareClick}){
    let count = 1;
    const row = [];
    for(let col = 1; col <= noOfCol; col++){
        row.push(<Square value={value} onSquareClick={onSquareClick}/>)
        count += 1;
    }
    return (
        <div>{row}</div>
    )
}

function MakeBoard({noOfRows = 3,}){
    const board = [];
    for(let rowNo = 1; rowNo <= noOfRows; rowNo++){
            board.push(<MakeRow/>)
    }
    return board;
}

export default MakeBoard;
