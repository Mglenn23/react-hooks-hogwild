function Filter({ functionFilter }) {
  function handleClick(event) {
    if (event.target.checked) {
      //   console.log(event.target.checked);
      functionFilter(event.target.checked);
    } else {
      //   console.log(event.target.value);
      functionFilter(event.target.value);
    }
  }
  return (
    <>
      <button onClick={handleClick} value="nameA">
        Sort Name Ascending
      </button>
      <button onClick={handleClick} value="nameD">
        Sort Name Descending
      </button>
      <button onClick={handleClick} value="weightA">
        Sort weight Ascending
      </button>
      <button onClick={handleClick} value="weightD">
        Sort weight Descending
      </button>
      <input value={false} style={{ marginLeft: "25px" }} type="checkbox" onClick={handleClick} />
      <label>Greased</label>
    </>
  );
}
export default Filter;
