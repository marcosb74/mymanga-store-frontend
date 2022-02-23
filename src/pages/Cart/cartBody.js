import { useEffect, useState } from "react";
import { getUserCart, deleteItem } from "../../services/cart.service";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CartBody = ({ handleClose }) => {
  const [didLoad, setDidLoad] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const naviage = useNavigate();

  useEffect(() => {
    async function getData() {
      return await getUserCart();
    }
    function calculateTotal(cart) {
      const total = cart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );
      return total;
    }

    if (!didLoad) {
      getData().then((response) => {
        setCart(response.data.products);
        setDidLoad(!didLoad);
        const totalSpent = calculateTotal(response.data.products);
        setTotal(totalSpent);
      });
    }
  }, [didLoad]);

  const handleDeleteProduct = async (item) => {
    const newCart = await deleteItem(item);
    setCart(newCart);
    setDidLoad(!didLoad);
  };

  const handleCheckout = () => {
    handleClose(true);
    naviage("/checkout");
  };
  return (
    <>
      <body>
        <div id="w">
          <header id="title">
            <h1 className="title-main">My Cart</h1>
          </header>
          <div id="page">
            <table id="cart">
              <thead>
                <tr>
                  <th class="first">Photo</th>
                  <th class="second">Qty</th>
                  <th class="third">Product</th>
                  <th class="fourth">Price</th>
                  <th class="fifth">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 &&
                  cart.map((item) => (
                    <tr class="productitm">
                      <td>
                        <img src={item.img} class="thumb" />
                      </td>
                      <td>x1</td>
                      <td>{item.name}</td>
                      <td>$ {item.price}</td>
                      <td>
                        <span class="remove">
                          <img
                            src="https://i.imgur.com/h1ldGRr.png"
                            alt="X"
                            onClick={() => handleDeleteProduct(item._id)}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}

                <tr class="extracosts">
                  <td class="light">Shipping &amp; Tax</td>
                  <td colspan="2" class="light"></td>
                  <td>FREE!</td>
                  <td>&nbsp;</td>
                </tr>
                <tr class="totalprice">
                  <td class="light">Total:</td>
                  <td colspan="2">&nbsp;</td>
                  <td colspan="2">
                    <span class="thick">$ {total}</span>
                  </td>
                </tr>

                <tr class="checkoutrow">
                  <td colspan="5" class="checkout">
                    <button id="submitbtn" onClick={handleCheckout}>
                      Checkout Now!
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </>
  );
};

export default CartBody;
