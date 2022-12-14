/* TODO:
if user is not logged in, render <LandingPage /> inside HomePage
*/
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { makeProperPrice } from '../../utils/properPrice';

const LoggedInPage = () => {
    const itemsObj = useSelector(state => state.items)
    const user = useSelector(state => state.session.user)
    let items = Object.values(itemsObj)
    let reversedItems = items.slice(8)
    reversedItems.reverse()

    // const imgURL = "https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825876ch1zq.png"
    const fixed_data = {
        "Classmate Gifts": {
            "imgUrl": "https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg",
            "searchUrl": "/search?q=box%20fortune%20coding%20prius",
        },
        "Uncanny Valley": {
            "imgUrl": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
            "searchUrl": "/search?q=existential%20potato",
        },
        "Holiday": {
            "imgUrl": "https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg",
            "searchUrl": "/search?q=pancake%20funnel%20funnel",
        },
        "Staples": {
            "imgUrl": "https://images.pexels.com/photos/227383/pexels-photo-227383.jpeg",
            "searchUrl": "/search?q=water",
        },
        "Fancy Living": {
            "imgUrl": "https://images.pexels.com/photos/67603/pexels-photo-67603.jpeg",
            "searchUrl": "/search?q=cereal%20cesar%20edible",
        },
        "Wedding Gifts": {
            "imgUrl": "https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg",
            "searchUrl": "/search?q=flour",
        },
    }

    const splash_circle_cards = Object.keys(fixed_data).map(name => {
        return (
            <div className="splash-circle-card" key={name}>
                <Link to={fixed_data[name]["searchUrl"]} className='no-underline'>
                    <div className="splash-circle-photo">
                        <img alt="" src={fixed_data[name]["imgUrl"] + "?width=300&height=300"} />
                    </div>
                    <div className="splash-circle-title" id="splash-circle-title-id">
                        {name}
                    </div>
                </Link>
            </div>
        )
    })

    let blankitems = [];
    for (let i = 0; i < Math.abs(reversedItems.length % 5 - 5); i++) {
        blankitems.push(
            <div className='splash-item-card'>
            </div>
        )
    }

    const createLopsidedCard = (item, isSmall) => {
        let sizeClass = 'lopsided-big-card lopsided-card'
        if (isSmall) {
            sizeClass = 'lopsided-small-card lopsided-card'
        }
        return (
            <Link to={"/items/" + item.id} alt={item.title} className={sizeClass} style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
                <div className='lopsided-item-card-price'>${makeProperPrice(item.price)}</div>
            </Link>
        )
    }

    let lopsided = (<></>)
    try {

        lopsided = (
            <div className='lopsided-homepage-previews'>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[0], false)}
                    {createLopsidedCard(items[1], true)}
                </div>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[2], true)}
                    {createLopsidedCard(items[3], false)}
                </div>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[4], false)}
                    {createLopsidedCard(items[5], true)}
                </div>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[6], true)}
                    {createLopsidedCard(items[7], false)}
                </div>
            </div>
        )
    }
    catch {
        lopsided = (<></>)
    }
    return (
        <div className="Outer-container">
            <div className="colored-header">
                <div className="header-color-bar-logged-in">
                    <div className='header-text'>
                        <h1 className='header-text'>Welcome to Eatsy, {user.username}!</h1>
                    </div>

                </div>
                <div className="splash-search-circles">
                    {splash_circle_cards}
                </div>
                <div className="header-bar"></div>
            </div>
            <div className='preview-text'>
                Featured Items
            </div>
            {lopsided}

            <div className='preview-text'>
                Look! Contemplate! Buy!
            </div>
            <div className="basic-preview">

                {reversedItems.map(item => {
                    // let img = 'https://media.discordapp.net/attachments/1017492963720433868/1030624725350760448/pexels-klaus-nielsen-6294375.jpg'
                    return (
                        <Link to={"/items/" + item.id} key={item.id} alt={item.title} className='splash-item-card' style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
                            <div className='item-card-price'>${String(item.price).length === 5 ? item.price : String(item.price) + "0"}</div>
                        </Link>
                    )
                })}
                {blankitems}
            </div>

        </div>
    )

};
export default LoggedInPage;
