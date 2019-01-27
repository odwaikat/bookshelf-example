export const simpleAction = () => dispatch => {
    fetch('https://api.myjson.com/bins/epfzs')
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'SIMPLE_ACTION',
                payload: data
            })
        })
}