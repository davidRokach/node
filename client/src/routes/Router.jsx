import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPages";
import AboutPage from "../pages/AboutPage";
import ErorrPage from "../pages/ErorrPage";
import SandBox from "../sendbox/SandBox";
import SingUpPage from "../users/pages/SingUpPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import PropTypeChild from "../sendbox/propTypes/PropTypeChild";
import { SetArray } from "../sendbox/hooks/SetArray";
import OnClick from "../sendbox/events/OnClick";
import { SetCounter } from "../sendbox/hooks/SetCounter";
import { SetObject } from "../sendbox/hooks/SetObject";
import { SetPost } from "../sendbox/hooks/SetPost";
import Hooks from "../sendbox/hooks/Hooks";
import LifeCycleHooks from "../sendbox/life-cycle-hooks/LifeCycleHooks";
import InitialCycle from "../sendbox/life-cycle-hooks/InitialCycle";
import UseStateCycle from "../sendbox/life-cycle-hooks/UseStateCycle";
import Memoization from "../sendbox/memoization/Memoization";
import UseCallback from "../sendbox/memoization/useCallback/UseCallback";
import UseEffectAsComponentDidMount from "../sendbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sendbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sendbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectAsComponentUpdateNoDeps from "../sendbox/life-cycle-hooks/UseEffectAsComponentUpdateNoDeps";
import UseMemo from "../sendbox/memoization/useCallback/UseMemo";
import TodoComponents from "../sendbox/todo-list/TodoComponents";
import A from "../sendbox/context/components/A";
import FormsTest from "../sendbox/forms/FormsTest";
import CreateCardPage from "../cards/pages/CreateCardPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavCardPage from "../cards/pages/FavCardPage";
import EditUserPage from "../users/pages/EditUserPage";
import CrmUserPage from "../users/pages/CrmUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CREATE_CARDS} element={<CreateCardPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />

      <Route path={ROUTES.SINGUP} element={<SingUpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUserPage />} />
      <Route path={ROUTES.CRM_USER} element={<CrmUserPage />} />

      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />

      {/*SANDBOX */}
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path={"props"} element={<PropTypeChild />} />
        <Route path={"events"} element={<OnClick />} />
        <Route path={"todo-list"} element={<TodoComponents />} />
        <Route path={"forms"} element={<FormsTest />} />

        <Route path="context" element={<A />} />

        {/*hooks */}
        <Route path={"hooks"} element={<Hooks />}>
          <Route path={"SetArray"} element={<SetArray />} />
          <Route path={"SetCounter"} element={<SetCounter />} />
          <Route path={"SetObject"} element={<SetObject />} />
          <Route path={"SetPost"} element={<SetPost />} />
        </Route>

        {/*memoization */}
        <Route path={"memoization"} element={<Memoization />}>
          <Route path={"use-callback"} element={<UseCallback />} />
          <Route path={"use-memo"} element={<UseMemo />} />
        </Route>

        {/*life-cycle  */}
        <Route path="life-cycle" element={<LifeCycleHooks />}>
          {" "}
          <Route path="initial" element={<InitialCycle />} />{" "}
          <Route path="use-state-cycle" element={<UseStateCycle />} />{" "}
          <Route
            path="component-did-mount"
            element={<UseEffectAsComponentDidMount />}
          />{" "}
          <Route
            path="component-did-update"
            element={<UseEffectAsComponentDidUpdate />}
          />{" "}
          <Route
            path="component-will-unmount"
            element={<UseEffectAsComponentWillUnmount />}
          />{" "}
          <Route
            path="component-no-dependencies"
            element={<UseEffectAsComponentUpdateNoDeps />}
          />{" "}
        </Route>
      </Route>

      <Route path="*" element={<ErorrPage />} />
    </Routes>
  );
};
export default Router;
