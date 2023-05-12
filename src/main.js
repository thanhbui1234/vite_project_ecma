import classes from "./main.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Product from "./pages/Product";
import Notfound from "./pages/Notfound";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

// đăng ký đường dẫn router navigo
router.on("/", () => render(Home, app));
router.on("/about", () => render(AboutPage, app));
router.on("/product", () => render(Product, app));
///// URL lỗi
router.notFound(() => render(Notfound, app));
// Cuối cùng sẽ chạy
router.resolve();
