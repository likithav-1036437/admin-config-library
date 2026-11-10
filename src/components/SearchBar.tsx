interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search Config..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "300px",
        padding: "8px",
        marginBottom: "10px"
      }}
    />
  );
};

export default SearchBar;