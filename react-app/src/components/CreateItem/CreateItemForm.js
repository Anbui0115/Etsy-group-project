import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createItem } from "../../store/items";
// import { getAllSpotsThunk, addImgThunk } from "../../store/spots";
// import { useHistory } from "react-router-dom";
import "./CreateItemForm.css";

function CreateUserItem() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image_urls, setImage_urls] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  // //errors
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   dispatch(getAllSpotsThunk());
  // }, [dispatch]);

  useEffect(() => {
    let errors = [];
    if (title.length < 4 || title.length > 255)
      errors.push("Title needs to be less than 255 characters");
    if (description.length <4 ||description.length > 2000)
      errors.push("Description needs to be less than 2000 characters");
    // if (price === "") errors.push("Price per day is required");
    // if (imageUrl === "") errors.push("Image URL is required");
    if (
      !image_urls.includes(".jpg") &&
      !image_urls.includes(".png") &&
      !image_urls.includes(".jpeg")
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
    console.log("itemInfo inside CreatItemForm", itemData);
    setErrors([]);
    const data = await dispatch(createItem(itemData)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    // console.log("data````````````", data);
    // dispatch(addImgThunk({ previewImage: true, url: imageUrl }, data.id));
    if (data) {
      //need to redirect to the newly created item?
      //   history.push(`/items/${data.id}`);
      console.log("DATA IS VALID", data);
      history.push(`/`);
    }
  };
  return (
    <form className="create-item-form" onSubmit={onSubmit}>
      {/* <h1>Form</h1> */}
      <div className="create-title">
        <div className="create-title-text">Create a listing</div>
      </div>

      <div className="create-subtitle">
        <div className="create-subtitle-text">
          Add some photos and details about your item. Fill out what you can for
          now—you will be able to edit this later.
        </div>
      </div>

      <div className="create-item-container">
        {isSubmitted && (
          <ul className="create-item-error">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <div className="create-item-body">
          <div className="create-item-photo">
            <div className="create-item-input-items">
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
            </div>
          </div>

          <div>
            <div>Listing details</div>
            <div className="create-item-input-items">
              <label className="create-item-input-field">
                Title
                <input
                  className="create-item-input"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="create-item-input-items">
              <label className="create-item-input-field">
                Description
                <input
                  className="create-item-input"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="create-spot-input-items">
            <label className="create-spot-input-field">
              Price
              <input
                className="create-spot-input"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>
          </div>
        </div>

        <button
          className="create-item-submit-button"
          type="submit"
          disabled={isSubmitted && errors.length > 0}
        >
          Save
        </button>
      </div>
      {/* </div> */}
    </form>
  );
}
export default CreateUserItem;
