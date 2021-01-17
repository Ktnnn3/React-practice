import './PicItem.css';

function PicItem(props) {
    const {pic,onPicClick} = props;
    return(
        <div className={pic.nname}>
            <img src={pic.URL} onClick={()=>{onPicClick(pic)}} />
            <h4>{pic.title}</h4>
        </div>
    );
}


export default PicItem;