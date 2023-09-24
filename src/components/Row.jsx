import React from 'react'
import style from '../style.module.css'

function Row({title, fetchUrl}) {
    console.log(fetchUrl);
    return (
        <>
        <div className={`container-fluid ${style.categories}`}>
            <div className={`row`}>
                <p className={`${style.categoryHead}`}>Trending Now</p>
            </div>
            <div className={`row`}>

                <div className={`${style.showCard}`}>
                    <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWAJ68nKbSun1YQc4HdkX7Lk5Q2BRy8ZWOPiWiIFmuVece6NCorgfzsAkX8ZvkItQhsSDbLpBuog0Ux1EumB0cxzFKamXpcSNdu36Tdk1XgmJgITbQsi5QvJOdbGSihsS3Sr30ukw0r3R1bW3dFdiyaS.jpg?r=0a3' className={`${style.cardImg}`}></img>
                </div>
                <div className={`${style.showCard}`}>
                    <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWAJ68nKbSun1YQc4HdkX7Lk5Q2BRy8ZWOPiWiIFmuVece6NCorgfzsAkX8ZvkItQhsSDbLpBuog0Ux1EumB0cxzFKamXpcSNdu36Tdk1XgmJgITbQsi5QvJOdbGSihsS3Sr30ukw0r3R1bW3dFdiyaS.jpg?r=0a3' className={`${style.cardImg}`}></img>
                </div>
                <div className={`${style.showCard}`}>
                    <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWAJ68nKbSun1YQc4HdkX7Lk5Q2BRy8ZWOPiWiIFmuVece6NCorgfzsAkX8ZvkItQhsSDbLpBuog0Ux1EumB0cxzFKamXpcSNdu36Tdk1XgmJgITbQsi5QvJOdbGSihsS3Sr30ukw0r3R1bW3dFdiyaS.jpg?r=0a3' className={`${style.cardImg}`}></img>
                </div>
                <div className={`${style.showCard}`}>
                    <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWAJ68nKbSun1YQc4HdkX7Lk5Q2BRy8ZWOPiWiIFmuVece6NCorgfzsAkX8ZvkItQhsSDbLpBuog0Ux1EumB0cxzFKamXpcSNdu36Tdk1XgmJgITbQsi5QvJOdbGSihsS3Sr30ukw0r3R1bW3dFdiyaS.jpg?r=0a3' className={`${style.cardImg}`}></img>
                </div>
                <div className={`${style.showCard}`}>
                    <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWAJ68nKbSun1YQc4HdkX7Lk5Q2BRy8ZWOPiWiIFmuVece6NCorgfzsAkX8ZvkItQhsSDbLpBuog0Ux1EumB0cxzFKamXpcSNdu36Tdk1XgmJgITbQsi5QvJOdbGSihsS3Sr30ukw0r3R1bW3dFdiyaS.jpg?r=0a3' className={`${style.cardImg}`}></img>
                </div>

            </div>
        </div>
        </>
    )
}

export default Row;