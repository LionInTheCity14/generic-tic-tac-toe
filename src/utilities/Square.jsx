export default function Square({value, onSquareClick}){
    return (
        <>
            <button className=" py-0.5 px-2.5 border-white border-2 border-x-1 text-xl font-bold" onClick={onSquareClick}>{value}</button>
        </>
    )
}