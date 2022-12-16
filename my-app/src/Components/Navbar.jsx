import { NavLink } from "react-router-dom";

const links=[
    {path:"/fitness", text:"Fitness"},
    {path:"/care", text:"Care"},
    {path:"/mind", text:"Mind"},
    {path:"/store", text:"Store"}
]
function Navbar(){
    return (
       
        <div >
            <h2 style={{
            display:"flex",
            justifyContent:"space-around",
            alignContent:'center'
          }}>
            <div> <img style={{width:"150px"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" /></div>
            {
                links.map((el)=>
                    <NavLink key={el.path} to={el.path}  style={
                        {textDecoration:"none",
                        color:"white"
                        }}>
                                  {el.text}
                    </NavLink>
                )
            }
            <button style={{color:"black", border:"15px"}}>GET APP</button>
            </h2>
        </div>
       
    )
}

export default Navbar;