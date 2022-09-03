
import icon3 from '../../../assets/img/x-mark.png'

const CardThird = () => {
    return (
        <div className="card grid-container" id="penalty" style={{ padding: "6px", marginTop: "20px" }}>
            <div className="item1">
                <img src={icon3} alt="" style={{ width: "49px", height: "49px" }} />
            </div>
            <div className="item2" style={{ padding: "8px" }}>
                <h4>Penalties</h4>
                <p>You can get help in case you’re stuck. Simply press the Request Hint button.</p>
                <p>Once you've requested a hint, a counter shows you when your next hint becomes available.</p>

                <p style={{ marginTop: "20px" }}>Requesting a hint results in a 30 second time penalty.</p>
                <p>Submitting an incorrect answer also results in a 30 second time penalty.</p>
            </div>
        </div>
    )
}

export default CardThird