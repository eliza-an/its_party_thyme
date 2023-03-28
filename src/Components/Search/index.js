import "./style.css";

export default function Search({searchValue, setPlantData, setSearchValue}) {


  function handleSearch() {
    fetch(
      `https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275&q=${searchValue}&indoor=1`,
      { cache: "no-store" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setPlantData(data.data));
  }

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  // console.log(searchValue)

  return (
    <div>
      <input
        className="plantInput"
        type="text"
        placeholder="type a indoor plant breed.."
        value={searchValue}
        onChange={handleChange}
      />
      <button className="searchBtn" onClick={() => handleSearch()}>search</button>
    </div>
  );
}
