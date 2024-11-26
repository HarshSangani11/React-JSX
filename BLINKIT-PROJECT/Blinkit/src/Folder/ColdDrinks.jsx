import React from 'react';

export default function ColdDrinks() {
    const products = [
        {
            id: 1,
            name: 'Sparking Ice Cubes by Burrf',
            size: '1 kg',
            price: '₹60',
            originalPrice: '₹80',
            image: '/src/assets/colddrinks/Sparkling_ice_cubes.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Coca-Cola Soft Drink(750ml) - Pack of 2',
            size: '2 x 750 ml',
            price: '₹89',
            originalPrice: '₹90',
            image: '/src/assets/colddrinks/coca_cola_drink.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Sprite Lime Flavored Soft Drink 750 ml',
            size: '750 ml',
            price: '₹45',
            image: '/src/assets/colddrinks/sprite_lime_flavoured_drink.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Bisleri Packaged Water',
            size: '5 l',
            price: '₹70',
            image: '/src/assets/colddrinks/bisleri_packaged_water.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Thums Up Soft Drink (2.25 l)',
            size: '2.25 l',
            price: '₹95',
            originalPrice: '₹100',
            image: '/src/assets/colddrinks/thums_up_drink.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Kinley Soda Water',
            size: '1 l',
            price: '₹20',
            image: '/src/assets/colddrinks/kinley_soda_water.avif',
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
                                <span className="text-muted text-decoration-line-through ms-2">
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
                <h2 className="fw-bold">Cold Drinks & Juices</h2>
                <h4 className="text-success mb-0 cursor-pointer">See All</h4>
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
