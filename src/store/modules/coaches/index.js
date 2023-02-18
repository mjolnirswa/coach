import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Pupa',
                  lastName: 'Pupkin',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Pupa and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Ivan',
                  lastName: 'Ivanov',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Ivan and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
            ]
        };
    },
    mutations,
    actions,
    getters
};