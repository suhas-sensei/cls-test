import logo from './logo.svg';
import '../App.css';

function Homepage(){
    return(
    <div className="font-Noto-sans">
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span className="text-white font-bold text-lg">Classmate</span>
        </div>
        <div className="flex items-center" style={{ marginLeft: '2rem' }}>
          <span className="text-white mx-4">About Us</span>
          <span className="text-white mx-4">Contact Us</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Sign Up</button>
          
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Classmate</h1>
          <p className="text-lg mt-4">The best platform to connect with your classmates</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
        </div></div>
      
    </div>
    );     
}

export default Homepage;
