
import React from 'react';

export default function MedalWorthy() {
    const images = [
        {
            id: 1,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png"
        },
        {
            id: 2,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png"
        },
        {
            id: 3,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/30ce6d77-d4f5-4bed-b89a-c9cf00d197b81691142723203-image_png2141362199.png"
        },
        {
            id: 4,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png"
        },
        {
            id: 5,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6ddcd2e5-20c6-4672-9b02-7d2117550f641691142512854-image_png242033865.png"
        },
        {
            id: 6,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/eb385972-caf6-4e84-a37c-3fc2b4ac52041691079093062-image_png892897249.png"
        },
    ];
    return (
        <div className="d-flex flex-column justify-content-around mt-3" style={{ height: '550px', width: '100%' }}>
            <div className="d-flex align-items-center ps-3" style={{ height: '50px', color: '#3e4152', fontSize: '1.8em', letterSpacing: '.15em', fontWeight: 'bold', textTransform: 'uppercase' }}>
                <h1>Medal Worthy Brands To Bag</h1>
            </div>
            <div className="d-flex overflow-hidden" style={{ width: '100%', height: 'auto' }}>
                {images.map((image, id) => (
                    <img
                        key={id}
                        src={image.url}
                        className="img-fluid"
                        style={{ width: '255px', cursor: 'pointer' }}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
}
