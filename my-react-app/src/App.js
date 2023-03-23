import React, { useState } from "react";
// import axios from "axios";
import Plants from "./Components/Plants";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App ({ data }) {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Plants />
      </QueryClientProvider>
    </div>
  );
}

export default App;