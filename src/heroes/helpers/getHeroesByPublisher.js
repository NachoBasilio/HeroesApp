import heroes from "../data/heroes";


export default function getHeroesByPublisher(publisher) {
    if(!['DC Comics', 'Marvel Comics'].includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    const heroesFiltrados = heroes.filter(hero => hero.publisher === publisher);

    return heroesFiltrados;
}
