import React, { useState } from "react";
// import axios from "axios";
import Characters from './Components/Plants/index.js'
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App () {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;