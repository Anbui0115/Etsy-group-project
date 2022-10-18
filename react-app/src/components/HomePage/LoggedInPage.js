/* TODO:
if user is not logged in, render <LandingPage /> inside HomePage
*/
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const LoggedInPage = () => {
    const itemsObj = useSelector(state => state.items)
    let items = Object.values(itemsObj)
    items.reverse()
    // console.log(itemsObj)
    // const imgURL = "https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825876ch1zq.png"
    const fixed_data = {
        "Classmate Gifts": {
            "imgUrl": "https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg",
            "searchUrl": "/",
        },
        "Uncanny Valley": {
            "imgUrl": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
            "searchUrl": "/",
        },
        "Holiday": {
            "imgUrl": "https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg",
            "searchUrl": "/",
        },
        "Staples": {
            "imgUrl": "https://images.pexels.com/photos/227383/pexels-photo-227383.jpeg",
            "searchUrl": "/",
        },
        "Fancy Living": {
            "imgUrl": "https://images.pexels.com/photos/67603/pexels-photo-67603.jpeg",
            "searchUrl": "/",
        },
        "Wedding Gifts": {
            "imgUrl": "https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg",
            "searchUrl": "/",
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

    let blankitems = [];
    for (let i = 0; i < Math.abs(items.length % 5 - 5); i++) {
        blankitems.push(
            <div className='splash-item-card splash-item-card-blank'>
            </div>
        )
    }

    return (
        <div className="Outer-container">
            <div className="colored-header">
                <div className="header-color-bar">
                    <div className='header-text'>
                        <h1 className='header-text'>Welcome to Eatsy!</h1>
                    </div>

                </div>
                <div className="splash-search-circles">
                    {splash_circle_cards}
                </div>
                <div className="header-bar"></div>
            </div>

            <div className='preview-text'>
                    Look! Contemplate! Buy!
            </div>
            <div className="basic-preview">

                {items.map(item => {
                    // let img = 'https://media.discordapp.net/attachments/1017492963720433868/1030624725350760448/pexels-klaus-nielsen-6294375.jpg'
                    return (
                        <Link to="/" alt={item.title} className='splash-item-card' style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
                            <div className='item-card-price'>${String(item.price).length === 5 ? item.price : String(item.price)+"0"}</div>
                        </Link>
                    )
                })}
                {blankitems}
            </div>

        </div>
    )

};
export default LoggedInPage;
