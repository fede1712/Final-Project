// import React, { useEffect } from 'react';
// import { Col, Container, Row } from 'react-bootstrap'
// import './Creators.css'


// export default function Creators() {

//     let left = 0
//     //     (document).ready(function () {
//     //         var $magic = $(".magic"),
//     //             magicWHalf = $magic.width() / 2;
//     //         $(document).on("mousemove", function (e) {
//     //             $magic.css({ "left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf });
//     //         });
//     //     });

//     // window.onload = function () {
//     //     let magic = document.getElementsByClassName("magic")
//     //     let magicWHalf = magic[0].offsetWidth / 2
//     //     magic[0].addEventListener('mousemove', e => {
//     //         //magic[0].css({ "left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf })
//     //         magic[0].style.left = e.pageX - magicWHalf
//     //         magic[0].style.top = e.pageY - magicWHalf
//     //     })
//     // }

//     let movement = (e) => {
//         //console.log(e)
//         let magic = document.getElementsByClassName("magic")
//         let magicWHalf = magic[0].offsetWidth / 2
//         left = e.clientX
//         magic[0].style.left = e.pageX - magicWHalf
//         magic[0].style.top = e.pageY - magicWHalf
//         console.log(magic[0].style.left)
//     }


//     return (
//         <Container className='creators'>
//             <div class="scene" onMouseMove={movement}>
//                 {/* <h1>Simple magic!</h1> */}
//                 <div class="magic" style={{ left: left }}></div>
//                 <p class="check-out">Check out my other <a href="https://codepen.io/suez/public/" target="_blank">pens</a></p>
//             </div>
//         </Container>
//     )
// }



// export default function Creators() {

//     const movement = (e) => {
//         let magic = document.getElementsByClassName("magic")
//         let magicWHalf = magic[0].offsetWidth / 2
//         magic[0].style.left = e.clientX - magicWHalf
//         console.log(magic[0].style.left)
//         // magic[0].style.top = e.pageY - magicWHalf
//         // console.log(magic[0].style.left)

//     }

//     useEffect(() => {
//         window.addEventListener('mousemove', e => {
//             movement(e)
//         })
//         return () => window.removeEventListener('mousemove', e => movement(e))
//     }, [])
//     return (
//         <Container className='creators'>
//             <div class="scene">
//                 {/* <h1>Simple magic!</h1> */}
//                 <div class="magic"></div>
//                 <p class="check-out">Check out my other <a href="https://codepen.io/suez/public/" target="_blank">pens</a></p>
//             </div>
//         </Container>
//     )
// };