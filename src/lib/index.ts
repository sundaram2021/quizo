export const pickRandom = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)]
}