import { Link } from "react-router-dom";

const SearchResultCard = ({ item }) => {
  return (
    <Link
      to={"/items/" + item.id}
      alt={item.title}
      className="splash-item-card"
      style={{
        backgroundImage: `url(${item.images[0]["image_url"]})`,
      }}
    >
      {/* <div>
        <img
          src={item.images[0]["image_url"]}
          height={"300px"}
          width={"300px"}
        ></img>
      </div> */}
      <div className="item-card-price">
        $
        {String(item.price).length === 5
          ? item.price
          : String(item.price) + "0"}
      </div>

    </Link>
  );
};
export default SearchResultCard;
