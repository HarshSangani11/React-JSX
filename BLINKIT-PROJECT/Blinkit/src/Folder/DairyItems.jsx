import React from 'react';

export default function DairyItems() {
    const products = [
        {
            id: 1,
            name: 'Amul Gold Full Cream Fresh Milk',
            size: '500 ml',
            price: '₹33',
            image: '/src/assets/dairy/amul-gold.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Amul Taaza Toned Fresh Milk',
            size: '500 ml',
            price: '₹27',
            image: '/src/assets/dairy/amul-taaza.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Amul Masti Curd',
            size: '400 g',
            price: '₹35',
            image: '/src/assets/dairy/amul-masti-1.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Amul Masti Curd',
            size: '200 g',
            price: '₹23',
            image: '/src/assets/dairy/amul-masti-2.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Amul Salted Butter',
            size: '100 g',
            price: '₹60',
            image: '/src/assets/dairy/amul-salted-butter.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Amul Cheese Cubes',
            size: '200 g',
            price: '₹134',
            originalPrice: '₹135',
            image: '/src/assets/dairy/amul-cheese-cubes.avif',
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
                <h2 className="fw-bold">Dairy, Bread & Eggs</h2>
                <h4 className="fw-medium text-success cursor-pointer mb-0">See All</h4>
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
