import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response);
                context.commit('SET_NEWS', response.data);
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
    FETCH_ASK(context) {
        fetchAskList()
            .then(({ data }) => {
                context.commit('SET_ASK', data);
            })
            .catch(error => console.log(error));
    }
}