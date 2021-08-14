import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Rushing from "views/NFL/rushing.view";
import SiteHeader from "components/SiteHeader/siteHeader.component";
import SiteSubHeader from "components/SiteSubHeader/siteSubHeader.component";

// Initialize the Query Client.
const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SiteHeader />
        <section>
          <SiteSubHeader />
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
