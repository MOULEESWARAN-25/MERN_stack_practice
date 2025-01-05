import { useState } from "react";
import Delete from "./assets/delete.svg";
import React, { createContext, useState } from 'react';

export default function Cart() {
  const data = [
    {
      Name: "Pizza",
      Price: 12.99,
      Image:
        "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      Name: "Burger",
      Price: 8.99,
      Image:
        "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg",
    },
    {
      Name: "Pasta",
      Price: 10.99,
      Image:
        "https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=",
    },
    {
      Name: "Sushi",
      Price: 15.99,
      Image:
        "https://t4.ftcdn.net/jpg/01/35/23/71/360_F_135237184_vZnNVRuaHQZclXjxJ7ftEa3IyerhDF2y.jpg",
    },
    {
      Name: "Salad",
      Price: 6.99,
      Image:
        "https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Slmk-RLvdR3317E5W2UKLul4y1ZH3axjL2XCNOBZbhE=",
    },
    {
      Name: "Tacos",
      Price: 7.99,
      Image:
        "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.jpg?s=612x612&w=0&k=20&c=QSliAiLbFEmF7WPN69yEc-weAInG6A4GquGxaGEgBzE=",
    },
    {
      Name: "Ice Cream",
      Price: 5.99,
      Image:
        "https://cdn.prod.website-files.com/630a4d18e83aaa000bcd651e/6691780e4f5a682a2e3648c0_shutterstock_2429103279.jpg",
    },
    {
      Name: "Steak",
      Price: 20.99,
      Image:
        "https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=612x612&w=0&k=20&c=F_vrvwIOWe3vBR2y16Dp4z6d46K1sIY3togU3VYjrpA=",
    },
    {
      Name: "Fries",
      Price: 3.99,
      Image:
        "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
    },
  ];

  const [AddingItems, setAddItems] = useState([]);

  function AddItems(item) {
    setAddItems([...AddingItems, item]);
  }

  function DeleteItems(index) {
    const temp = AddingItems.filter((_, i) => i !== index);
    setAddItems(temp);
  }

  return (
    <div>
      <div className="grid grid-row gap-4 p-10 w-[400px] bg-gray-100">
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
                onClick={() => AddItems(item)}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="p-10">
        <h2 className="text-2xl font-bold mb-5">Cart Items</h2>
        <div className="flex flex-col gap-4">
          {AddingItems.map((item, index) => (
            <div key={index} className="flex items-center border-b pb-4 relative">
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
      </div> */}
    </div>
  );
}
