function Navbar() {
  return (
    <header className='h-20 flex items-center justify-between px-8'>
      <div>
        <h1 className='text-4xl'>Travelero</h1>
      </div>
      <div className='md:hidden'>
        <p className='text-4xl'>x</p>
      </div>
      <nav className='hidden md:flex md:gap-x-4'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <div className='hidden md:flex md:gap-4'>
        <p>cart</p>
        <p>login</p>
      </div>
    </header>
  );
}

export default Navbar;
