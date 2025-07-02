import React from "react";


type Props = {
  onSearch: (city: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

export default function SearchBar({ onSearch, inputRef }: Props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputRef.current) {
            onSearch(inputRef.current.value);
          }
        }}
      />
      <img
        src="../assets/search.png"
        alt=""
        onClick={() => {
          if (inputRef.current) {
            onSearch(inputRef.current.value);
          }
        }}
      />
    </div>
  );
}