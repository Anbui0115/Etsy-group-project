/* TODO:
if user is not logged in, render <LandingPage /> inside HomePage
*/
import {Link} from 'react-router-dom'

const LandingPage = () => {


    const fixed_data = {
        "Classmate Gifts" : {
            "imgUrl" : "https://media.discordapp.net/attachments/1017492963720433868/1031627816208445461/spongebob_PNG16.png",
            "searchUrl" : "/",
        },
        "Uncanny Valley" : {
            "imgUrl" : "https://media.discordapp.net/attachments/1017492963720433868/1031627816208445461/spongebob_PNG16.png",
            "searchUrl" : "/",
        },
        "Holiday" : {
            "imgUrl" : "https://media.discordapp.net/attachments/1017492963720433868/1031627816208445461/spongebob_PNG16.png",
            "searchUrl" : "/",
        },
        "Staples" : {
            "imgUrl" : "https://media.discordapp.net/attachments/1017492963720433868/1031627816208445461/spongebob_PNG16.png",
            "searchUrl" : "/",
        },
        "Fancy Living" : {
            "imgUrl" : "https://media.discordapp.net/attachments/1017492963720433868/1031627816208445461/spongebob_PNG16.png",
            "searchUrl" : "/",
        },
        "Wedding Gifts" : {
            "imgUrl" : "https://media.discordapp.net/attachments/1017492963720433868/1031627816208445461/spongebob_PNG16.png",
            "searchUrl" : "/",
        },
    }

    const splash_circle_cards = Object.keys(fixed_data).map(name => {
        return (
            <div className="splash-circle-card">
                <Link to="/">
                        <div className="splash-circle-photo">
                            <img src={fixed_data[name]["imgUrl"]} />
                        </div>
                        <div className="splash-circle-title">
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
                    <h1>You need to log in</h1>

                </div>
                <div className="splash-search-circles">
                    {splash_circle_cards}
                </div>
                <div className="header-bar"></div>

            </div>
            <div className="basic-preview">

            </div>

        </div>
    )

};
export default LandingPage;
