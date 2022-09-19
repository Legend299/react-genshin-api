export const cardColors = (string) => {
  switch (string) {
    case 'Pyro':
      return 'bg-red-100';
    case 'Cryo':
      return 'bg-cyan-100';
    case 'Electro':
      return 'bg-purple-100';
    case 'Hydro':
      return 'bg-blue-100';
    case 'Geo':
      return 'bg-yellow-100';
    case 'Anemo':
      return 'bg-green-100';
    case 'Dendro':
      return 'bg-green-400';
    default:
      return 'Error';
  }
};

export const cardTextColors = (string) => {
  switch (string) {
    case 'Pyro':
      return 'text-red-600';
    case 'Cryo':
      return 'text-cyan-600';
    case 'Electro':
      return 'text-purple-600';
    case 'Hydro':
      return 'text-blue-600';
    case 'Geo':
      return 'text-yellow-600';
    case 'Anemo':
      return 'text-green-500';
    case 'Dendro':
      return 'text-green-700';
    default:
      return 'Error';
  }
};
