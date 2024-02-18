import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;

  if(!yorumlar || yorumlar.length === 0) {
    return <div>Yorum Yok Hacı</div>
  }

  return (
    <div>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
    {yorumlar.map((yorum) => (
<Yorum key={yorum.id} yorum={yorum}/>

    ))}
    </div>
  );
};

export default Yorumlar;
