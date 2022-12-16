import { NavLink } from "react-router-dom";

const links=[
    {path:"/fitness", text:"Fitness"},
    {path:"/care", text:"Care"},
    {path:"/mind", text:"Mind"},
    {path:"/store", text:"Store"}
]
function Navbar(){
    return (
       
        <div>
            {
                links.map((el)=>
                    <NavLink key={el.path} to={el.path}>
                                  {el.text}
                    </NavLink>
                )
            }
        </div>
       
    )
}

export default Navbar;