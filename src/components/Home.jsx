import { useState, useEffect } from "react";
import {
  changeDateFormat,
  currentDate,
  generateRandomDate,
} from "../helpers/utils";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
import LoadingSpinner from "./LoadingSpinner";


const todaysDate = changeDateFormat(currentDate());

const Home = () => {
  const [date, setDate] = useState(todaysDate);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestAPOD();



  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestAPOD() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=ZXx5rFhwccQGJn0flyvH6MIypZ46LLwF5MpTa6cN&date=${date}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
     
    } catch (error) {
      console.error(error);
    }
  }


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleRandomButtonClick = () => {
    const randomDate = generateRandomDate();
    setDate(randomDate);
    requestAPOD();
  };

  return (
    <>
      <Header />
      <main>
        <div className="form">
          <Form
            requestAPOD={requestAPOD}
            handleDateChange={handleDateChange}
            date={date}
            handleRandomButtonClick={handleRandomButtonClick}
            role="search"
          />
        </div>
        <div className="result">
          {
            loading ? <LoadingSpinner /> : <Result data={data} />
          }
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
