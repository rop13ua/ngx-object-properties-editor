
interface Person {
    id: number;
    name: string;
}

export const PEOPLE: Person[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

interface House {
    id: number;
    doors: number;
    type: string;
    windows: number;
    color: string;
}

export const HOUSE: House[] = [
  { id: 1, doors: 1, type:"flat", windows:4, color: "black"},
  { id: 2, doors: 2, type:"apartment", windows:6, color: "white"},
  { id: 3, doors: 5, type:"cottage", windows:10, color: "yellow"}
];