
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ShopByCategory() {
    const images = [
        { id: 1, url: '/src/assets/1/1.jpg' },

        {
            id: 2,
            url: '/src/assets/1/2.jpg'
        },
        {
            id: 3,
            url: '/src/assets/1/3.jpg'
        },
        {
            id: 4,
            url: '/src/assets/1/4.jpg'
        },
        {
            id: 5,
            url: '/src/assets/1/5.jpg'
        },
        {
            id: 6,
            url: '/src/assets/1/6.jpg'
        },
        {
            id: 7,
            url: '/src/assets/2/1.jpg'
        },
        {
            id: 8,
            url: '/src/assets/2/2.jpg'
        },
        {
            id: 9,
            url: '/src/assets/2/3.jpg'
        },
        {
            id: 10,
            url: '/src/assets/2/4.jpg'
        },
        {
            id: 11,
            url: '/src/assets/2/5.jpg'
        },
        {
            id: 12,
            url: '/src/assets/2/6.jpg'
        },
        {
            id: 13,
            url: '/src/assets/3/1.jpg'
        },
        {
            id: 14,
            url: '/src/assets/3/2.jpg'
        },
        {
            id: 15,
            url: '/src/assets/3/3.jpg'
        },
        {
            id: 16,
            url: '/src/assets/3/4.jpg'
        },
        {
            id: 17,
            url: '/src/assets/3/5.jpg'
        },
        {
            id: 18,
            url: '/src/assets/3/6.jpg'
        },
        {
            id: 19,
            url: '/src/assets/4/1.jpg'
        },
        {
            id: 20,
            url: '/src/assets/4/2.jpg'
        },
        {
            id: 21,
            url: '/src/assets/4/3.jpg'
        },
        {
            id: 22,
            url: '/src/assets/4/4.jpg'
        },
        {
            id: 23,
            url: '/src/assets/4/5.jpg'
        },
        {
            id: 24,
            url: '/src/assets/4/6.jpg'
        },
        {
            id: 25,
            url: '/src/assets/5/1.jpg'
        },
        {
            id: 26,
            url: '/src/assets/5/2.jpg'
        },
        {
            id: 27,
            url: '/src/assets/5/3.jpg'
        },

    ];
    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col text-center">
                    <h1 className="text-uppercase font-weight-bold text-secondary">Shop By Category</h1>
                </div>
            </div>


            <div className="row g-3 d-flex justify-content-center align-items-center">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="col-6 col-sm-4 col-md-3 col-lg-2 "
                    >
                        <img
                            src={image.url}
                            className="img-fluid rounded shadow-sm cursor-pointer"
                            alt={`Category ${image.id}`}
                            style={{
                                transition: 'transform 0.3s',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
