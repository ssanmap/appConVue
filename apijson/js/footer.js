let footer = Vue.component('footer_n', {
    template:` <footer class="footer bg-dark">
    <div class="container text-white">
      <br />
      <div class="row">
        <div class="col-12 col-md-4 col-lg-2">
          <h4>Facebook</h4>
          <p><i class="fab fa-facebook"></i> <a href="#">/Nemesis</a></p>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <h4 id="contacto">Contacto</h4>
          <p>Santiago</p>
          <p>
            Direcci&oacute;n: San Bernardo<br />
            Tel&eacute;fonos: Secreto <br />
            Email: Nemesis@detda.cl
          </p>
        </div>
        <div class="col-12 col-md-4 col-lg-6 text-center" id="name">
          <p>  <span class="nemesis">Nemesis </span>All Rights Reserved</p>
         
          <span style="font-size: 3rem;">
              <span style="color: red">
              <i class="far fa-eye"></i>
              </span>
            </span>
          <p>Desarrollador || Ingeriero || Fullstack</p>
        </div>
      </div>
    </div>
  </footer>`

})

export default footer;