import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList, fetchAskList, fetchJobsList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        job: []
    },
    mutations:{
        SET_NEWS(state, data){
            state.news = data
        },
        SET_ASK(state, data){
            state.ask = data
        },
        SET_JOB(state, data){
            state.job = data
        }
    },
    actions: {
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
});

