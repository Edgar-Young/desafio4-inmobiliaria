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

let html = "";
for (let propiedad of propiedades_venta) {
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

propVenta.innerHTML += html;
