import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard"
import Product from "./Pages/Product/Product"
import Order from "./Pages/Order/Order"
import Support from "./Pages/Support/Support"
import Layout from "./Layout/Layout"

function App() {
 

  return (
   <Router >

<Routes>
<Route path="/" element={<Layout />}>
 <Route path="/" element={<DashBoard />} />
 <Route path="/product" element={<Product />} />
 <Route path="/order" element={<Order />} />
 <Route path="/support" element={<Support />} />
</Route> 
</Routes>



   </Router>
  )
}

export default App
