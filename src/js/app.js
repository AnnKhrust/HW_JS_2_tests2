// TODO: write your code here
export default function sortedHealth(heroes) = {
    const sortedHeroes = heroes.sort((a,b) => b.health - a.health);
    return sortedHeroes
}