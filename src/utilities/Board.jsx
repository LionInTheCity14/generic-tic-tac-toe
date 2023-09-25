
function Square({value, onSquareClick}){
    return (
        <>
            <button className="m-0 h-10 w-10 border-2 border-white text-xl font-bold" onClick={onSquareClick}
            style={{backgroundColor: "green"}}
            >
                {value}
            </button>
        </>
    )
}

function MakeRow({noOfCol = 3, value, onSquareClick}){
    let count = 1;
    const row = [];
    for(let col = 1; col <= noOfCol; col++){
        row.push(<Square value={count} onSquareClick={onSquareClick}/>);
        count += 1;
    }
    return (
        <div className="m-0 h-10">{row}</div>
    )
}

function MakeBoard({noOfRows = 3,}){
    const board = [];
    for(let rowNo = 1; rowNo <= noOfRows; rowNo++){
            board.push(<MakeRow noOfCol={noOfRows}/>)
    }
    return <div>{board}</div>;
}

// export default MakeRow;
export default MakeBoard;
