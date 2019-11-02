class Nonogram {
  constructor(id, puzzle, indicators) {
    this.id = id;
    this.puzzle = puzzle;
    this.indicators = indicators;
    this.completed = false;
  }

  completed() {
    this.completed = true;
  }
}

export const games = {
  easy: [
    new Nonogram(
      1,
      [
        [true, false, false, false, false],
        [true, true, true, true, false],
        [false, false, true, true, true],
        [false, false, true, true, true],
        [true, true, true, true, false]
      ],
      { top: [[2, 1], [1, 1], [4], [4], [2]], side: [[1], [4], [3], [3], [4]] }
    ),
    new Nonogram(
      2,
      [
        [false, false, true, true, true],
        [false, false, false, true, true],
        [false, false, true, true, true],
        [true, true, false, true, false],
        [true, true, false, false, false]
      ],
      { top: [[2], [2], [1, 1], [4], [3]], side: [[3], [2], [3], [2, 1], [2]] }
    )
  ],
  medium: [],
  hard: []
};
