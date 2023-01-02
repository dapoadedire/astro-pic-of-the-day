const Form = ({ requestAPOD, date, handleDateChange }) => {
  return (
    <div>

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
    </div>
  );
};

export default Form;
