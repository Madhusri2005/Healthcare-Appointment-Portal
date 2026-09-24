// import { Outlet, Link, useLocation } from "react-router-dom";
// function Admin() {
//   const location = useLocation();

//   const menu = [
//     { name: "Dashboard", path: "/admin" , icon:"bi-speedometer2"},
//     { name: "Doctors", path: "/admin/doctors", icon:"bi-person-badge"},
//     { name: "Patients", path: "/admin/patients", icon:"bi-people"},
//     { name: "Queue", path: "/admin/queue", icon:"bi-list-ol"},
//     { name: "Reports", path: "/admin/reports", icon:"bi-bar-chart"},
//     { name: "Settings", path: "/admin/settings", icon:"bi-gear"}
//   ];
//   return (
//     <div className="d-flex">
//       <div
//         className="bg-dark text-white"
//         style={{
//           width: "260px",
//           height: "100vh",
//           position: "fixed",
//           left: "0",
//           top: "0"
//         }}
//       >
//         <div className="p-4 border-bottom">

//           <h4 className="fw-bold text-center">
//             🏥 HMS ADMIN
//           </h4>

//         </div>
//         <ul className="nav flex-column p-3">

//           {menu.map((item,index)=>{

//             const active = location.pathname === item.path;
//             return(

//               <li className="nav-item mb-2" key={index}>
//                 <Link
//                   to={item.path}
//                   className={`nav-link text-white rounded 
//                   ${active ? "bg-primary" : ""}`}
//                 >
//                   <i className={`bi ${item.icon} me-2`}></i>

//                   {item.name}

//                 </Link>

//               </li>

//             );

//           })}

//         </ul>

//       </div>
//       <div
//         className="flex-grow-1"
//         style={{
//           marginLeft:"260px",
//           background:"#f8f9fa",
//           minHeight:"100vh"
//         }}
//       >

//         {/* HEADER */}

//         <nav className="navbar navbar-light bg-white shadow-sm px-4">

//           <h5 className="mb-0">
//             Hospital Management System
//           </h5>

//           <div>
//             <span className="me-3">
//               👨‍💼 Admin
//             </span>
//             <button className="btn btn-outline-danger btn-sm">
//               Logout
//             </button>
//           </div>
//         </nav>
//         <div className="container-fluid p-4">
//           <Outlet/>
//         </div>

//       </div>
//     </div>
//   );
// }
// export default Admin;
import { Outlet, Link, useLocation } from "react-router-dom";
function Admin() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" , icon:"bi-speedometer2"},
    { name: "Doctors", path: "/admin/doctors", icon:"bi-person-badge"},
    { name: "Patients", path: "/admin/patients", icon:"bi-people"},
    { name: "Queue", path: "/admin/queue", icon:"bi-list-ol"},
    { name: "Reports", path: "/admin/reports", icon:"bi-bar-chart"},
    { name: "Settings", path: "/admin/settings", icon:"bi-gear"}
  ];
  return (
    <div className="d-flex">
      <div
        className="bg-dark text-white"
        style={{
          width: "260px",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0"
        }}
      >
        <div className="p-4 border-bottom">

          <h4 className="fw-bold text-center">
            🏥 HMS ADMIN
          </h4>

        </div>
        <ul className="nav flex-column p-3">

          {menu.map((item,index)=>{

            const active = location.pathname === item.path;
            return(

              <li className="nav-item mb-2" key={index}>
                <Link
                  to={item.path}
                  className={`nav-link text-white rounded 
                  ${active ? "bg-primary" : ""}`}
                >
                  <i className={`bi ${item.icon} me-2`}></i>

                  {item.name}

                </Link>

              </li>

            );

          })}

        </ul>

      </div>
      <div
        className="flex-grow-1"
        style={{
          marginLeft:"260px",
          background:"#f8f9fa",
          minHeight:"100vh"
        }}
      >

        {/* HEADER */}

        <nav className="navbar navbar-light bg-white shadow-sm px-4">

          <h5 className="mb-0">
            Hospital Management System
          </h5>

          <div>
            <span className="me-3">
              👨‍💼 Admin
            </span>
            <button className="btn btn-outline-danger btn-sm">
              Logout
            </button>
          </div>
        </nav>
        <div className="container-fluid p-4">
          <Outlet/>
        </div>

      </div>
    </div>
  );
}
export default Admin;