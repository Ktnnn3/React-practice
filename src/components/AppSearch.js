import './AppSearch.css';

function  AppSearch(props) {
    const{value, onValueChange} = props;
    return(
        <div className="app-search">
        <input 
        className="app-search-input"
        type ="text"
        placeholder="search photos"
        value = {value} /*ตั๋วเที่ยวไป*/
        onChange={(event)=> onValueChange(event.target.value)} /*ตั๋วเที่ยวกลับ*/
        />
      </div>
    );
}

export default AppSearch; 