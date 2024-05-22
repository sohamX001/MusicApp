//music.play()
const music = new Audio('audio/1.mp3');
let index = 0;
window.onload = () =>{
    index = 1;
    // music.src = `audio/${index}.mp3`;
    bottom_play_poster.src = `img/${index}.jpg`;

    let songTitle = songsLeft.filter((els)=>{
        return els.id == index;
    })
    songTitle.forEach((elss)=>{
        let { songName1, poster } = elss;
        title.innerHTML = songName1;
        bottom_play_poster.src = poster;
    })

    let end_time = document.getElementById('end-time');
    let music_dur = music.duration;
    //music duration add OR end-time
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1<10) {
        end_time.innerText = `0${min1}:0${sec1}`
    }else{
        end_time.innerText = `0${min1}:${sec1}`
    }

    bot_skip_prev.style.opacity = "0.3";
    bot_skip_prev.disabled = true;

    document.getElementById('vol-icon').innerText = "volume_down";
    document.getElementById('vol').value = "50";
    document.getElementsByClassName('vol-bar')[0].style.width = "50%";
    document.getElementById('vol-dot').style.left = "50%";
    music.volume = .5;
    
    bgChange(index);
}




// ---------- MUSIC DATA ----------

const songsLeft = [
    {
        id: 1,
        songName1: `Rangisari<br />
        <div class="artist">Kanishk Seth, Kavita Seth</div>`,
        songName2: `<h5>Rangisari</h5>
        <h5>Kanishk Seth, Kavita Seth</h5>`,
        downName: `Rangisari - Kanishk Seth, Kavita Seth`,
        poster: 'img/1.jpg',
        bg_img: 'img/bg/1_kanishk.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Kanishk Seth, Kavita Seth</h1>
        <p>Kanishk Seth and Kavita Seth are an Indian composer, singer, and songwriter</p>
            
        <div class="content">
          <p>mother-son duo from Mumbai. Kanishk became well-known after his 2015 fusion album Trance With Khusrow, which he produced with Kavita and was nominated for a Global Indian Music Academy Award. </p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 2,
        songName1: `Dil ke dastak<br />
        <div class="artist">Karthik Rao,Shilpa Surroch</div>`,
        songName2: `<h5>Dil ke dastak</h5>
        <h5>Karthik Rao, Shilpa Surroch</h5>`,
        downName: `Dil ke dastak - Karthik Rao, Shilpa Surroch`,
        poster: 'img/2.jpg',
        bg_img: 'img/bg/2_karthik_shilpa.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Karthik Rao, Shilpa Surroch</h1>
        <p>Karthik Rao, a singer-songwriter and sound engineer graduate from FTII, boasts</p>
            
        <div class="content">
          <p>seven years of guitar-playing experience and four years of collaboration with TVF, contributing music to popular web series like Cubicles, Kota Factory, and Bachelors. Shilpa Surroch is a versatile music artist known for her captivating vocals and dynamic performances, with a repertoire spanning various genres and languages.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 3,
        songName1: `Roz Roz<br />
        <div class="artist">Shilpa Rao, Rajan Batra</div>`,
        songName2: `<h5>Roz Roz</h5>
        <h5>Shilpa Rao, Rajan Batra</h5>`,
        downName: `Roz Roz - Shilpa Rao, Rajan Batra`,
        poster: 'img/3.jpg',
        bg_img: 'img/bg/3_yellow_diary.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Shilpa Rao, Rajan Batra</h1>
        <p>Rajan Batra is a songwriter, vocalist, and composer - widely known as the</p>
            
        <div class="content">
          <p>frontman of 'The Yellow Diary'. Known for his Melodic voice and deep lyrics, Rajan predominantly likes to write in Hindi and Punjabi. Shilpa Rao is a renowned Indian playback singer known for her soulful voice and versatility across genres. With a career spanning over a decade, she has delivered numerous chart-topping hits in Bollywood and regional music industries. Her notable songs include "Khuda Jaane," "Malang," and "Ghungroo".</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 4,
        songName1: `When we feel young<br />
        <div class="artist">When Chai Met Toast</div>`,
        songName2: `<h5>When we feel young</h5>
        <h5>When Chai Met Toast</h5>`,
        downName: `When we feel young - When Chai Met Toast`,
        poster: 'img/4.jpg',
        bg_img: 'img/bg/4_wcmt.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>When Chai Met Toast</h1>
        <p>When Chai Met Toast is a pop band from India. The quartet came into being</p>
            
        <div class="content">
          <p>with their debut EP 'Joy of Little Things' in 2017. Over the next year, they crafted their sophomore offering 'Believe', establishing them as genre pioneers in the country. The band's first full length album 'When We Feel Young' (2021) propelled their worldwide listener base. When Chai Met Toast consists of Ashwin Gopakumar, Achyuth Jaigopal, Palee Francis and Pai Sailesh, who met in the music circles of Kerala.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 5,
        songName1: `Vengo del futuro<br />
        <div class="artist">KURT</div>`,
        songName2: `<h5>Vengo del futuro</h5>
        <h5>KURT</h5>`,
        downName: `Vengo del futuro - KURT`,
        poster: 'img/5.jpg',
        bg_img: 'img/bg/5_kurt.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>KURT</h1>
        <p>Kurt Schmidt Ramos, also known as KURT, is a Latin Pop singer-songwriter</p>
              
        <div class="content">
          <p>from Mexico City. His 2021 album La Vida was nominated for a Latin Grammy for Best Traditional Vocal Pop Album. His 2022 deluxe edition of La Vida, La Vida (Deluxe), includes four new songs, including the 2023 single "Prometo". KURT has also collaborated with Sting on a Spanish version of "For Her Love" called "Por Su Amor".</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 6,
        songName1: `Saanware Aijaiyo<br />
        <div class="artist">Kanishk Seth, Kavita Seth</div>`,
        songName2: `<h5>Saanware Aijaiyo</h5>
        <h5>Kanishk Seth, Kavita Seth</h5>`,
        downName: `Saanware Aijaiyo - Kanishk Seth, Kavita Seth`,
        poster: 'img/6.jpg',
        bg_img: 'img/bg/1_kanishk.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Kanishk Seth, Kavita Seth</h1>
        <p>Kanishk Seth and Kavita Seth are an Indian composer, singer, and songwriter</p>
            
        <div class="content">
          <p>mother-son duo from Mumbai. Kanishk became well-known after his 2015 fusion album Trance With Khusrow, which he produced with Kavita and was nominated for a Global Indian Music Academy Award. </p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 7,
        songName1: `Jogan<br />
        <div class="artist">Lost Stories, Devashri Manohar</div>`,
        songName2: `<h5>Jogan</h5>
        <h5>Lost Stories, Devashri Manohar</h5>`,
        downName: `Jogan - Lost Stories, Devashri Manohar`,
        poster: 'img/7.jpg',
        bg_img: 'img/bg/7_lost_stories.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Lost Stories, Devashri Manohar</h1>
        <p>Lost Stories is a DJ/producer duo composed of Prayag Mehta and Rishab Joshi,</p>
            
        <div class="content">
          <p>labeled as the "Scene Starters" by DJ Mag. Ranked #52 on DJ Mag's list of Top 100 DJs in the world (2016-17), they are best known for their ability to uniquely blend Indian folk sounds with electronic music. Devashri Manohar is a dynamic music artist known for her captivating vocals and emotive performances. With a distinctive style blending elements of pop, indie, and folk, she has garnered a dedicated following.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 8,
        songName1: `Kahan Hoon Main<br />
        <div class="artist">Shweta Srivastava</div>`,
        songName2: `<h5>Kahan Hoon Main</h5>
        <h5>Shweta Srivastava</h5>`,
        downName: `Kahan Hoon Main - Shweta Srivastava`,
        poster: 'img/8.jpg',
        bg_img: 'img/bg/8_shweta.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Shweta Srivastava</h1>
        <p>Shweta Srivastava is a Mumbai based vocalist, composer and lyricist. Her</p>
            
        <div class="content">
          <p>multi-genre inspired music possesses a distinctiveness that is rooted in emotions, authenticity and relatability.  She has trained under vocal coaches Vasundhara Vee, Shannon Donald and Ronkini Gupta. Shweta also designs vocal harmonies and had performed at Lollapalooza (2023) alongside The Yellow Diary as a vocal extension to the band.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 9,
        songName1: `Aasmaan<br />
        <div class="artist">Anumita Nadesan, Raghav Meattle, Tanishk Bagchi</div>`,
        songName2: `<h5>Aasmaan</h5>
        <h5>Anumita Nadesan, Raghav Meattle, Tanishk Bagchi</h5>`,
        downName: `Aasmaan - Anumita Nadesan, Raghav Meattle, Tanishk Bagchi`,
        poster: 'img/9.jpg',
        bg_img: 'img/bg/9_farzi.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Anumita Nadesan, Raghav Meattle, Tanishk Bagchi</h1>
        <p>Karthik Rao, a singer-songwriter and sound engineer graduate from FTII, boasts</p>
        
        <div class="content">
          <p>Anumita Nadesan is a singer-songwriter, content creator, and YouTuber. Having classically trained for over 15 years, In early 2021, Anumita's voice went viral on the internet, and she amassed over 2,00,000 subscribers and 15 million views on YouTube along with a highly engaging community of over 2,60,000 fans on Instagram in less than 10 months. Raghav Meattle, describes his music as 'vocal first', with great attention paid to lyrics and melodies. Raghav's music has reached far and wide - from live venues across the country to the screens of OTT shows like Farzi, Rafta Rafta.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 10,
        songName1: `Youth<br />
        <div class="artist">Daughter</div>`,
        songName2: `<h5>Youth</h5>
        <h5>Daughter</h5>`,
        downName: `Youth - Daughter`,
        poster: 'img/10.jpg',
        bg_img: 'img/bg/10_daughter.png',
        bg_img_dau: 'img/bg/11_daughter.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Daughter</h1>
        <p>Incorporating moody folk and hushed electronics in ways that recall Cat</p>
            
        <div class="content">
          <p>Power as well as The xx, Daughter began as the solo project of singer/guitarist Elena Tonra. Tonra was performing on her own when she met guitarist Igor Haefeli, who joined Daughter along with drummer Remi Aguilella to complete the band's lineup. The trio self-released a demo as well as their 2011 debut EP, His Young Heart, which led to Mumford & Sons' label Communion releasing their second EP, the more polished and eclectic The Wild Youth, later that year. Early in 2012, Daughter signed with 4AD, which released the single 'Smother' that October. The band's debut album, If You Leave, arrived in April 2013. After an extensive tour in support of the debut, Daughter re-entered the studio to begin recording their second album, Not to Disappear. Next project, Daughter composed a score to the video game Life Is Strange: Before the Storm. In 2018, Tonra released an eponymous album under the solo moniker Ex:Re. In January 2023, Daughter returned with single 'Be On Your Way' from the upcoming album Stereo Mind Game, released 7 April.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
    {
        id: 11,
        songName1: `A Hole In The Earth<br />
        <div class="artist">Daughter</div>`,
        songName2: `<h5>A Hole In The Earth</h5>
        <h5>Daughter</h5>`,
        downName: `A Hole In The Earth - Daughter`,
        poster: 'img/11.jpg',
        bg_img: 'img/bg/10_daughter.png',
        artist_name: `<input id="ch" type="checkbox">

        <h1>Daughter</h1>
        <p>Incorporating moody folk and hushed electronics in ways that recall Cat</p>
            
        <div class="content">
          <p>Power as well as The xx, Daughter began as the solo project of singer/guitarist Elena Tonra. Tonra was performing on her own when she met guitarist Igor Haefeli, who joined Daughter along with drummer Remi Aguilella to complete the band's lineup. The trio self-released a demo as well as their 2011 debut EP, His Young Heart, which led to Mumford & Sons' label Communion releasing their second EP, the more polished and eclectic The Wild Youth, later that year. Early in 2012, Daughter signed with 4AD, which released the single 'Smother' that October. The band's debut album, If You Leave, arrived in April 2013. After an extensive tour in support of the debut, Daughter re-entered the studio to begin recording their second album, Not to Disappear. Next project, Daughter composed a score to the video game Life Is Strange: Before the Storm. In 2018, Tonra released an eponymous album under the solo moniker Ex:Re. In January 2023, Daughter returned with single 'Be On Your Way' from the upcoming album Stereo Mind Game, released 7 April.</p>
          <button id="view-art"><label for="ch">Back</label></button>
        </div>

        <div class="artist-btn">
          <button id="view-art"><label for="ch">View artist</label></button>
          <button id="follow">
            <span class="material-symbols-rounded">person_add</span>
          </button>
        </div>`
    },
]




// ---------- img & artist name add to html -----------

Array.from(document.getElementsByClassName('data')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songsLeft[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songsLeft[i].songName1;
})

Array.from(document.getElementsByClassName('card')).forEach((f, j)=>{
    f.getElementsByTagName('img')[0].src = songsLeft[j].poster;
    f.getElementsByClassName('card-art-detail')[0].innerHTML = songsLeft[j].songName2;
})

// -------------- card opacity ----------------

const btnOpacity = (index)=>{
    if (index== Array.from(document.getElementsByClassName('card')).length) {
        bot_skip_next.disabled = true;
        bot_skip_next.style.opacity = "0.3";
        bot_skip_prev.disabled = false;
        bot_skip_prev.style.opacity = "1.0";
    } 
    else if(index>Array.from(document.getElementsByClassName('card')).length){
        index = Array.from(document.getElementsByClassName('card')).length;
        bot_skip_next.disabled = true;  
    } 
    else if(index==1){
        bot_skip_prev.disabled = true;  
        bot_skip_prev.style.opacity = "0.3";
        bot_skip_next.disabled = false;
        bot_skip_next.style.opacity = "1.0";
    } 
    else if(index<1){
        index = 1;
        bot_skip_prev.disabled = true;  
    } 
    else {
        bot_skip_next.disabled = false;
        bot_skip_prev.disabled = false;
        bot_skip_next.style.opacity = "1.0";
        bot_skip_prev.style.opacity = "1.0";
    }
}


function bgChange(index) {
    // let img = `${songsLeft[index-1].bg_img}`;
    // let root = document.getElementById('right-menu');
    // root.style.setProperty("--bg-img", 'url("img/alanbg.png")');


    let bg = document.querySelector(':root');
    const screenWidth = window.innerWidth;
    if (screenWidth<=430 && (index==10 || index==11)) {
        bg.style.setProperty("--bg-img", `url("${songsLeft[9].bg_img_dau}")`);
        
    }
    else{
        bg.style.setProperty("--bg-img", `url("${songsLeft[index-1].bg_img}")`);
        // console.log("bgImag");
        
    }

    // const smallScreenQuery = window.matchMedia('(max-width: 430px)');
    // const largeScreenQuery = window.matchMedia('(min-width: 431px)');

    // function updateBackgroundImage(e) {
    //     if (e.matches) {
    //       // Small screen
    //       background.style.backgroundImage = 'url(small-bg.jpg)';
    //     } else {
    //       // Large screen
    //       background.style.backgroundImage = 'url(large-bg.jpg)';
    //     }
    //   }

    // window.addEventListener('resize', () => {
    //     updateBackgroundImage(smallScreenQuery);
    //     updateBackgroundImage(largeScreenQuery);
    //   });
    // bg.style.backgroundImage = `url('${songsLeft[index-1].poster}')`;
    
    // let bg = document.header;
    // bg.style.backgroundColor = "#ff0000";
    // bg.style.background = "radial-gradient(at 40% 20%, hsla(352,75%,43%,1) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(222,62%,57%,1) 0px, transparent 50%), radial-gradient(at 100% 51%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 57%, hsla(354,100%,50%,1) 0px, transparent 50%), radial-gradient(at 33% 100%, hsla(193,72%,48%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,92%,28%,1) 0px, transparent 50%)";

    let art_content = document.getElementsByClassName('artist-content')[0];

    while (art_content.firstChild) {
        art_content.removeChild(art_content.firstChild);
    }

    let art_content_detail = document.createElement('div');
    art_content_detail.classList.add('details');
    art_content_detail.innerHTML = `${songsLeft[index-1].artist_name}`;
    
    art_content.appendChild(art_content_detail);

// mobile view change in daughter poster

    

}





// ============== LEFT MENU ==============   


let bottom_play_poster = document.getElementById('bottom-play-poster');
let title = document.getElementById('title');
// let download_music = document.getElementById('download');
// let playlist_play_btn = document.getElementsByClassName('playlist-play-btn')


//          ___ func for bg ____

const makeAllbg1 = () =>{
    Array.from(document.getElementsByClassName('data')).forEach((e)=>{
        e.style.background = 'rgba(184, 184, 184, .0)';
    })
}

const makeAllbg2 = () =>{
    Array.from(document.getElementsByClassName('card')).forEach((e)=>{
        e.style.background = 'rgba(184, 184, 184, .0)';
    })
}

// const makeAllbt1 = () =>{
//     Array.from(document.getElementsByClassName('playlist-play-btn')).forEach((e)=>{
//         e.innerText = 'play_arrow';
//     })
// }

const songClick = ({ id, songName1, poster })=>{
    index = id;
    music.src = `audio/${index}.mp3`;
    music.play();
    bot_play.innerText = "pause";
    title.innerHTML = songName1;
    bottom_play_poster.src = poster;

    btnOpacity(index);
    // console.log("abcsdsf");
    makeAllbg1();
    makeAllbg2();
    Array.from(document.getElementsByClassName('data'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    Array.from(document.getElementsByClassName('card'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";

    bgChange(index);
}




//          _____ left hover ______

let left_hover = document.getElementById('left-hover');
let left_menu = document.getElementsByClassName('left-menu')[0];
// let left_menu_active = document.getElementsByClassName('left-menu-active')[0];
let right_menu = document.getElementsByClassName('right-menu')[0];

left_hover.addEventListener('click', ()=>{
    // left_menu.style.transform = "unset";
    left_menu.classList.toggle('left-menu-active');
})

right_menu.addEventListener('click', ()=>{
    if (left_menu.classList.contains('left-menu-active')) {
        // left_menu.style.transform = "translateX(-100%)";
        left_menu.classList.toggle('left-menu-active');
    }
})


//          ____ play button click event ____


// Array.from(document.getElementsByClassName('playlist-song-item')).forEach((e) => {
//     e.addEventListener('click', (el)=>{
//         if (music.paused || music.currentTime <= 0) {
//             index = el.target.id;
//             // if (index==1) {
//             //     bot_skip_prev.disabled = true;
//             //     bot_skip_prev.style.opacity = "0.3";
//             // } 
//             // else if(index==Array.from(document.getElementsByClassName('data')).length){
//             //     bot_skip_next.disabled = true;
//             //     bot_skip_next.style.opacity = "0.3";
//             // }
//             // else{
//             //     bot_skip_prev.disabled = false;
//             //     bot_skip_prev.style.opacity = "1.0";
//             // }
//             console.log("abc");
//             music.src = `audio/${index}.mp3`;
//             music.play();
//             // download_music.href = `audio/${index}.mp3`;
            
//             bot_play.innerText = "pause";
            
//         } else {
//             // music.pause();
//             // // el.innerText = 'play_arrow';
//             // bot_play.innerText = "play_arrow";
//             // playlist_play_btn.innerText = "play_arrow";
//             index = el.target.id;
//             music.src = `audio/${index}.mp3`
//             music.play();
//             // download_music.href = `audio/${index}.mp3`;
//         }
//         btnOpacity(index);

//         let songTitle = songsLeft.filter((els)=>{
//             return els.id == index;
//         })
        
//         songTitle.forEach((elss)=>{
//             let { songName1, poster } = elss;
//             title.innerHTML = songName1;
//             bottom_play_poster.src = poster;
//             // download_music.setAttribute('download', downName);
//         })

//         makeAllbg1();
//         makeAllbg2();
//         Array.from(document.getElementsByClassName('data'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
//         Array.from(document.getElementsByClassName('card'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
//         // makeAllbt1();
//         // el.target.innerText = "pause"
//     })
// })

// ------------- for left playlist item song click -------------

let playlist_songs = document.getElementsByClassName('playlist-songs')[0];
let right_pop_cards = document.getElementsByClassName('pop-cards')[0];

songsLeft.forEach(ele =>{
    const { id, songName1, songName2, poster } = ele;

    //playlist-songs
    let playlist_song_item = document.createElement('a');
    playlist_song_item.classList.add('data');
    playlist_song_item.href = `#${id}`;
    playlist_song_item.innerHTML = `
    <span>${id}</span>
    <img src="${poster}" alt="" />
    <h5>
        ${songName1}
    </h5>`;
    playlist_songs.appendChild(playlist_song_item);
    
    //click-event-playlist-songs
    playlist_song_item.addEventListener('click', ()=>{
       songClick({ id, songName1, poster });
    })

    //right-card-songs
    let card_song_item = document.createElement('a');
    card_song_item.classList.add('card');
    card_song_item.href = `#${id}`;
    card_song_item.innerHTML = `
    <div class="img-play">
        <img src="${poster}" alt="" />
    </div>
    <div class="card-art-detail">
        ${songName2}
    </div>`;
    right_pop_cards.appendChild(card_song_item);

    //click-event-right-cards
    card_song_item.addEventListener('click', ()=>{
       songClick({ id, songName1, poster });
    })
})




// ==================== BOTTOM PLAY ====================

//              ____ play button ____

let bot_play = document.getElementById('bot-play');
bot_play.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        // let ind = index;
        // console.log(abc);
        // music.src = `audio/${index}.mp3`
        // bottom_play_poster.src = `img/${index}.jpg`
        music.play();
        bot_play.innerText = "pause";
        
        // Array.from(document.getElementsByClassName('playlist-play-btn'))[0].forEach((e) =>{
        //     e.innerText = "pause";
        // })
    } else {
        music.pause();
        bot_play.innerText = "play_arrow";
        // playlist_play_btn.innerText = "play_arrow";
    //     Array.from(document.getElementsByClassName('playlist-play-btn')).forEach((e) =>{
    //         e.innerText = 'play_arrow';
    //     })
    }
})

//              ____ prev button ____

let bot_skip_prev = document.getElementById('bot-skip-prev');
let bot_skip_next = document.getElementById('bot-skip-next');

bot_skip_prev.addEventListener('click', ()=>{
    index -= 1;
    if (index==1) {
        bot_skip_prev.disabled = true;
        music.src = `audio/${index}.mp3`;
        music.play();
        bot_play.innerText = "pause";
        bot_skip_prev.style.opacity = "0.3";
    } 
    else if(index<1){
        index=1;
        bot_skip_prev.disabled = true;
    }
    else {
        music.src = `audio/${index}.mp3`;
        music.play();
        bot_play.innerText = "pause";
        bot_skip_prev.disabled = false;
        bot_skip_next.disabled = false;
        bot_skip_next.style.opacity = "1.0";
        bot_skip_prev.style.opacity = "1.0";
    }

    let songTitle = songsLeft.filter((els)=>{
        return els.id == index;
    })
    
    songTitle.forEach((elss)=>{
        let { songName1, poster } = elss;
        title.innerHTML = songName1;
        bottom_play_poster.src = poster;
    })

    makeAllbg1();
    makeAllbg2();
    Array.from(document.getElementsByClassName('data'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    Array.from(document.getElementsByClassName('card'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    // makeAllbt1();
    bot_play.innerText = "pause";

    bgChange(index);
})


//              ____ next button ____

bot_skip_next.addEventListener('click', ()=>{
    index++;
    if (index== Array.from(document.getElementsByClassName('data')).length) {
        bot_skip_next.disabled = true;
        music.src = `audio/${index}.mp3`;
        music.play();
        bot_play.innerText = "pause";
        bot_skip_next.style.opacity = "0.3";
    } 
    else if(index>Array.from(document.getElementsByClassName('data')).length){
        index = Array.from(document.getElementsByClassName('data')).length;
        bot_skip_next.disabled = true;
    }
    else {
        music.src = `audio/${index}.mp3`;
        music.play();
        bot_play.innerText = "pause";
        bot_skip_next.disabled = false;
        bot_skip_prev.disabled = false;
        bot_skip_next.style.opacity = "1.0";
        bot_skip_prev.style.opacity = "1.0";
    }

    let songTitle = songsLeft.filter((els)=>{
        return els.id == index;
    })
    
    songTitle.forEach((elss)=>{
        let { songName1, poster } = elss;
        title.innerHTML = songName1;
        bottom_play_poster.src = poster;
    })

    makeAllbg1();
    makeAllbg2();
    Array.from(document.getElementsByClassName('data'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    Array.from(document.getElementsByClassName('card'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    // makeAllbt1();
    bot_play.innerText = "pause";

    bgChange(index);
})


//              ____ slider _____

let start_time = document.getElementById('start-time');
let end_time = document.getElementById('end-time');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_time = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    //music duration add OR end-time
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1<10) {
        end_time.innerText = `0${min1}:0${sec1}`
    }else{
        end_time.innerText = `0${min1}:${sec1}`
    }
    
    //music current time add start-time
    let min2 = Math.floor(music_time / 60);
    let sec2 = Math.floor(music_time % 60);
    if (sec2<10) {
        start_time.innerText = `0${min2}:0${sec2}`
    }else{
        start_time.innerText = `0${min2}:${sec2}`
    }


    //seek-bar
    let progBar = parseInt((music_time/music_dur)*100)
    seek.value = progBar;
    // console.log(seek.value);
    bar2.style.width = `${seek.value}%`;
    dot.style.left = `${seek.value}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})



//              ____ bottom right elements ____



// ------------ download button ----------


const downloadButton = document.getElementById('download');

// Add a click event listener to the download button
downloadButton.addEventListener('click', ()=> {
    // songsLeft.forEach(e =>{
    //     const { id, downName } = e;
        
        // Create a temporary anchor element
        const tempLink = document.createElement('a');
        tempLink.href = `audio/${index}.mp3`;
        tempLink.download = `${songsLeft[index-1].downName}.mp3`; // Set the desired file name
        
        // Append the anchor element to the document
        document.body.appendChild(tempLink);
        
        // Trigger the click event on the anchor element to initiate the download
        tempLink.click();
        
        // Remove the temporary anchor element from the document
        document.body.removeChild(tempLink);
    // });
})




// -------------- volume ------------

let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar')[0];
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.innerText = 'volume_off';
    } 
    else if(vol.value > 0 && vol.value < 75){
        vol_icon.innerText = 'volume_down';
    }
    else{
        vol_icon.innerText = 'volume_up';
    }

    vol_bar.style.width = `${vol.value}%`;
    vol_dot.style.left = `${vol.value}%`;
    music.volume = vol.value / 100;
})

let isMuted = false;
vol_icon.addEventListener('click', ()=>{
    // const scrSize = window.innerWidth;
    isMuted = !isMuted;
    music.muted = isMuted;
    // console.log("muted");

    if (isMuted) {
        vol_icon.innerText = 'volume_off';
    } else{
        vol_icon.innerText = 'volume_down';
    }
    

    
})


// ---------- up arrow when screen size 660px ---------------

let ic_up = document.getElementById('ic-up');
let download = document.getElementById('download');
let vol_ic= document.getElementById('vol-icon');
let shuffle= document.getElementsByClassName('shuffle')[0];
let bot_ic= document.getElementsByClassName('bot-rt-icons')[0];

ic_up.addEventListener('click', ()=>{
    bot_ic.classList.toggle('bot-rt-icons-active');
    download.classList.toggle('bot-ic-dis');
    vol_ic.classList.toggle('bot-ic-dis');
    shuffle.classList.toggle('bot-ic-dis');
    
})




// =============== MOBILE SCREEN SIZE ===================
// ======================================================


let song_up = document.getElementById('song-up');
let bot_song_play = document.getElementsByClassName('bottom-play')[0];
let act_bottom_play_icons = document.getElementsByClassName('bottom-play-icons')[0];
let act_play_seek = document.getElementsByClassName('play-seek')[0];
let act_art_data = document.getElementsByClassName('art-data')[0];
let act_bot_rt_icons = document.getElementsByClassName('bot-rt-icons')[0];
let act_img = document.getElementById('bottom-play-poster');
let act_title = document.getElementById('title');
let act_end_time = document.getElementById('end-time');
let act_start_time = document.getElementById('start-time');
let act_song_down = document.getElementById('song-down');

act_art_data.addEventListener('click', ()=>{
    bot_song_play.classList.add('bottom-active');
    
    act_img.classList.add('img-active');
    act_title.classList.add('title-active');
    act_end_time.classList.add('end-time-active');
    act_start_time.classList.add('start-time-active');
    act_play_seek.classList.add('play-seek-active');
    act_song_down.classList.add('song-down-active');
    act_art_data.classList.add('art-data-active');
    act_bottom_play_icons.classList.add('bottom-play-icons-active');
    act_bot_rt_icons.style.display = "unset";

    // act_bot_rt_icons.removeClass('hover')
    // allEle[].classList;
    // .add('bottom-active');
    
    

    console.log("hello");
})


act_song_down.addEventListener('click', ()=>{
    bot_song_play.classList.remove('bottom-active');
    act_img.classList.remove('img-active');
    act_title.classList.remove('title-active');
    act_end_time.classList.remove('end-time-active');
    act_start_time.classList.remove('start-time-active');
    act_play_seek.classList.remove('play-seek-active');
    act_song_down.classList.remove('song-down-active');
    act_art_data.classList.remove('art-data-active');
    act_bottom_play_icons.classList.remove('bottom-play-icons-active');
    act_bot_rt_icons.style.display = "none";

    console.log("hellokjfnkdnfkjsdn");
})








// ================== RIGHT MENU ==================



// -------------- nav-menu for 660px ------------

let nav_ham = document.getElementById('nav-ham');
let nav_close = document.getElementById('nav-close');
let nav_list = document.getElementById('nav-list');

nav_ham.addEventListener('click', ()=>{
    nav_ham.classList.toggle('nav-ham-active');
    // nav_close.classList.toggle('nav-close-active');
    // nav_close.style.display = "block";
    nav_close.style.visibility = "visible";
    nav_list.classList.toggle('nav-active');
})
nav_close.addEventListener('click', ()=>{
    // nav_close.style.display = "none";
    nav_close.style.visibility = "hidden";
    nav_list.classList.toggle('nav-active');
    nav_ham.classList.toggle('nav-ham-active');
})




// ------------ search -----------

let search_result = document.getElementsByClassName('search-result')[0];
songsLeft.forEach(ele =>{
    const { id, songName1, poster } = ele;
    let search_card = document.createElement('a');
    search_card.classList.add('search-card');
    search_card.href = `#` + id;
    search_card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName1}
    </div>`;

    search_result.appendChild(search_card);

    search_card.addEventListener('click', ()=>{
        index = id;
        music.src = `audio/${index}.mp3`;
        music.play();
        bot_play.innerText = "pause";
        title.innerHTML = songName1;
        bottom_play_poster.src = poster;

        btnOpacity(index);

        makeAllbg1();
        makeAllbg2();
        Array.from(document.getElementsByClassName('data'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
        Array.from(document.getElementsByClassName('card'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
        search_result.style.display = "none";

        bgChange(index);
    })
})

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
        
        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
    }
})




// ----------right menu arrows (left & right)------------


let pop_song_left = document.getElementById('ps-left');
let pop_song_right = document.getElementById('ps-right');
let pop_cards = document.getElementsByClassName('pop-cards')[0];

pop_song_left.addEventListener('click', ()=>{
    pop_cards.scrollLeft -= 300;
})
pop_song_right.addEventListener('click', ()=>{
    pop_cards.scrollLeft += 300;
})







// =================== NEXT MUSIC PLAY ==============


music.addEventListener('ended', ()=>{
    index+=1;
    
    if (songsLeft.length < index) {
        index = 1;
        music.src = "audio/1.mp3";
    }
    else{
        music.src = `audio/${index}.mp3`

    }
  
    // Set the audio element's src attribute to the next song
    // music.src = nextSong;
    // Play the audio element
    // music.load();
    music.play();
    
    btnOpacity(index);

    let songTitle = songsLeft.filter((els)=>{
        return els.id === (index);
    })
    
    songTitle.forEach((elss)=>{
        let { songName1, poster } = elss;
        title.innerHTML = songName1;
        bottom_play_poster.src = poster;
        // download_music.setAttribute('download', downName);
    })

    makeAllbg1();
    makeAllbg2();
    Array.from(document.getElementsByClassName('data'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    Array.from(document.getElementsByClassName('card'))[index-1].style.background = "rgba(184, 184, 184, 0.1)";
    bgChange(index);
})

