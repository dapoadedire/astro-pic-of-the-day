import { useState, useRef } from "react";
import { downloadImage } from '../helpers/utils';

const Result = ({ data }) => {
    const clipboardRef = useRef(null);
    const [copied, setCopied] = useState(false);

    return (
<>
            {data && !data.code && (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.date}</p>
                    <figure>
                        <img src={data.url} alt={data.title} />
                        <figcaption>
                            <strong>{data.title}</strong>
                            <br />
                            {data.copyright && <span>Photo by: {data.copyright}</span>}
                        </figcaption>
                    </figure>
                    <button
                        onClick={() => {
                            downloadImage(data.url, data.title);
                        }}
                    >
                        Download
                    </button>
                    <p ref={clipboardRef}>{data.explanation}</p>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(clipboardRef.current.textContent);
                            setCopied(true);
                            setTimeout(() => {
                                setCopied(false);
                            }, 1000);
                        }}
                    >
                        Copy to clipboard
                    </button>
                    {copied && <p>Text copied to clipboard!</p>}
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