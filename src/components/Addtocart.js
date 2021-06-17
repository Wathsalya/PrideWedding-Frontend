
import App1 from './App1';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

export default function Addtocart(){
  return(
    <div>
   <QueryClientProvider client={client}>
    
    <App1/>
    


    
  </QueryClientProvider>
  </div>
  
);
}
