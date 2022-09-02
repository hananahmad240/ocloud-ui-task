import React from 'react'
import icon1 from '../assets/img/icon1.png'
import icon2 from '../assets/img/icon2.png'
import icon3 from '../assets/img/icon3.png'

interface ISectionProps {

}

const Sections: React.FC<ISectionProps> = () => {
    return (
        <div className="section" >
            <section className="sec-1">
                <p className="">Echo Bravo Charlie, we have lift off</p>

                <p style={{ marginTop: "10px" }}>We've just received a distress signal from an botanist named Louis, who is carrying out research on a remote island. According to the local weather reports, a cyclone is about to hit the island, potentially destroying everything in its path.</p>

                <p style={{ marginTop: "10px" }}>Most people have already made it to safety, but this stubborn man refused to leave his work behind.</p>
                <p>It is our task to rescue him and bring him and his valuable work back to safety.</p>
                <p>With the power down, there's no way to get in touch, so I'm not sure what to expect.</p>

                <p style={{ marginTop: "10px" }}>
                    I'm currently flying towards one of the islands that he was last known to visit and could really use your help.</p>
                <p style={{ marginBottom: "20px" }}>Let's work together and rescue him, before the cyclone hits the island
                </p>
            </section>

            <section className="sec-2">
                <div className="card grid-container">
                    <div className="item1">
                        <img src={icon1} alt="" />
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

                <div className="card grid-container">
                    <div className="item1">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="item2">
                        <h4>Teamwork</h4>
                        <p>To be successful, you'll need to work closely together.
                        </p>
                        <p>
                            Make sure you have set up a video call in case you are not physically together.
                        </p>
                        <p>
                            You can use Zoom, Teams, The Pub Hub or any other app you'd like </p>
                        <p className="mt-4">Only 1 person in the team needs to submit an answer or request a hint.
                        </p>
                        <p> Before submitting an answer or requesting a hint, first discuss with your team if everyone agrees.
                        </p>
                        <p>
                            After a few seconds everyone will see the result.
                        </p>

                    </div>
                </div>

                <div className="card grid-container">
                    <div className="item1">
                        <img src={icon3} alt="" />
                    </div>
                    <div className="item2">
                        <h4>Penalties</h4>
                        <p>You can get help in case you’re stuck. Simply press the Request Hint button.</p>
                        <p>Once you've requested a hint, a counter shows you when your next hint becomes available.</p>
                        <p>Requesting a hint results in a 30 second time penalty</p>

                        <p className="mt-4">Requesting a hint results in a 30 second time penalty.</p>
                        <p>Submitting an incorrect answer also results in a 30 second time penalty.</p>
                    </div>
                </div>
            </section>


            <div className="centerBtn">
                <button>Centered Button</button>
            </div>
        </div>
    )
}

export default Sections