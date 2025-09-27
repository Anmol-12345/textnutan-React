//react function based componenet ke liye
import React from 'react'
import PropTypes from 'prop-types'
//import { a } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href = "#">{props.title}</a>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href = "#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-a" href = "#">{props.about_Text}</a>
        </li>
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <buthrefn className="btn btn-outline-success" type="submit">Search</buthrefn>
      </form>
      {/* we use for hrefggle the color of nav bar */}

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>  
  )
}

//Ye use karege jab  default value deni ho agar....
// export default function Navbar({title = "Set title here", about_Text = "About text here"}) {
//   return (
//   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href = "/">{title}</a>
//     <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
//       <span className="navbar-hrefggler-icon"></span>
//     </buthrefn>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-a active" aria-current="page" href = "/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-a" href = "/">{about_Text}</a>
//         </li>
    
//       </ul>
//       <form className="d-flex" role="search">
//         {/*success -->Green*/}
//         {/*danger -->red*/}
//         {/*primary -->blue*/}
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <buthrefn type="buthrefn" className="btn btn-secondary">Search</buthrefn>
//       </form>
//     </div>
//   </div>
// </nav>
//   )
// }

// ✅ Default props
Navbar.defaultProps = {
  title: 'Set title here',
  about_Text: 'About'
}

// ✅ PropTypes (optional but good practice)
Navbar.propTypes = {
  title: PropTypes.string,
  about_Text: PropTypes.string,
  mode: PropTypes.string,
  hrefggleMode: PropTypes.func
}