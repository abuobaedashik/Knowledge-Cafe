import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <header className="flex justify-between items-center mt-5 border-b-2 pb-4 ">
            <h1 className='text-xl md:text-4xl font-bold text-[#111111]'>Knowladge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;