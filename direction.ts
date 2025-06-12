enum direction {
  North,
  South,
  East,
  West
}

function moves(dir: Direction): string {
  return `Moving ${Direction[dir]}`;
}

console.log(move(Direction.North)); 