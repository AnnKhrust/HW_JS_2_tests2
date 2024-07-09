import sortedHealth from "../app";

const heroesStatus = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]

  const sortedHeroesStatus = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]

  test('sorted heroes', () => {
    const sortedHeroes = sortedHealth(heroesStatus);
    expect(sortedHeroes).toEqual(sortedHeroesStatus);
});