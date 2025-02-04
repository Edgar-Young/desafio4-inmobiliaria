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
const propiedades_venta = [
  {
    nombre: "Casa de lujo",
    src: "./asset/img/casa-lujo.avif",
    descripcion: "Mansión contemporánea con amenities exclusivas",
    ubicacion: "La Moraleja, Madrid",
    habitaciones: 5,
    banios: 5,
    costo: 750000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento en zona residencial",
    src: "./asset/img/apartamento-residencial.webp",
    descripcion: "Departamento familiar con áreas comunes",
    ubicacion: "Valencia Norte",
    habitaciones: 3,
    banios: 2,
    costo: 350000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Villa con piscina",
    src: "./asset/img/villa-picina.webp",
    descripcion: "Propiedad exclusiva con jardín tropical",
    ubicacion: "Costa Blanca",
    habitaciones: 6,
    banios: 5,
    costo: 1200000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Estudio en centro histórico",
    src: "./asset/img/estudio-historico.avif",
    descripcion: "Encantador estudio totalmente renovado",
    ubicacion: "Centro de Sevilla",
    habitaciones: 1,
    banios: 1,
    costo: 180000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa con jardin",
    src: "./asset/img/casa-jardin.jpg",
    descripcion: "Encantadora casa con amplio jardin",
    ubicacion: "Centro de Sevilla",
    habitaciones: 3,
    banios: 2,
    costo: 200000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Amplio departamento",
    src: "./asset/img/dpto.jpg",
    descripcion: "Departamento con vistas residenciales",
    ubicacion: "Centro de Sevilla",
    habitaciones: 2,
    banios: 2,
    costo: 200000,
    smoke: true,
    pets: true,
  },
];

const propVenta = document.querySelector("#venta .row");
const propAlquiler = document.querySelector("#alquiler .row");

const Cards = (tipoPropiedad, element) => {
  let html = "";
  for (let propiedad of tipoPropiedad.slice(0, 3)) {
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
  element.innerHTML += html;
};

Cards(propiedades_venta, propVenta);
Cards(propiedades_alquiler, propAlquiler);
