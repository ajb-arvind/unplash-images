import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchTerm(searchValue);
  };
  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className=" search-form " onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
