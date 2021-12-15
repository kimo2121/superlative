import React, { useEffect, useState } from "react";
import "./styles.css";
import gif from "../../assets/gif.gif";
import fadeRainbow from "../../assets/fadeRainbow.png";

const Collection = () => {
  return (
    <div id="About" className="collection">
      <img className="gif" src={gif} alt="" />
      {/* <img src={fadeRainbow} className="fade-rainbow" alt="" /> */}
      <div className="collection-right">
        <h1>A COLLECTION OF 4.444 SLAPES</h1>
        <p>
          A Colorful, Derivative and Superlative MultiVerse. The Superlative
          Apes, not a community, but a loyal family.
        </p>
        <p>
          Superlative Apes is a unique collection of 4444 generated colorful art
          pieces, all made with pure love and hand drawn artwork.
        </p>
        <p>
          These Apes were quite normal back in the days… But apparently, they
          did some weird things with their new lives, as they all live on the
          never ending Blockchain of Ethereum. There are some rumors of them
          entering the MetaVerse of Happyland, which can explain their colorful
          colors and weird appearance.
        </p>
        <p>
          Superlative Apes has been built by a passionate, enthusiastic and
          hardworking team and a powerful grassroots community. The project
          offers incredible utility and is dedicated to support our community.
        </p>
      </div>
    </div>
  );
};

export default Collection;
