/* TODO:
if user is not logged in, render <LandingPage /> inside HomePage
*/
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { makeProperPrice } from '../../utils/properPrice';
const LandingPage = () => {
    const itemsObj = useSelector(state => state.items);
    const items = Object.values(itemsObj);



    const fixed_data = {
        "Pie": {
            "imgUrl": "https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg",
            "searchUrl": "/search?q=pie",
        },
        "Cake": {
            "imgUrl": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
            "searchUrl": "/search?q=cake",
        },
        "Water": {
            "imgUrl": "https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg",
            "searchUrl": "/search?q=water",
        },
        "1 pound items": {
            "imgUrl": "https://images.pexels.com/photos/227383/pexels-photo-227383.jpeg",
            "searchUrl": "/search?q=1lb",
        },
        "Box": {
            "imgUrl": "https://images.pexels.com/photos/67603/pexels-photo-67603.jpeg",
            "searchUrl": "/search?q=box",
        },
        "Cookies": {
            "imgUrl": "https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg",
            "searchUrl": "/search?q=cookies",
        },
    }

    const splash_circle_cards = Object.keys(fixed_data).map(name => {
        return (
            <div className="splash-circle-card">
                <Link to="/" className='no-underline'>
                    <div className="splash-circle-photo">
                        <img alt="" src={fixed_data[name]["imgUrl"]} />
                    </div>
                    <div className="splash-circle-title" id="splash-circle-title-id">
                        {name}
                    </div>
                </Link>
            </div>
        )
    })


    return (
        <div className="Outer-container">
            <div className="colored-header">
                <div className="header-color-bar">
                    <div className='header-text'>
                        <h1 className='header-text'>Log In For More Fun Products!</h1>
                    </div>

                </div>
                <div className="splash-search-circles">
                    {splash_circle_cards}
                </div>
                <div className="header-bar"></div>
            </div>

            <div className='preview-text'>
                    Please Spend Your Money Here!
            </div>
            <div className="basic-preview">

                {items.slice(0, 10).map(item => {
                    // let img = 'https://media.discordapp.net/attachments/1017492963720433868/1030624725350760448/pexels-klaus-nielsen-6294375.jpg'
                    return (
                        <Link to={"/items/"+item.id} alt={item.title} className='splash-item-card' style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
                            <div className='item-card-price'>${makeProperPrice(item.price)}</div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )

};
export default LandingPage;
