import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {WebSoketDemo} from "./examples/use-ref/hooks/WebSoketDemo.tsx";
import {ChatMessages} from "./examples/use-effect/ChatMessages.tsx";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ChatMessages/>
        <WebSoketDemo/>
      </div>
    </QueryClientProvider>
  );
};
