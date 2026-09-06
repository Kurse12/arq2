import { images } from './images';

export interface Project {
  index: string;
  name: string;
  location: string;
  year: string;
  type: string;
  image: (w: number) => string;
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'Casa Horizonte',
    location: 'Buenos Aires, Argentina',
    year: '2024',
    type: 'Vivienda unifamiliar',
    image: images.casaHorizonte,
  },
  {
    index: '02',
    name: 'Casa Alerce',
    location: 'Bariloche, Argentina',
    year: '2023',
    type: 'Vivienda de montaña',
    image: images.casaAlerce,
  },
  {
    index: '03',
    name: 'Pabellón Costanera',
    location: 'Punta del Este, Uruguay',
    year: '2023',
    type: 'Residencia costera',
    image: images.pabellonCostanera,
  },
  {
    index: '04',
    name: 'Casa Piedra',
    location: 'Córdoba, Argentina',
    year: '2022',
    type: 'Vivienda unifamiliar',
    image: images.casaPiedra,
  },
];
