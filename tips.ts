export const pending = (ms:number) => {
  return new Promise((resolve) => setTimeout(()=> {resolve(true)},ms))
}