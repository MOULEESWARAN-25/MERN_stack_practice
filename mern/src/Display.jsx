import Delete from "./assets/delete.svg";
import Cart from "./Cart";
import { createContext, useContext } from "react";
import Plus from "./assets/plus.svg";
import Minus from "./assets/minus.svg";
import { useCart } from "./CartContext";

export default function Display() {
  const { AddingItems, DeleteItems, total, setTotal } = useCart();

  return (
    <div className="w-full h-20">
      <div className="p-10 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold mb-5">Cart Items</h2>
          <h2 className="text-2xl font-bold mb-5">
            Total Amount: ${total.toFixed(2)}
          </h2>
        </div>
        {AddingItems.length === 0 ? (
          <h1 className="text-gray-500 text-xl">The Cart is Empty</h1>
        ) : (
          <div className="flex flex-col gap-4">
            {AddingItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b pb-4 relative"
              >
                <div className="flex gap-6">
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex items-center gap-5">
                    <img
                      src={Plus}
                      className="w-6 cursor-pointer"
                      onClick={() => {
                        setTotal((prevTotal) => prevTotal + item.Price);
                        AddingItems({
                          ...item,
                          Quantity: (item.Quantity || 0) + 1,
                        });
                      }}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium">{item.Name}</h3>
                      <p className="text-gray-600">${item.Price}</p>
                      <h1 className="font-medium">Quantity: {item.Quantity}</h1>
                    </div>
                    <img
                      src={Minus}
                      className="w-6 cursor-pointer"
                      onClick={() => {
                        if (item.Quantity > 1) {
                          setTotal((prevTotal) => prevTotal - item.Price);
                          AddingItems({
                            ...item,
                            Quantity: item.Quantity - 1,
                          });
                        } else {
                          DeleteItems(index);
                          setTotal((prevTotal) => prevTotal - item.Price);
                        }
                      }}
                    />
                  </div>
                </div>
                <img
                  src={Delete}
                  className="w-10 cursor-pointer absolute left-72"
                  onClick={() => {
                    setTotal(
                      (prevTotal) => prevTotal - item.Price * item.Quantity
                    );
                    DeleteItems(index);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
