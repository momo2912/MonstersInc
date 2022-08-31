import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

// interface ISearchBoxProps {
//   className: string,
//   placeholder: string,
// }

// interface ISearchBoxProps {
//   handleSearch: (a:string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  handleSearch: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({className, placeholder, handleSearch} : SearchBoxProps) => (
      <div >
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </div>
)

export default SearchBox;
