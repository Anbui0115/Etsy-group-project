/* TODO:
if user is not logged in, render <LandingPage /> inside HomePage
*/
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { makeProperPrice } from '../../utils/properPrice';

const LoggedInPage = () => {
    const itemsObj = useSelector(state => state.items)
    let items = Object.values(itemsObj)
    items.reverse()
    // console.log(itemsObj)
    // const imgURL = "https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825876ch1zq.png"
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
            "imgUrl": "https://www.uhaul.com/MovingSupplies/Image/GetMedia/?id=8390&media=8185",
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

    let blankitems = [];
    for (let i = 0; i < Math.abs(items.length % 5 - 5); i++) {
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
            <Link to={"/items/"+item.id} alt={item.title} className={sizeClass} style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
                <div className='lopsided-item-card-price'>${makeProperPrice(item.price)}</div>
            </Link>
        )
    }

    let lopsided = ( <></>)
    try {

        lopsided = (
            <div className='lopsided-homepage-previews'>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[0],false)}
                    {createLopsidedCard(items[1],true)}
                </div>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[2],true)}
                    {createLopsidedCard(items[3],false)}
                </div>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[4],false)}
                    {createLopsidedCard(items[5],true)}
                </div>
                <div className='lopsided-homepage-column'>
                    {createLopsidedCard(items[6],true)}
                    {createLopsidedCard(items[7],false)}
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
                        <h1 className='header-text'>Welcome to Eatsy!</h1>
                    </div>

                </div>
                <div className="splash-search-circles">
                    {splash_circle_cards}
                </div>
                <div className="header-bar"></div>
            </div>

            {lopsided}

            <div className='preview-text'>
                    Look! Contemplate! Buy!
            </div>
            <div className="basic-preview">

                {items.map(item => {
                    // let img = 'https://media.discordapp.net/attachments/1017492963720433868/1030624725350760448/pexels-klaus-nielsen-6294375.jpg'
                    return (
                        <Link to={"/items/"+item.id} alt={item.title} className='splash-item-card' style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
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
