import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';


const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false); 
  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  const handleCheckoutClick = () => {
    setShowModal(true);  // Show the modal when the button is clicked
  };
  return (
    <div style={{marginTop:"100px"}}>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      
      {/* Empty Cart State */}
      {cart.length === 0 ? (
        <div className="text-center">
          <h2>Your cart is empty.</h2>
          <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {/* Cart Items List */}
          <div className="row">
            {cart.map((product) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={product.id}>
                <div className="card shadow-sm">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center mb-3">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="card-img-top" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }} 
                      />
                      <div>
                        <h5 className="card-title mb-1">{product.title}</h5>
                        <p className="text-muted mb-1">Price: ${product.price}</p>
                      </div>
                    </div>
                    <button
                      className="btn btn-danger btn-sm w-100"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price and QR Code */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${totalPrice}</h4>
            <div>
              <h5>QR Code for Price</h5>
              {/* <QRCode 
                value={`$${totalPrice}`} // The data encoded into the QR code (the price)
                size={128} // Size of the QR code
                level="H" // Error correction level (higher is better for damaged QR codes)
                renderAs="svg" // Rendering as SVG for sharper quality
              /> */}
            <QRCodeSVG value={`$${totalPrice}`} size={256}level="H"  renderAs="svg" />

            </div>
          </div>

          {/* Checkout Button */}
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleCheckoutClick}>
              Proceed the Payment
            </button>
          </div>
        </div>
      )}
        {/* Success Modal */}
        {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Payment Successful!</h5>
                <button 
                  type="button" 
                  className="close" 
                  data-dismiss="modal" 
                  aria-label="Close"
                  onClick={() => setShowModal(false)}  // Close the modal when clicked
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your payment was successful. Thank you for your purchase!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <Link to="/order-summary" className="btn btn-primary">
                  View Order Summary
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
