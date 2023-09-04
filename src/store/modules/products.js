const state = {
    all: [
        {'id': 1, 'title': 'Watch', 'inventory': 5, 'totalInventory':5, 'price': 170, 'img': "./src/assets/img/watch.jpg"},
        {'id': 2, 'title': 'Headphones', 'inventory': 7, 'totalInventory':7, 'price': 100, 'img': "./src/assets/img/headphones.jpg"},
        {'id': 3, 'title': 'Pen', 'inventory': 13 , 'totalInventory':13, 'price': 8, 'img': "./src/assets/img/pen.jpg"}
    ],
    msg: 'Vuex'
};

const getters = {
    products(state) {
        return state.all.filter(product => product.inventory);
    },
};

const actions = {};

const mutations = {
    plusInventory (state, product) {
        const itemProduct = state.all.find( item => item.id === product.id);
        itemProduct.inventory++ ;
    },
    minusInventory (state, product) {
        const itemProduct = state.all.find( item => item.id === product.id);
        itemProduct.inventory-- ;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};