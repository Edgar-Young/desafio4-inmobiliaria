const propiedades_alquiler = [
  {
    nombre: "Casa en la playa",
    src: "./asset/img/casa-playa.jpg",
    descripcion: "Amplia casa frente al mar con jardín privado",
    ubicacion: "Marbella, Costa del Sol",
    habitaciones: 3,
    banios: 5,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento céntrico",
    src: "./asset/img/apartamento-centrico.jpg",
    descripcion: "Moderno departamento totalmente equipado",
    ubicacion: "Centro de Madrid",
    habitaciones: 2,
    banios: 2.5,
    costo: 1500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Chalet en montaña",
    src: "./asset/img/chalet-montana.jpg",
    descripcion: "Acogedora cabaña con vista a las montañas",
    ubicacion: "Pirineos Aragoneses",
    habitaciones: 4,
    banios: 3,
    costo: 3000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Loft moderno",
    src: "./asset/img/loft-moderno.avif",
    descripcion: "Espacio minimalista con diseño contemporáneo",
    ubicacion: "Barrio de moda en Barcelona",
    habitaciones: 1,
    banios: 1,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento con alberca",
    src: "./asset/img/alberca-dpto.webp",
    descripcion: "Departamento con alberca propia",
    ubicacion: "Barrio de moda en Barcelona",
    habitaciones: 2,
    banios: 2,
    costo: 1500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa con vista al mar",
    src: "./asset/img/casa-mar.webp",
    descripcion: "Casa lujoso con vistas al mar mediterraneo",
    ubicacion: "Barrio de moda en Barcelona",
    habitaciones: 3,
    banios: 2,
    costo: 1800,
    smoke: false,
    pets: false,
  },
];

const propAlquiler = document.querySelector("#alquiler .row");

let html = "";
for (let propiedad of propiedades_alquiler) {
  html += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="${propiedad.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.banios}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${
                  propiedad.smoke
                    ? `
                    <p class="text-success">
                        <i class="fas fa-smoking"></i> 
                        Permitido fumar
                    </p>`
                    : `
                    <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> 
                        No se permite fumar
                    </p>`
                }
                ${
                  propiedad.pets
                    ? `
                    <p class="text-success">
                        <i class="fas fa-paw"></i> 
                        Mascotas permitidas
                    </p>`
                    : `
                    <p class="text-danger">
                        <i class="fa-solid fa-ban"></i> 
                        No se permiten mascotas
                    </p>`
                }
                
              </div>
            </div>
          </div>
    `;
}

propAlquiler.innerHTML += html;
