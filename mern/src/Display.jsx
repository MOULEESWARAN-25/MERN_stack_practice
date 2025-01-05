import Delete from "./assets/delete.svg";
import Cart from "./Cart";
import { MyContext } from "./Cart";

export default function Display() {
  c
  return (
    <div className="w-full h-20 bg-red-400">
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-5">Cart Items</h2>
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
                <div>
                  <h3 className="text-lg font-medium">{item.Name}</h3>
                  <p className="text-gray-600">${item.Price}</p>
                </div>
              </div>
              <img
                src={Delete}
                className="w-10 cursor-pointer absolute left-52"
                onClick={() => DeleteItems(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
