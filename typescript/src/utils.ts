import fs from 'fs'
import { resolve } from 'path'

export function loadInput(day: number): string {
  return fs.readFileSync(
    resolve(__dirname,`../../inputs/input-${day.toString().padStart(2, '0')}.txt`),
    { encoding: 'utf8' }
  )
}

export type Solution = (input: string, part2?: boolean) => void

export function aoc(day: number, solution: Solution) {
  const input = loadInput(day)

  const before1 = performance.now()
  const result1 = solution(input)
  const after1 = performance.now()
  console.log(`Part 1 done in ${(after1 - before1).toFixed(3)}s, result: `, result1);

  const before2 = performance.now()
  const result2 = solution(input, true)
  const after2 = performance.now()
  console.log(`Part 1 done in ${(after2 - before2).toFixed(3)}s, result: `, result2);
}

// Usure if this is good performance testing
// export function aocPerf(day: number, solution: Solution, times: number = 10_000) {
//   const input = loadInput(day)
  
//   console.log(`Benchmarking part 1 for ${times} runs...`);
//   const perfs1 = []
//   for(let i = 0; i < 10_000; i++) {
//     const before1 = performance.now()
//     solution(input)
//     const after1 = performance.now()
//     perfs1.push(after1 - before1)
//   }
  
//   console.log(`Benchmarking part 2 for ${times} runs...`);
//   const perfs2 = []
//   for (let i = 0; i < 10_000; i++) {
//     const before2 = performance.now()
//     solution(input, true)
//     const after2 = performance.now()
//     perfs2.push(after2 - before2)
//   }

//   const results = [
//     perfs1.reduce((acc, cur) => acc + cur, 0) / perfs1.length,
//     perfs2.reduce((acc, cur) => acc + cur, 0) / perfs2.length,
//   ]  

//   console.log(`Part 1 on average took: ${results[0].toFixed(3)}s`);
//   console.log(`Part 2 on average took: ${results[1].toFixed(3)}s`);

//   return results
// }