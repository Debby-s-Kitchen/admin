import OrdersPage from "../../../Order/Component/OrderTable"
import { useNavigate } from "react-router-dom"




const OrderTableDisplay = () => {

  const navigate = useNavigate(); 

  return (
    
    <div className="xl:w-150 h-125 mt-6 border border-gray-200 shadow-sm rounded-xl
     overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent" onClick={() => navigate("/order")}>
      <OrdersPage />
    </div>
    
  )
}

export default OrderTableDisplay
