/* TODO:
if user is not logged in, render <LandingPage /> inside HomePage
*/
import { Link } from 'react-router-dom'

const LandingPage = () => {

    const imgURL = "https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825876ch1zq.png"
    const fixed_data = {
        "Classmate Gifts": {
            "imgUrl": imgURL,
            "searchUrl": "/",
        },
        "Uncanny Valley": {
            "imgUrl": imgURL,
            "searchUrl": "/",
        },
        "Holiday": {
            "imgUrl": imgURL,
            "searchUrl": "/",
        },
        "Staples": {
            "imgUrl": imgURL,
            "searchUrl": "/",
        },
        "Fancy Living": {
            "imgUrl": imgURL,
            "searchUrl": "/",
        },
        "Wedding Gifts": {
            "imgUrl": imgURL,
            "searchUrl": "/",
        },
    }

    const splash_circle_cards = Object.keys(fixed_data).map(name => {
        return (
            <div className="splash-circle-card">
                <Link to="/" className='no-underline'>
                    <div className="splash-circle-photo">
                        <img src={fixed_data[name]["imgUrl"]} />
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
                        <h1 className='header-text'>You need to log in</h1>
                    </div>

                </div>
                <div className="splash-search-circles">
                    {splash_circle_cards}
                </div>
                <div className="header-bar"></div>
            </div>
            <div className="basic-preview">
                <div className='preview-text'>
                    Please Spend Your Money Here!
                </div>

                <div className='basic-cards'>

                </div>
            </div>

        </div>
    )

};
export default LandingPage;
