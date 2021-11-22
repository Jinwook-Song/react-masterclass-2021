import { useLocation } from "react-router";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  return <div style={{ position: "fixed", top: 100 }}>{keyword}</div>;
}

export default Search;
