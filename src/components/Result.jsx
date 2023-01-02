import { getReadableDate } from "../helpers/utils";
const Result = ({ data }) => {
  return (
    <>
      {data && !data.code && (
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
      )}
      {data && data.code && (
        <div>
          <h2>Error.</h2>
          <p>{data.msg}</p>
        </div>
      )}
    </>
  );
};

export default Result;
