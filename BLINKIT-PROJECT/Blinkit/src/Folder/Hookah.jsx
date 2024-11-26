import React from 'react';

export default function Hookah() {
    const products = [
        {
            id: 1,
            name: 'Chief Commissioner Herbal Hookah Flavor...',
            size: '50 g',
            price: '₹100',
            image: '/src/assets/hookah/chief_commissioner_herbal_hookah_flavor.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Bombay Paan Masala Herbal Hookah Flavor...',
            size: '50 g',
            price: '₹100',
            image: '/src/assets/hookah/bombay_paan_masala_herbal_hookah_flavor.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Natural Spring Water Herbal Hookah Flavor...',
            size: '50 g',
            price: '₹100',
            image: '/src/assets/hookah/natural_spring_water_herbal_hookah_flavor.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Hookah Premium Plastic Filters by Rhythm...',
            size: '1 pack (20 pieces)',
            price: '₹150',
            image: '/src/assets/hookah/hookah_premium_plastic_filters.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Iron Hookah Tong by Smokey Lust',
            size: '1 unit',
            price: '₹100',
            image: '/src/assets/hookah/iron_hookah_tong.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Premium Silver Hookah Foil by Rhythm Imports',
            size: '1 pack (30 pieces)',
            price: '₹100',
            image: '/src/assets/hookah/premium_silver_hookah_foil.avif',
            deliveryTime: '8 MINS',
        },
    ];

    function ProductCard({ product }) {
        return (
            <div className="card" style={{ width: '12rem' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top p-2"
                    style={{ height: '150px', objectFit: 'contain' }}
                />
                <div className="card-body">
                    <p className="text-muted small mb-2 d-flex align-items-center">
                        <i className="bi bi-clock me-1"></i> {product.deliveryTime}
                    </p>
                    <h5 className="card-title text-truncate" title={product.name}>
                        {product.name}
                    </h5>
                    <p className="card-text text-muted small">{product.size}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                            <span className="fw-bold">{product.price}</span>
                        </div>
                        <button className="btn btn-outline-success btn-sm">ADD</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Hookah</h2>
                <h4 className="fw-medium text-success mb-0 cursor-pointer">See All</h4>
            </div>
            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
