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
}
