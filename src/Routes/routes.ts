import { lazy , LazyExoticComponent} from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
type JSXComponent = () => JSX.Element;


interface Route {
   to: string;
   path: string;
   name: string;
   Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}


const LazyLayout = lazy(()=>import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(()=>import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(()=>import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
   {
      to: "/layout",
      path: "/layout/*", // hayq ue agregar el asterisco
      Component: LazyLayout,
      name: "layout",
   },
   {
      to: "/nolazy",
      path: "nolazy",
      Component: NoLazy,
      name: "no-lazy",
   }
   // {
   //    to: "/lazy1",
   //    path: "lazy1",
   //    Component: LazyLayout,
   //    name: "lazy-1",
   // },
   // {
   //    to: "/lazy2",
   //    path: "lazy2",
   //    Component: Lazy2,
   //    name: "lazy-2",
   // },
   // {
   //    to: "/lazy3",
   //    path: "lazy3",
   //    Component: Lazy3,
   //    name: "lazy-3",
   // },
   ];
