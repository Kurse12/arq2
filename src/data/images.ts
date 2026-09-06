const local = (name: string) => `/img/${name}`;

export const images = {
  heroExterior: (_w: number) => local('hero.png'),
  casaHorizonte: (_w: number) => local('casa-horizonte.png'),
  casaAlerce: (_w: number) => local('casa-alerce.png'),
  pabellonCostanera: (_w: number) => local('pabellon-costanera.png'),
  casaPiedra: (_w: number) => local('casa-piedra.png'),
  studioInterior: (_w: number) => local('studio-interior.png'),
  featuredInterior: (_w: number) => local('featured-interior.png'),
  contactInterior: (_w: number) => local('contact-interior.png'),
  approachA: (_w: number) => local('approach-a.png'),
  approachB: (_w: number) => local('approach-b.png'),
  approachC: (_w: number) => local('approach-c.png'),
  proyectado: (_w: number) => local('proyectado.png'),
};
