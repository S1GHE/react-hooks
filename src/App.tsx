import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CenterDiv } from "./examples/div/center-div";
import { ProductList } from "./examples/use-memo/ProductCard";
import { TransactionTable } from "./examples/use-memo/TransactionRow";
// import { HeavyCompApp } from "./examples/use-memo/HeavyComp";
// import { NotificationList } from "./examples/use-memo/Notification";
// import { Counter } from "./examples/use-state/Counter";
// import { CounterFuncUpdate } from "./examples/use-state/CounterFuncUpdate";
// import { ClickTracker } from "./examples/use-state/ClickTraker";
// import { LazyInit } from "./examples/use-state/LazyInit";
// import { TransactionTable } from "./examples/use-memo/TransactionRow";
// import { ProductList } from "./examples/use-memo/ProductCard";
// import { HeavyCompApp } from "./examples/use-memo/HeavyComp";
// import { WebSoketDemo } from "./examples/use-ref/hooks/WebSoketDemo.tsx";
// import { ChatMessages } from "./examples/use-effect/ChatMessages.tsx";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <ChatMessages />
        <WebSoketDemo /> */}

        {/* <HeavyCompApp /> */}

        {/* <ProductList /> */}

        {/* <TransactionTable /> */}

        {/* <NotificationList /> */}

        {/* <LazyInit /> */}

        {/* <CenterDiv /> */}

        {/* <HeavyCompApp /> */}

        <ProductList />

        {/* <TransactionTable /> */}
      </div>
    </QueryClientProvider>
  );
};
