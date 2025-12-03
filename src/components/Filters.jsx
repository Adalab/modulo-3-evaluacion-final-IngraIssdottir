function Filters ({ handleSearchName, searchName, searchHouse, handleSearchHouse }){
    return(
        <form onSubmit={(ev) => ev.preventDefault()}>

         {/*FILTRO POR NOMBRE*/}
          <div className="name_filter">
            <input
            className="name_filter_input" 
            type="text"
            name="search_name"
            id="search_name"
            onInput={handleSearchName}
            value={searchName}
            placeholder="search by name"
             />
            <button>Buscar</button>
          </div>

         {/*FILTRO POR CASA*/}
          <div className="house_filter">
            <p>Buscar por casa: </p>
            <select value={searchHouse}
            onChange={handleSearchHouse}
            name="house_filter_select" id="house_filter_select"> 
              <option value="">All</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
            </select>
          </div>

        </form>
    );
}

export default Filters