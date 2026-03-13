export interface StarWarsAPI {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;

  [key: string]: string;
}

export interface NavBarProps {
  tabs: { [key: string]: string };
  setActiveTab: (tab: string) => void;
}

export interface StarWarsItem {
  name?: string;
  title?: string;

  birth_year?: string;
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  skin_color?: string;

  homeworld?: string;
  films?: string[];
  species?: string[];
  starships?: string[];
  vehicles?: string[];
  url: string;

  diameter: string;
  climate: string;
  population: string;
  orbital_period: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  gravity: string;

  director: string;
  characters: string[];
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  classification: string;
  average_height: string;
  average_lifespan: string;
  designation: string;
  eye_colors: string[];
  language: string;
  people: string[];
  skin_colors: string;
}
