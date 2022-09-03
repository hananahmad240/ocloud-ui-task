
import icon2 from '../../../assets/img/two-men.png'

const CardSecond = () => {
    return (
        <div className="card grid-container" id="teamwork" style={{ padding: "6px", marginTop: "13px" }} >
            <div className="item1">
                <img src={icon2} alt="" style={{ width: "55px", height: "36px", marginTop: "10px", marginLeft: "0px" }} />
            </div>
            <div className="item2" style={{ padding: "10px" }}>
                <h4>Teamwork</h4>
                <p>To be successful, you'll need to work closely together.
                </p>
                <p>
                    Make sure you have set up a video call in case you are not physically together.
                </p>
                <p>
                    You can use Zoom, Teams, The Pub Hub or any other app you'd like </p>
                <p style={{ marginTop: "20px" }}>Only 1 person in the team needs to submit an answer or request a hint.
                </p>
                <p> Before submitting an answer or requesting a hint, first discuss with your team if everyone agrees.
                </p>
                <p>
                    After a few seconds everyone will see the result.
                </p>

            </div>
        </div>
    )
}

export default CardSecond