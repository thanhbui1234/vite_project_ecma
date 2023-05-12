// Những cái gì tái sử dụng sẽ vứt vào đây

import Navigo from "navigo";

// tham số đầu tiên là root string  mặc định là suộc tréo,
const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = (content, target) => {
  target.innerHTML = content();
};

export { render, router };
