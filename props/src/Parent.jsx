import React from 'react'
import Child from "./Child.jsx"
import "./Child.css"
 function Parent() {
    let movies=["https://upload.wikimedia.org/wikipedia/en/f/ff/Akkada_Ammayi_Ikkada_Abbayi.jpg","https://upload.wikimedia.org/wikipedia/en/0/06/Gokulamlo_Seeta.jpg","https://upload.wikimedia.org/wikipedia/en/a/ab/Suswagatham.jpg","https://upload.wikimedia.org/wikipedia/en/7/7d/Tholi_Prema.jpg","https://upload.wikimedia.org/wikipedia/en/b/b1/Thammudu_telugu.jpg","https://upload.wikimedia.org/wikipedia/en/3/30/Badri_Telugu.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a5DF3Hej2usPUln010f9pJdTWS6H9xmhOBaJaUxbP6WVXwQu3CWjzFJSpu8mBWf-hLw&usqp=CAU","https://upload.wikimedia.org/wikipedia/en/c/c2/Johnny_2003_poster.jpg","https://upload.wikimedia.org/wikipedia/en/3/3d/Gudumba.jpg","https://upload.wikimedia.org/wikipedia/en/0/0d/Shankar_Dada_MBBS_Poster.jpg","https://upload.wikimedia.org/wikipedia/en/3/3f/Balu2.jpg","https://upload.wikimedia.org/wikipedia/en/5/5e/Bangaram_film_poster.jpg","https://www.justwatch.com/images/backdrop/202520478/s640/annavaram/annavaram","https://upload.wikimedia.org/wikipedia/en/9/9a/Shankar_Dada_Zindabad_poster.jpg","https://upload.wikimedia.org/wikipedia/en/5/56/Jalsa_poster.jpg","https://upload.wikimedia.org/wikipedia/en/1/1b/Puliposter.jpg","https://upload.wikimedia.org/wikipedia/en/4/42/Teen_Maar.jpg","https://upload.wikimedia.org/wikipedia/en/6/61/Panjaa_poster.jpg","https://upload.wikimedia.org/wikipedia/en/9/90/Gabbar_singh_poster.jpg","https://upload.wikimedia.org/wikipedia/en/7/72/Cameraman_gangatho_rambabu_poster.jpg","https://upload.wikimedia.org/wikipedia/en/f/fd/Attarintiki_Daredi.jpg","https://upload.wikimedia.org/wikipedia/en/e/e0/Gopala_Gopala_2015_poster.jpg","https://upload.wikimedia.org/wikipedia/en/d/d5/Sardaar_Gabbar_Singh.jpg","https://upload.wikimedia.org/wikipedia/en/3/30/Katamarayudu_poster.jpg","https://upload.wikimedia.org/wikipedia/en/9/99/Agnyaathavaasi_poster.jpg","https://upload.wikimedia.org/wikipedia/en/9/97/Vakeel_Saab.jpg","https://upload.wikimedia.org/wikipedia/en/b/bb/Bheemla_Nayak.jpg","https://upload.wikimedia.org/wikipedia/en/7/71/Bro_Teaser.png","https://upload.wikimedia.org/wikipedia/en/0/0c/OG_Poster.jpg","https://upload.wikimedia.org/wikipedia/en/a/af/Hari_Hara_Veera_Mallu.jpg","https://upload.wikimedia.org/wikipedia/en/d/d3/Ustaad_Bhagat_Singh_Poster.jpg"];
    let titles = ["Akkada Ammayi Ikkada Abbayi","Gokulamlo Seeta","Suswagatham","Tholi Prema","Thammudu","Badri","Kushi","Johnny","Gudumba Shankar","Shankar Dada M.B.B.S.","Balu","Bangaram","Annavaram","Shankar Dada Zindabad","Jalsa","Puli","Teen Maar","Panjaa","Gabbar Singh","Cameraman Gangatho Rambabu","Attarintiki Daredi","	Gopala Gopala","Sardaar Gabbar Singh","Katamarayudu","Agnyaathavaasi","Vakeel Saab","Bheemla Nayak","Bro","OG","HARI HARA VEERAMALLU","USTAD BHAGATSINGH"];
  return (
       <div id="movies" >
        {movies.map((mov,index) => (
          <Child movies={mov} titles = {titles[index]}/>
        ))}
       </div>
  );
}
export default Parent;