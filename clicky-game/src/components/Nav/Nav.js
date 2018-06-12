// import React from "react";
// import "./Nav.css";

// const Nav = props => (
//     <div>
//    // <span>
//     <h2><a href="/">Bird Clicky Game</a></h2>
//     </span>
//     <span>
//     className={props.message.indexOf('incorrectly') !== -1 ? 
//     "desc-incorrect" : 
//     props.message.indexOf('correctly') !== -1 ?
//         "desc-correct" :
//         "desc-normal"}
//         {props.message}
//     </span>
//     <span>
//     Score: {props.curScore} | Top Score: {props.topScore}
//     </span>
//     <nav className="navbar navbar-dark bg-dark">
//     <a className="navbar-brand" href="/">
//       Clickey game
//     </a>
//   </nav>
//    </div>
    
// );
import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li className="nav-item"><a href="/">Bird Clicky Game</a></li>
    
            <li className="nav-item"
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li className="nav-item">Score: <span>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Nav;
