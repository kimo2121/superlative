import React from "react";
import "./styles.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import star1 from "../../assets/star1.png";
import star2 from "../../assets/star2.png";
import planet from "../../assets/planet.png";
import Stars from "../Stars/Stars";

const Exclusive = () => {
  return (
    <div id="Perks" className="exclusive">
      <h1>EXCLUSIVE MEMBERS-ONLY BENEFITS</h1>
      <div className="exclusive-first">
        <div>
          <img src={icon4} alt="" />
          <h4>
            GOOD <br /> KARMA
          </h4>
          <p>
            Get good karma. We’ll do something back against global hunger as a
            community.
          </p>
        </div>
        <Stars img={star1} className="star7" />
        <Stars img={star1} className="star8" />
        <Stars img={star1} className="star9" />
        <Stars img={star1} className="star10" />
        <Stars img={star1} className="star11" />
        <div>
          <img src={icon1} alt="" />
          <h4>
            METAVERSE
            <br />
            GALLERY
          </h4>
          <p>
            Exclusive access, giveaways and opportunities to display and trade
            your art.
          </p>
        </div>
        {/* <Stars img={star1} className="star8" /> */}
        <div>
          <img src={icon2} alt="" />
          <h4>
            GLOBAL <br />
            TOUR
          </h4>
          <p>Access to our worldwide global tour. Maybe we’ll see you soon!</p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h4>
            LETS GET <br /> LOOSE
          </h4>
          <p>Access to private in-real party’s.</p>
        </div>
        <div>
          {/* <Stars img={planet} className="star9" /> */}
          <img src={icon6} alt="" />
          <h4>
            FREE <br /> MINT-PASS
          </h4>
          <p>Receive a free mint-pass for future minting possibilities.</p>
        </div>
        {/* <Stars img={star1} className="star10" /> */}
        <div>
          <img src={icon5} alt="" />
          <h4>
            COMMERCIAL <br /> RIGHTS
          </h4>
          <p>
            Get full ownership of your Superlative Apes NFT, including both
            creative and commercial rights.
          </p>
        </div>
        {/* <Stars img={star2} className="star11" /> */}
        <div>
          <img src={icon7} alt="" />
          <h4>
            MEMBERS-ONLY <br />
            BENEFITS
          </h4>
          <p>
            Holders will profit from 25% of all fee profits made on OpenSea.
          </p>
        </div>
        <div>
          <img src={icon8} alt="" />
          <h4>
            EXCLUSIVE <br />
            MERCHANDISE
          </h4>
          <p>
            Access to exclusive memberships in our Superlative Apes Merch Store.
          </p>
        </div>
        {/* <Stars img={star2} className="star12" /> */}
      </div>
    </div>
  );
};

export default Exclusive;
