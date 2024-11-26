import React from 'react';

export default function Snacks() {
    const products = [
        {
            id: 1,
            name: 'Cheetos Cheez Puffs',
            size: '8 g',
            price: '₹10',
            image: '/src/assets/snack/cheetos_cheez_puffs.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Cheetos Cheese Flavoured Puffs',
            size: '24.8 g',
            price: '₹161',
            originalPrice: '₹170',
            image: '/src/assets/snack/cheetos_cheese_flavoured_puffs.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Kettle Studio Potato Chips - Sweet Chilli Wi...',
            size: '113 g',
            price: '₹99',
            image: '/src/assets/snack/kettle_studio_potato_chips.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Cheetos Cheddar Popcorn',
            size: '17.7 g',
            price: '₹170',
            image: '/src/assets/snack/cheetos_cheddar_popcorn.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Orion K Snack Kimchi Onion Rings',
            size: '70 g',
            price: '₹50',
            originalPrice: '₹60',
            image: '/src/assets/snack/orion_k_snack_kimchi_onion_rings_1.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Orion K Snack Kimchi Onion Rings Combo',
            size: '140 g',
            price: '₹90',
            originalPrice: '₹120',
            image: '/src/assets/snack/orion_k_snack_kimchi_onion_rings.avif',
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
                            {product.originalPrice && (
                                <span className="text-muted text-decoration-line-through ms-2 small">
                                    {product.originalPrice}
                                </span>
                            )}
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
                <h2 className="fw-bold">Snacks & Munchies</h2>
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
