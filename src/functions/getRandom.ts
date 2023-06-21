/**
 * reatrive a random value in an array
 * @param arr the array will be reatrived
 * @returns the reatrive item
 */
export default (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
