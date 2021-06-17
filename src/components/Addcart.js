import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';

import { QueryClient, QueryClientProvider } from 'react-query';
import Sum from './Sum';

const client = new QueryClient();

export default function Addcart(){
  return(
    <div>
   <QueryClientProvider client={client}>
    <App2/>
    
  </QueryClientProvider>
  </div>
  
);
}
