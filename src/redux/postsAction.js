import axios from "axios"

export const fetchPosts = () => async (dispatch,getState) =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: "FETCH_POST",
        payload: res.data
    })
}
// export const fetchPosts = async () =>{

//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     return{
//         type: 'FETCH_POSTS',
//         payload: res.data
//     }
// }