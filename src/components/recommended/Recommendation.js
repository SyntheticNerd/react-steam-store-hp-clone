import React from "react";
import { Disc, ImgCont, ImgLg, Price, RecBox, RevBox } from "./RecStyles";
import UserInfo from "./UserInfo";

export default function Recommendation() {
  return (
    <RecBox>
      <ImgCont>
        <ImgLg
          src={process.env.PUBLIC_URL + "/images/back_4_blood_main.png"}
          alt=''
        />
        <div>
          <Disc><p>-00%</p></Disc>
          <Price><p>$00.00</p><strong>$00.00</strong></Price>
        </div>
      </ImgCont>
      <RevBox>
        <b>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu tristique fusce proin odio nullam. Nibh fermentum blandit nunc sem id sit sagittis. Vitae...”</b>
        <p>Read Entire Review</p>
        {/* change p to anchor for production */}
        <UserInfo/>
      </RevBox>
    </RecBox>
  );
}
