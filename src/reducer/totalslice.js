import { createSlice } from "@reduxjs/toolkit";

export const TotalSlice = createSlice({
  name: "totalchange",
  initialState: {
    products: [
      {
        products: [
          {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail:
              "https://m.media-amazon.com/images/I/51dOxXtrlgL._AC_UY218_.jpg",
            images: [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            ],
          },
          {
            id: 2,
            title: "iPhone X",
            description:
              "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT45eBJELxQjXVbTSuLsRuyTFWOMbStjsSroJURUamqiyBy8XiQ",
            images: [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            ],
          },
          {
            id: 3,
            title: "Samsung Universe 9",
            description:
              "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung",
            category: "smartphones",
            thumbnail:
              "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.jpg?height=474&width=711&fit=bounds",
            images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
          },
          {
            id: 4,
            title: "OPPOF19",
            description: "OPPO F19 is officially announced on April 2021.",
            price: 280,
            discountPercentage: 17.91,
            rating: 4.3,
            stock: 123,
            brand: "OPPO",
            category: "smartphones",
            thumbnail:
              "https://www.fliptwirls.com/wp-content/uploads/2023/09/123-667.png",
            images: [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            ],
          },
          {
            id: 5,
            title: "Huawei P30",
            description:
              "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            price: 499,
            discountPercentage: 10.58,
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones",
            thumbnail:
              "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
            images: [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg",
            ],
          },
        ],
      },
    ],
    total: 0,
    quantity: 0,
  },
  reducers: {
    totalchange: (state, action) => {
      state.total = action.payload;
      return state;
    },
    quantitychange: (state, action) => {
      state.quantity = action.payload;
      return state;
    },
  },
});

export const { totalchange, quantitychange } = TotalSlice.actions;
