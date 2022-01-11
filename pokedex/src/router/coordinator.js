export const goToPokedex = (history) => {
    history.push('/pokedex')
}

export const goToDetailPage = (history, name) => {
    history.push(`/detail/${name}`)
}

export const goToHome = (history) => {
    history.push('/')
}