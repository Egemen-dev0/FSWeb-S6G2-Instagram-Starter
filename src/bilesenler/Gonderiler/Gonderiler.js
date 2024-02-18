import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";
import Yorumlar from "../Yorumlar/Yorumlar";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, acquiredData } = props;

  return (
    <div className="posts-container-wrapper">
{acquiredData.map((currentPost) => (
  <div key={currentPost.id}>
<Gonderi key={currentPost.id} gonderi={currentPost} />
</div>
))}
 
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
