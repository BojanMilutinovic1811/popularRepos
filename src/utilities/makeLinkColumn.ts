
const makeLink = (params: any): string => {
    const link = params.value.replace('https://api.github.com/repos/', 'https://github.com/')
   return `<a href="${link}" target="_blank">${link}</a>`
}

export default makeLink