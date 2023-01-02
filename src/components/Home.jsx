import { useState, useEffect} from "react";
import { changeDateFormat, currentDate} from "../helpers/utils";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Result from "./Result";
import axios from 'axios';


const todaysDate = changeDateFormat(currentDate());

const Home = () => {
  const [date, setDate] = useState(todaysDate);
  const [data, setData] = useState(null);


  useEffect(() => {
    requestAPOD();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // async function requestAPOD() {
  //   const response = await fetch(
  //     `https://api.nasa.gov/planetary/apod?api_key=ZXx5rFhwccQGJn0flyvH6MIypZ46LLwF5MpTa6cN&date=${date}`
  //   );
  //   const data = await response.json();
  //   setData(data);
  // }

  async function requestAPOD() {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ZXx5rFhwccQGJn0flyvH6MIypZ46LLwF5MpTa6cN&date=${date}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  function handleDateChange(e) {
    setDate(e.target.value);
  }
  return (
    <>
    <Header />
    <main>
      <div className="form">
        <Form requestAPOD={requestAPOD} handleDateChange={handleDateChange} date={date} />
      </div>
      <div className="result">
        <Result data={data} />
      </div>
    </main>
    
    <Footer />
    </>
       
   
  );
};

export default Home;
