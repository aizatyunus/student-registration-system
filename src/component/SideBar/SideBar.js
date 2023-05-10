// import React from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import '../App.css';

// export default function SidebarMain() {
    
//     return (
//         <Sidebar position="left" visible={true} showCloseIcon={false} className="SidebarMain">
//             <h2>My Sidebar</h2>
//             <p>This is my sidebar content.</p>
//         </Sidebar>
//     )
// }

// import React from 'react';
// import { MegaMenu } from 'primereact/megamenu';
// import { Link } from 'react-router-dom';
// import 'primeicons/primeicons.css';
// import '../App.css';

// export default function SidebarMain() {
//   const items = [
//     {
//       label: 'Home Page',
//       icon: 'pi pi-fw pi-home',
//       url: '/CourseList'
//     },
//     {
//       label: 'Users',
//       icon: 'pi pi-fw pi-users'
//     },
//     {
//       label: 'Events',
//       icon: 'pi pi-fw pi-calendar'
//     },
//     {
//       label: 'Settings',
//       icon: 'pi pi-fw pi-cog'
//     }
//   ];

//   return (
//     <div className="sidebar-wrapper">
//       <div className="card">
//         <Link to="/"><MegaMenu model={items} orientation="vertical" className="custom-megamenu" style={{ width: '100%' }} /></Link>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/' className='sidebar-link'>
            <div className='sidebar-item'>
              <span>Main Menu</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/CourseList' className='sidebar-link'>
            <div className='sidebar-item'>
              <span>Course Enrollment</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/Payment' className='sidebar-link'>
            <div className='sidebar-item'>
              <span>Payment</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;