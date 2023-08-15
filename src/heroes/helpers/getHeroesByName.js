import heroes from "../data/heroes";

export default function getHeroesByName(value="") {
    value = value.toLowerCase();
    if (value === "") {
        return [];
    }
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(value));
}
