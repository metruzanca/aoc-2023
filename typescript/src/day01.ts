import { Solution, aoc } from "./utils";

const calibrate: Solution = (input, part2 = false) => input
  .split('\n')
  .filter(line => line.length !== 0)
  .map(line => {
    if (part2) {
      line = line
        // These are all the pair combination words:
        // oneight, twone, threeight, fiveight, sevenine, eighthree, eightwo, nineight
        .replaceAll('one',  'o1e')
        .replaceAll('two',  't2o')
        .replaceAll('three','t3e')
        .replaceAll('four', '4')  // no other number starts with f nor ends in r
        .replaceAll('five', 'f5e')
        .replaceAll('six',  '6')  // no number starts with s nor ends in x
        .replaceAll('seven','7n') // no number starts with s
        .replaceAll('eight','e8t')
        .replaceAll('nine', 'n9e')
    }
    const numbers: number[] = []
    for(const char of line.trim()) {
      const parsed = +char
      if (!Number.isNaN(parsed)) {
        numbers.push(parsed)
      }
    }
    return numbers
  })
  .map(arr => 10 * arr[0] + arr[arr.length - 1])
  .reduce((acc, cur) => acc + cur, 0)
;

aoc(1, calibrate) // Submitted Answers: 56397, 55701
