import {
    loadCategoriesDataAction,
    loadBooksCarouselDataAction
} from 'actions/homeActions'

export const loadCategoriesData = () => dispatch => {
    fetch('https://api.myjson.com/bins/epfzs')
        .then((response) => response.json())
        .then((data) => {
            dispatch(loadCategoriesDataAction(data.categories))
        })
}
export const loadBooksCarouselData = () => dispatch => {
    fetch('https://api.myjson.com/bins/1gt6pk')
        .then((response) => response.json())
        .then((data) => {
            dispatch(loadBooksCarouselDataAction(data.books))
        })
}