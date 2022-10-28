import winnerImg from '../Media/win.jpg';
import { Outlet, Link } from "react-router-dom";

const Win = () => {
  return (
    <div>
      <img src={winnerImg} alt="If this gif loaded, you'd be dead." />
      <Link to="/Home">Return to Start Page</Link>
      
      
    </div>
    
    
    

  );

};

export default Win;