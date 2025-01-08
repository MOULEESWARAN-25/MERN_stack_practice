import { useCart } from "./CartContext";

export default function Cart() {
  const { AddingItems, AddItems, setsearch, data } = useCart();
  

  return (
    <div>
      <div className="grid grid-row gap-4 p-10 w-[400px] bg-gray-100">
        <input className="border-2 outline-blue-400 h-10 p-4 rounded-lg" placeholder="Search here" onChange={(e) => setsearch(e.target.value)}/>
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-2 border-2 rounded-xl"
          >
            <img
              src={item.Image}
              className="w-full h-full rounded-t-xl"
              alt={item.Name}
            />
            <div className="flex gap-6 pl-10 pb-5 items-center justify-between">
              <div className="flex gap-6 items-center">
                <h1 className="font-medium">{item.Name}</h1>
                <h1 className="font-medium">${item.Price}</h1>
              </div>
              <button
                className="border-2 bg-black text-white w-16 h-10 rounded-lg mr-8"
                onClick={() => (AddItems(item))}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
