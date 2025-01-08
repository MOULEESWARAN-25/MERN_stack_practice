import React, { useContext, createContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export default function CartProvider({ children }) {
  const data = [
    {
      Name: "Pizza",
      Price: 12.99,
      Image:
        "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
        Quantity: 1,
    },
    {
      Name: "Burger",
      Price: 8.99,
      Image:
        "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg",
        Quantity: 1,
    },
    {
      Name: "Pasta",
      Price: 10.99,
      Image:
        "https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=",
        Quantity: 1,
    },
    {
      Name: "Sushi",
      Price: 15.99,
      Image:
        "https://t4.ftcdn.net/jpg/01/35/23/71/360_F_135237184_vZnNVRuaHQZclXjxJ7ftEa3IyerhDF2y.jpg",
        Quantity: 1,
    },
    {
      Name: "Salad",
      Price: 6.99,
      Image:
        "https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Slmk-RLvdR3317E5W2UKLul4y1ZH3axjL2XCNOBZbhE=",
        Quantity: 1,
    },
    {
      Name: "Tacos",
      Price: 7.99,
      Image:
        "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.jpg?s=612x612&w=0&k=20&c=QSliAiLbFEmF7WPN69yEc-weAInG6A4GquGxaGEgBzE=",
        Quantity: 1,
    },
    {
      Name: "Ice Cream",
      Price: 5.99,
      Image:
        "https://cdn.prod.website-files.com/630a4d18e83aaa000bcd651e/6691780e4f5a682a2e3648c0_shutterstock_2429103279.jpg",
        Quantity: 1,
    },
    {
      Name: "Steak",
      Price: 20.99,
      Image:
        "https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=612x612&w=0&k=20&c=F_vrvwIOWe3vBR2y16Dp4z6d46K1sIY3togU3VYjrpA=",
        Quantity: 1,
    },
    {
      Name: "Fries",
      Price: 3.99,
      Image:
        "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
        Quantity: 1,
    },
  ];
  const [AddingItems, setAddItems] = useState([]);
  const [search, setsearch] = useState("");
  const [total, setTotal] = useState(0);

  function filterdata(search) {
    if (!search) return data;
    return data.filter((item) =>
      item.Name.toLowerCase().includes(search.toLowerCase())
    );
  }

  function AddItems(item) {
    if (!AddingItems.some((existingItem) => existingItem.Name === item.Name)) {
      setAddItems([...AddingItems, item]);
      setTotal((prevTotal) => prevTotal + item.Price).toFixed(2);
    } 
  }

  function DeleteItems(index) {
    const temp = AddingItems.filter((_, i) => i !== index);
    setAddItems(temp);
  }

  return (
    <cartContext.Provider
      value={{
        AddingItems,
        AddItems,
        DeleteItems,
        setsearch,
        data: filterdata(search),
        setTotal,
        total,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
