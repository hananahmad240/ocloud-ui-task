import icon1 from '../../../assets/img/clock.png'

const CardFirst = () => {
    return (
        <div className="card grid-container" id='overview'>
            <div className="item1">
                <img src={icon1} alt="" style={{ width: "48px", height: "48px" }} />
            </div>
            <div className="item2">
                <h4>Overview</h4>
                <p>You’ll have 60 minutes to help captain Roger on his adventure to save the botanist.
                </p>
                <p>
                    The time starts counting down as soon as anyone presses Start Game on the next screen.
                </p>
                <p>
                    You can continue playing if you don't make it within 60 minutes, but won't get a spot on the leaderboard.</p>

                <p className="m-5">For each challenge you can use Google or any other website to find answers</p>
            </div>
        </div>
    )
}

export default CardFirst