import { getReadableDate } from "../helpers/utils";
const Result = ({ data }) => {


  return (
    <>
      {data && !data.code && (
        <div className="result">
          <div className="left">
            <h2>Astromomy Picture Of The Day</h2>
            <figure>
              <img src={data.url} alt={data.title} />
            </figure>
          
          </div>

          <div className="right">
            <h2>{data.title}</h2>
            {data.copyright && <span>Image Credits and Copyright: {data.copyright}</span>}
            <p>{getReadableDate(data.date)}</p>
            <p >{data.explanation}</p>
            
          </div>
        </div>
      )}
      {data && data.code && (
        <div>
          <h2>Error</h2>
          <p>{data.msg}</p>
        </div>
      )}
    </>
  );
};

export default Result;
