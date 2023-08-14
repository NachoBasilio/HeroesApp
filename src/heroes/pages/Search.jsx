import HeroCard from "../components/HeroCard";

export default function Search() {
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form action="">
            <input 
            type="text" 
            placeholder="Find your hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            />
            <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            Hero not found
          </div>

          {/* <HeroCard  /> */}
        </div>
      </div>
      </>
  )
}
