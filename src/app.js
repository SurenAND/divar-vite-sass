import { El } from "./components/shared/el";
import { Header } from "./components/header";
export const App = () => {
  return El({
    element: "div",
    restAttrs: {
      dir: "rtl",
    },
    children: [Header()],
  });
};
