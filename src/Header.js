import React from "react";

const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header>
      <div className="header-title">
        <h1>Super <span>Sticky</span> Notes</h1>
      </div>
      <aside>
        <div className="a_side">
          <button className="add-new" onClick={props.addNote}>
            + New Note
          </button>
          <input
            className="search"
            type="text"
            placeholder="Search notes..."
            value={props.searchText}
            onChange={callSearch}
          />
        </div>
      </aside>
    </header>
  );
};

export default Header;