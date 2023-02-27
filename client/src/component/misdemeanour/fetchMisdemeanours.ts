export const fetchMisdemeanours = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.misdemeanours;
  } catch (e) {
    console.error(e);
  }
};
