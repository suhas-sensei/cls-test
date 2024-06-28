import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function Login(){
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
      <div className="flex flex-col items-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Teacher</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Student</button>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Are you an admin?</button>
      </div>
    </div>
    );
}
export default Login;