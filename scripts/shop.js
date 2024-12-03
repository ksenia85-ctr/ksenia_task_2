// scripts/shop.js

// Выполняем код, когда весь контент DOM загружен
document.addEventListener("DOMContentLoaded", () => {
  // Массив с информацией о товарах
  const products = [
    {
      id: 1,
      title: "Товар 1",
      description: "Описание товара 1",
      price: 100,
      img: "images/product1.png",
    },
    {
      id: 2,
      title: "Товар 2",
      description: "Описание товара 2",
      price: 200,
      img: "images/product2.png",
    },
    {
      id: 3,
      title: "Товар 3",
      description: "Описание товара 3",
      price: 300,
      img: "images/product3.png",
    },
    {
      id: 4,
      title: "Товар 4",
      description: "Описание товара 4",
      price: 400,
      img: "images/product4.png",
    },
    {
      id: 5,
      title: "Товар 5",
      description: "Описание товара 5",
      price: 500,
      img: "images/product5.png",
    },
    {
      id: 6,
      title: "Товар 6",
      description: "Описание товара 6",
      price: 600,
      img: "images/product6.png",
    },
    {
      id: 7,
      title: "Товар 7",
      description: "Описание товара 7",
      price: 700,
      img: "images/product7.png",
    },
    {
      id: 8,
      title: "Товар 8",
      description: "Описание товара 8",
      price: 800,
      img: "images/product8.png",
    },
    {
      id: 9,
      title: "Товар 9",
      description: "Описание товара 9",
      price: 900,
      img: "images/product9.png",
    },
    {
      id: 10,
      title: "Товар 10",
      description: "Описание товара 10",
      price: 1000,
      img: "images/product10.png",
    },
    {
      id: 11,
      title: "Товар 11",
      description: "Описание товара 11",
      price: 1100,
      img: "images/product11.png",
    },
    {
      id: 12,
      title: "Товар 12",
      description: "Описание товара 12",
      price: 1200,
      img: "images/product12.png",
    },
  ];

  // Находим элемент списка продуктов
  const productList = document.getElementById("product-list");

  // Проходимся по каждому продукту и создаем карточки товаров
  products.forEach((product) => {
    const productElement = `
          <div class="card m-2" style="width: 18rem;">
              <img src="${product.img}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}. Цена: ${product.price} р.</p>
                  <input type="hidden" name="vendor_code" value="${product.id}">
                  <p>Заказать <input type="number" name="amount_${product.id}" value="0" class="w-25"></p>
              </div>
          </div>
      `;
    // Добавляем карточку продукта в список продуктов
    productList.innerHTML += productElement;
  });
});
