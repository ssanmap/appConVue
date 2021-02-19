
let header = Vue.component('header_nav', {
    template:`

 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <div class="container-fluid">
   <a class="navbar-brand" href="#">TGIF</a>
   <button
     class="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav nav nav-pills nav-fill me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="index.html"
           >Home</a
         >
       </li>

       <li class="nav-item dropdown">
         <a
           class="nav-link dropdown-toggle"
           href="#"
           id="navbarDropdown"
           role="button"
           data-toggle="dropdown"
         >
           Congress 113
         </a>
         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a class="dropdown-item" href="house.html">House</a></li>
           <li><a class="dropdown-item" href="senate.html">Senate</a></li>
         </ul>
       </li>
       <li class="nav-item dropdown">
         <a
           class="nav-link dropdown-toggle"
           href="#"
           id="navbarDropdown"
           role="button"
           data-toggle="dropdown"
         >
           Attendance
         </a>
         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a class="dropdown-item" href="house.attendance.html">House</a></li>
           <li><a class="dropdown-item" href="senate.attendance.html">Senate</a></li>
         </ul>
       </li>
       <li class="nav-item dropdown">
         <a
           class="nav-link dropdown-toggle"
           href="#"
           id="navbarDropdown"
           role="button"
           data-toggle="dropdown"
         >
           Party Loyalty
         </a>
         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a class="dropdown-item" href="house.party.html">House</a></li>
           <li><a class="dropdown-item" href="senate.party.html">Senate</a></li>
         </ul>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" tabindex="-1"></a>
       </li>
     </ul>
   </div>
 </div>
</nav>`

})
export default header;