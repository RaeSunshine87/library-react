import React from "react";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <div className="cart__book">Book</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Price</div>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="" className="cart__book--img" alt="" />
                    <div className="cart__book--ingo">
                        <span className="cart__book--title">
                            BOOK NAME
                        </span>
                        <span className="cart__book--price">
                            PRICE
                        </span>
                        <button className="cart__book--remove">
                            Remove
                        </button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} className="cart__imput" />
                  </div>
                  <div className="cart__total">
                    PRICE
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
                <div className="total__item total__sub-total">
                    <span>Subtotal</span>
                    <span>PRICE</span>
                </div>
                <div className="total__item total__sub-tax">
                    <span>Tax</span>
                    <span>PRICE</span>
                </div>
                <div className="total__item total__sub-price">
                    <span>Total</span>
                    <span>PRICE</span>
                </div>
                <button className="btn btn__checkout no-cursor"
                    onClick={() => alert(`Haven't gotten around to doing this :(`)}>
                    Proceed to checkout
                </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
