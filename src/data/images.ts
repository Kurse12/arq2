const local = (name: string) => `/img/${name}`;

export const images = {
  heroExterior: (_w: number) => local('hero.webp'),
  casaHorizonte: (_w: number) => local('casa-horizonte.webp'),
  casaAlerce: (_w: number) => local('casa-alerce.webp'),
  pabellonCostanera: (_w: number) => local('pabellon-costanera.webp'),
  casaPiedra: (_w: number) => local('casa-piedra.webp'),
  studioInterior: (_w: number) => local('studio-interior.webp'),
  featuredInterior: (_w: number) => local('featured-interior.webp'),
  contactInterior: (_w: number) => local('contact-interior.webp'),
  approachA: (_w: number) => local('approach-a.webp'),
  approachB: (_w: number) => local('approach-b.webp'),
  approachC: (_w: number) => local('approach-c.webp'),
  proyectado: (_w: number) => local('proyectado.webp'),
};
