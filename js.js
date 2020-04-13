function capitalize(s) {
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join(""); //нечётный индекс
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join(""); //чётный индекс
  return [even, odd];
};
