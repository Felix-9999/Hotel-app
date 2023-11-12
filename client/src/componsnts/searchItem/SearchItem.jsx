import { Link } from "react-router-dom";
import "./searchItem.css";
import useFetch from "../../hooks/useFetch";

const SearchItem = ({ item }) => {
    // const { data } = useFetch(`
    // http://localhost:8800/api/hotels?featured=true&limit=2&min=10&max=200
    // `);

    return (
        <div className="searchdata">
            {/* {data.map((item) => ( */}
            <div key={item._id} className="searchItemContainer">
                <img src={item.photos?.[0] || ''} alt="" className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">{item.name}</h1>
                    <span className="siDistance">{item.distance}m from center</span>
                    <span className="siTaxiOp">Free airport taxi</span>
                    <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                    <span className="siFeatures">{item.desc}</span>
                    <span className="siCancelOp">Free cancellation</span>
                    <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
                </div>
                <div className="siDetails">
                    {item.rating && (
                        <div className="siRating">
                            <span>Excellent</span>
                            <button>{item.rating}</button>
                        </div>
                    )}
                    <div className="siDetailTexts">
                        <span className="siPrice">${item.chapestPrice}</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <Link to={`/hotels/${item._id}`}>
                            <button className="siCheckButton">See availability</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* ))} */}
        </div>
    );
};

export default SearchItem;
