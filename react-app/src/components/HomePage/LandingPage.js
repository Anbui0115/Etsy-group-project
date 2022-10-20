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
            "imgUrl": "https://www.allrecipes.com/thmb/tOV-fTPq285yGwIiGxRNLe1CMok=/2000x1500/smart/filters:no_upscale():focal(1039x794:1041x796)/23439-PerfectPumpkinPie_002-4x3-1-44d015659c5c4a0888238d8f22de2a5e.jpg",
            "searchUrl": "/search?q=pie",
        },
        "Cake": {
            "imgUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2020/04/strawberry-cake-8c9a6b6.jpg",
            "searchUrl": "/search?q=cake",
        },
        "Water": {
            "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Water_drop_001.jpg",
            "searchUrl": "/search?q=water",
        },
        "1 pound items": {
            "imgUrl": "https://coinscatalog.net/images/big-2x/16/one-pound-nations-of-the-crown-2017-uk-o-36167.jpg",
            "searchUrl": "/search?q=1lb",
        },
        "Box": {
            "imgUrl": "https://dictionary.cambridge.org/us/images/thumb/box_noun_002_04301.jpg",
            "searchUrl": "/search?q=box",
        },
        "Cookies": {
            "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg",
            "searchUrl": "/search?q=cookies",
        },
    }

    const splash_circle_cards = Object.keys(fixed_data).map(name => {
        return (
            <div className="splash-circle-card">
                <Link to={fixed_data[name]["searchUrl"]} className='no-underline'>
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
