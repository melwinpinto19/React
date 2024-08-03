function Navbar() {
  return (
    <>
      <div className="w-full h-14 bg-blue-500 flex justify-between items-center px-8 font-mono text-lg">
        <div className="font-bold text-2xl">TSX</div>
        <div className="flex list-none gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </div>
      </div>
    </>
  );
}

export default Navbar;
