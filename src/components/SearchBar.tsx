import React from "react";
import search_icon from "../assets/search.png";

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
        src={search_icon}
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