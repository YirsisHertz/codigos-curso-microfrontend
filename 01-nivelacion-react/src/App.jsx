import { lazy, Suspense } from "react";

import Counter from "./components/Counter";
import Layout from "./components/Layout";

import "./App.css";

const Users = lazy(() => import("./components/Users"));

const App = () => {
  return (
    <div className="App-header">
      <Layout>
        <Counter />

        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
