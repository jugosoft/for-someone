const calculate_drunk_turtle = (n, day=0) => {
  day += 1;
  n += 50;
  if (n >= 100) {
    return day;
  }
  return calculate_drunk_turtle(n - 30, day);
}

console.log(`Turtle climbs for ${calculate_drunk_turtle(0)} days.`); // 4

const calculate_handshakes = men_count => (men_count - 1) * men_count / 2;
console.log(`Men has performed ${calculate_handshakes(10)} handschakes total.`); // 45

const remove_dublicates = (input_words) => {
  return [...new Set(input_words.split(','))].join(',');
}

console.log(`'кошка,собака,лошадь,корова,кошка' -> '${remove_dublicates('кошка,собака,лошадь,корова,кошка')}'`);
