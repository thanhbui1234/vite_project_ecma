/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./components/*.{html,js}", "./pages/*.{html,js}"],
  // thêm 1 tiền tố để không bị sung đột giữa taildwin và bootstrap
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
};
