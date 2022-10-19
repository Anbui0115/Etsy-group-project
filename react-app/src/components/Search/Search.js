import { useHistory } from "react-router-dom"
import { useParams } from "react-router";

const Search = () => {
    let history = useHistory()
    const params = useParams()

    const searchTerms = params.params.split("+")
    console.log(searchTerms)
    return (
        <div>
            hi
        </div>
    )
}

export default Search
