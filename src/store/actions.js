import {fetchNewsList, fetchAskList, fetchJobsList} from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then( response => {
            context.commit('SET_NEWS', response.data)
        }).catch(error =>{
            console.log(error);
        })

    },
    FETCH_ASK(context) {
        fetchAskList()
        .then( response => {
            context.commit('SET_ASK', response.data)
        }).catch(error =>{
            console.log(error);
        })

    },
    FETCH_JOB(context) {
        fetchJobsList()
        .then( response => {
            context.commit('SET_JOB', response.data)
        }).catch(error =>{
            console.log(error);
        })

    }
}