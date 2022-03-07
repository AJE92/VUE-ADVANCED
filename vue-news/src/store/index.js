import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        news: []
        ,jobs: []
        ,items: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ITEMS(state, items){
            state.items = items;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response);
                    context.commit('SET_NEWS',response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    console.log(response);
                    context.commit('SET_JOBS', response.data);
                })
                .catch(error => console.log(error));
        }
        ,
        FETCH_ITEMS(context) {
            fetchAskList()
                .then(response => {
                    console.log(response);
                    context.commit('SET_ITEMS', response.data);
                })
                .catch(error => console.log(error));
        }
    }
});