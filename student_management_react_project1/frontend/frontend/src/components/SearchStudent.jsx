function SearchStudent({ search, setSearch }) {

    return (
        <div className="search-container">

            <input
                type="text"
                placeholder="Search by Student ID or Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>
    );
}

export default SearchStudent;