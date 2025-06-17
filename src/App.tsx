import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationList } from "./examples/use-memo/Notification";
// import { TransactionTable } from "./examples/use-memo/TransactionRow";
// import { ProductList } from "./examples/use-memo/ProductCard";
// import { HeavyCompApp } from "./examples/use-memo/HeavyComp";
// import {WebSoketDemo} from "./examples/use-ref/hooks/WebSoketDemo.tsx";
// import {ChatMessages} from "./examples/use-effect/ChatMessages.tsx";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <ChatMessages/>
        <WebSoketDemo/> */}

        {/* <HeavyCompApp /> */}

        {/* <ProductList /> */}

        {/* <TransactionTable /> */}

        <NotificationList />
      </div>
    </QueryClientProvider>
  );
};
