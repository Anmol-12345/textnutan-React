//react function based componenet ke liye
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to = "/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to = "/about">{props.about_Text}</Link>
        </li>
    
      </ul>

      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      {/* we use for toggle the color of nav bar */}
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Toggle Mode</label>
        </div> */}
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
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href = "/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href = "/">{about_Text}</a>
//         </li>
    
//       </ul>
//       <form className="d-flex" role="search">
//         {/*success -->Green*/}
//         {/*danger -->red*/}
//         {/*primary -->blue*/}
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button type="button" className="btn btn-secondary">Search</button>
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
  toggleMode: PropTypes.func
}