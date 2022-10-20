export const ItemReviews = ({reviews}) => {
    console.log("test")

    if (!reviews.length) {
        // console.log(reviews.length)
        return <div className="review-count"> No Reviews Yet! </div>
    }
    let initialValue = parseInt(reviews[0].stars)
    let average = reviews.slice(1).reduce(
        (previousValue, currentValue) => previousValue+parseInt(currentValue.stars),
        initialValue
        ) / reviews.length
    average = Math.round(average)

    const starField = (stars) => {
        const blankStar = "☆"
        const whiteStar = "★"
        let starItems = [];
        for (let i = 0; i < stars; i++) {
            starItems.push(whiteStar)
        }
        for (let i = 0; i < 5-stars; i++){
            starItems.push(blankStar)
        }

        return starItems.join("")
    }

    return (
        <div className="reviews">
            <div className="review-count"> {reviews.length} Reviews {starField(average)} </div>
            <div className="review-cards">
                {reviews.map(review => {
                    return (
                        <div className="review-card">
                            <div className="review-card-stars">{starField(review.stars)} </div>
                            <div className="review-card-title">{review.title} </div>
                            <div className="review-card-description">{review.description} </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}
