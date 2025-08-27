import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Featured from "./pages/Featured";
import Testimonial from "./pages/Testimonial";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/promo-pages/project-x">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
