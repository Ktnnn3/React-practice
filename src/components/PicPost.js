import pics from '../data/pics';
import './PicPost.css'

function PicPost(props){
    const{pic,onBgClick} = props;
    return(
        <div className="pic-post">
            <div className="pic-post-bg" onClick={onBgClick}/>
            <div className="pic-post-content">
                <img src={pic.URL}/>
                <h3>{pic.title}</h3>
            </div>
        </div>
    );
}

export default PicPost;