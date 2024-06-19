const Header = () => {
  
  return (
    <div className="flex z-[5] container mx-auto justify-center items-center py-10">
      <div className="flex gap-5 md:gap-16 justify-center text-base font-medium md:py-5 text-[#566B9C]">
        <button onClick={(e)=>{e.preventDefault(),window.location.pathname = '/'}}>Home</button>
        <button onClick={(e)=>{e.preventDefault(),window.location.pathname = '/about'}}>About</button>
        <button onClick={(e)=>{e.preventDefault(),window.location.pathname = '/contact-us'}}>Contact us</button>
      </div>
    </div>
  );
};

export default Header;
