import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Rushing from "views/rushing.view";

// Initialize the Query Client.
const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header>
          <div className="logo" />
          {/* <h3>theScore: NFL Rushing</h3> */}
        </header>
        <section>
          <Rushing />
        </section>
        <footer>
          <div className="footer-container">
            &copy; theScore {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default App;
