import { useState } from "react";
import { currentDate, generateRandomDate } from "../helpers/utils";
import { useQuery } from "@tanstack/react-query";

import searchAPOD from "../helpers/searchAPOD";

import Result from "./Result";
import Footer from "./Footer";

const Home = () => {
  const todaysDate = currentDate();
  const [date, setDate] = useState(todaysDate);

  const results = useQuery(["apod", date], searchAPOD);

  return (
    <>
      <main>
        <div className="form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const date = e.target.date.value;
              setDate(date);
            }}
          >
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                id="date"
                max={todaysDate}
                min="1995-06-16"
                defaultValue={todaysDate}
              />
            </label>
            <button type="submit">Search</button>
          </form>
          <div className="button">
            <button
              onClick={() => {
                const randomDate = generateRandomDate();
                setDate(randomDate);
              }}
            >
              Random
            </button>
          </div>
        </div>
        <Result results={results} />
      </main>
      <Footer />
    </>
  );
};
export default Home;
