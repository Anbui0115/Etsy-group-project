import "./EditItem.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createItem, editItem, getAllItems } from "../../store/items";

const EditItemForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const items = useSelector((state) => state.items);
  const { itemId } = useParams();
  const item = items[Number(itemId)];
  //   const item = items[itemId];
  // console.log("ITEM to EDIT~~~~", item);

  const [title, setTitle] = useState(item?.title);
  const [description, setDescription] = useState(item?.description);
  const [price, setPrice] = useState(item?.price);
  const [image_urls, setImage_urls] = useState(
    item?.["images"][0]["image_url"]
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch, itemId]);

  useEffect(() => {
    let errors = [];
    if (title?.length < 4 || title?.length > 255)
      errors.push("Title needs to be between 4 and 255 characters");
    if (description?.length < 4 || description?.length > 2000)
      errors.push("Description needs to be between 4 and 2000 characters");
    if (
      !image_urls?.includes(".jpg") &&
      !image_urls?.includes(".png") &&
      !image_urls?.includes(".jpeg")
    ) {
      errors.push("Please provide a valid image ends with png, jpg, or jpeg");
    }

    return setErrors(errors);
  }, [title, description, price, image_urls]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (errors.length) return;

    let itemData = {
      title,
      description,
      price,
      image_urls,
    };
    // console.log("itemInfo inside CreatItemForm", itemData, item);
    setErrors([]);
    const data = await dispatch(editItem(itemId, itemData)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    await dispatch(getAllItems());
    if (data) {
      // console.log("DATA IS VALID", data);
      history.push(`/listings`);
    }
  };
  if (!item) return null;


  return (
    <div className="create-item-outer-container">
      <form className="create-item-form" onSubmit={onSubmit}>
        {/* <h1>Form</h1> */}
        <div className="create-listing-header">
          <div className="create-title">
            <div className="create-title-text">Edit your listing</div>
          </div>
          <div className="create-subtitle">
            <div className="create-subtitle-text">
              Add some photos and details about your item. Fill out what you can
              for now—you will be able to edit this later.
            </div>
          </div>
        </div>

        <div className="create-item-container">
          {isSubmitted && (
            <ul className="create-item-error">
              {errors.map((error) => (
                <li className="each-error" key={error}>
                  {error}
                </li>
              ))}
            </ul>
          )}
          <div className="create-item-body">
            {/* <div className="create-item-photo">
              <div className="create-item-photo-inner">
                <div className="photo-title-and-subtitle">
                  <div className="photo-title">Photos</div>
                  <div className="photo-subtitle">
                    Add a photo so buyers can see the details.
                  </div>
                </div> */}
                {/* <div className="create-item-input-items">
                  <label className="create-item-input-field">
                    Image url
                    <input
                      className="create-item-input"
                      type="text"
                      name="image_urls"
                      value={image_urls}
                      onChange={(e) => setImage_urls(e.target.value)}
                      required
                    />
                  </label>
                </div> */}
              {/* </div> */}
            {/* </div> */}

            <div className="item-title-and-description-container">
              <div className="listing-details-container">
                <div className="listing-detail-title">Listing details</div>
                <div className="listing-details-subtitle">
                  Tell the world all about your item and why they'll love it.
                </div>
                <div className="item-title-container">
                  <div className="title-and-description">
                    <div className="title-and-subtitle-details">
                      <div className="item-title">Title</div>
                      <div className="item-subtitle">
                        Include keywords that buyers would use to search for
                        your item.
                      </div>
                    </div>

                    <div className="description-and-subtitle">
                      <div className="listing-description">Description</div>
                      <div className="listing-description-subtitle">
                        Start with a brief overview that describe your item's
                        finest features.
                      </div>
                    </div>
                  </div>
                  <div className="title-and-description-input-fields">
                    <label className="item-title-input-field">
                      <input
                        className="item-title-input"
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </label>
                    <div className="item-description-container">
                      <label className="item-description-input-field">
                        <textarea
                          className="item-description-input"
                          type="text"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item-price-outer-container">
              <div className="item-price-input-container">
                <label className="item-price-input-field">
                  Price
                  <input
                    className="item-price-input"
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    placeholder="$"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="create-item-submit-container">
            <button
              className="create-item-submit-button"
              type="submit"
              disabled={isSubmitted && errors.length > 0}
            >
              Save
            </button>
          </div>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default EditItemForm;
