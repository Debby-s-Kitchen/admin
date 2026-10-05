import StatGrid from "../DashBoard/Component/AccountCard/StartGrid"
import OrderTableDisplay from "./Component/OrdersCard/OrderTableDisplay"
import RemainingGrid from "./Component/RemainingFood/RemainingGrid"
import SuppoprtDisplay from "./Component/SupportCard/SuppoprtDisplay"




const DashBoard = () => {
  return (
    <div>
      <StatGrid />
      <div className="grid md:grid-cols-1 xl:grid-cols-2  grid-cols-1 justify-between gap-10 ">
        <OrderTableDisplay />

      <div className="grid  ">
        <RemainingGrid />
        <SuppoprtDisplay />
      </div>
      </div>
    </div>
  )
}

export default DashBoard
