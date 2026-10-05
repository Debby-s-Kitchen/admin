import { CiMenuBurger } from "react-icons/ci";





const ReusableTopBar = ({title, setisOpen}) => {
  return (
    <header className="flex justify-between items-center">


<h2 className="text-3xl font-bold">
    {title}
</h2>

<button onClick={() => setisOpen(true)} className="md:hidden flex">
<CiMenuBurger />
</button>

    </header>
  )
}

export default ReusableTopBar
