import { useState } from "react"
import Button from "../../../Components/UI/Button"
import Modal from "../../../Components/UI/Modal"




const AddCategory = () => {
const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
      variant="secondary"
      
      >
Add Food
      </Button>



<Modal
isOpen={isOpen}
onClose={() => setIsOpen(!isOpen)}


>






</Modal>


    </div>
  )
}

export default AddCategory
