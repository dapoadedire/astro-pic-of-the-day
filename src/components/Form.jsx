import RandomAPOD from "./RandomAPOD";

const Form = ({ requestAPOD, date, handleDateChange, handleRandomButtonClick }) => {
  return (
    
      <div className="form-container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            requestAPOD();
          }}
        >
          <label htmlFor="date">
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      <RandomAPOD handleRandomButtonClick={handleRandomButtonClick} />
      </div>
    
  );
};

export default Form;
