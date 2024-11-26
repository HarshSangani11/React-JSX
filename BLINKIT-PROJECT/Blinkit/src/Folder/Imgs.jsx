import React from 'react'
import Img1 from '../assets/main/paan-corner_web.avif'
import Img2 from '../assets/main/Slice-2_10.avif'
import Img3 from '../assets/main/Slice-3_9.avif'
import Img4 from '../assets/main/Slice-4_9.avif'
import Img5 from '../assets/main/Slice-5_4.avif'
import Img6 from '../assets/main/Slice-6_5.avif'
import Img7 from '../assets/main/Slice-7_3.avif'
import Img8 from '../assets/main/Slice-8_4.avif'
import Img11 from '../assets/main/Slice-11.avif'
import Img12 from '../assets/main/Slice-12.avif'
import Img13 from '../assets/main/Slice-13.avif'
import Img14 from '../assets/main/Slice-14.avif'
import Img15 from '../assets/main/Slice-15.avif'
import Img16 from '../assets/main/Slice-16.avif'
import Img17 from '../assets/main/Slice-17.avif'
import Img18 from '../assets/main/Slice-18.avif'



export default function Imgs() {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
    const imagess = [Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18];
    return (
        <div>
            <div className='w-50 h-50 mt-4 pt-4 d-flex justify-center align-items-center justify-content-lg-center'>
                <div className='w-50 h-50 d-flex align-items-center' >
                    {images.map((image, index) => (
                        <img key={index} src={image} className='cursor-pointer imgess' alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className='w-50 h-50 mt-4 d-flex justify-center align-items-center justify-content-lg-center'>
                <div className='w-50 h-50 d-flex align-items-center' >
                    {imagess.map((image, index) => (
                        <img key={index} src={image} className='cursor-pointer imgess' alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}
