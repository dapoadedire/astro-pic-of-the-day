
const RandomAPOD = ({ handleRandomButtonClick}) => {
    return (
        <>
        <div className="random">
            <button className="random-button" onClick={handleRandomButtonClick}>
            Get Random APOD
            </button>
        </div>
        </>
    );
    };

export default RandomAPOD;