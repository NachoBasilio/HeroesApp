import heroes from "../data/heroes";


export default function getHeroByID(id) {
   if (id === "") {
        throw new Error(`ID no puede estar vacío`);
    }else if (id === null) {
        throw new Error(`ID no puede ser null`);
    }else if (id === undefined) {
        throw new Error(`ID no puede ser undefined`);
    }
    

    const heroeFiltrado = heroes.find(hero => hero.id === id);    

    return heroeFiltrado;
}
