const Form = ({
  requestAPOD,
  date,
  handleDateChange,
  handleRandomButtonClick,
}) => {
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
      <button className="random-button" onClick={handleRandomButtonClick}>Get Random APOD</button>
    </div>
  );
};

export default Form;
