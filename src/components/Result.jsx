import { getReadableDate } from "../helpers/utils";
import LoadingSpinner from "./LoadingSpinner";
const Result = ({ results }) => {

  if (results.isLoading) {
    return (
      <LoadingSpinner />
    );
  }
  if (results.isError) {
    return <div>Error: {results.error.message}</div>;
  }

  const data = results.data;

  return (
    <>
      
        <div>
          <div className="picture">
            <h2>Astromomy Picture Of The Day</h2>
            <figure>
              {data.media_type === "video" ? (
                <iframe src={data.url} title="a">
                  {data.title}
                </iframe>
              ) : (
                <img src={data.url} alt={data.title} />
              )}
              <figcaption>
                {data.copyright && <p>Image Credits and Copyright: {data.copyright}</p>}
                <p className="title">
                  {data.title} - {getReadableDate(data.date)}
                </p>
              </figcaption>
            </figure>


          </div>

          <div className="explaination">
            <p>{data.explanation}</p>
          </div>
        </div>
      
     
    </>
  );
};

export default Result;
