import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="flex z-[5] container mx-auto justify-center items-center py-10">
      <div className="flex gap-5 md:gap-16 justify-center text-base font-medium z-[3] md:py-5 text-[#566B9C]">
        <button onClick={(e)=>{e.preventDefault(),navigate('./')}}>Home</button>
        <button onClick={(e)=>{e.preventDefault(),navigate('/about')}}>About</button>
        <button onClick={(e)=>{e.preventDefault(),navigate('/contact-us')}}>Contact us</button>
      </div>
    </div>
  );
};

export default Header;
