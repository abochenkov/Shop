const state = {
    all: [],
    checkStatus: false,
    checkRemove: false
};

const getters = {
    cart(state) {
        return state.all.filter(product => product.quantity);
    },
    quantity(state, getters) {
        let quantity = 0; 
        getters.cart.forEach(product => {quantity += product.quantity;});
        return quantity;
    },
    totalSum(state, getters) {
        let sum = 0; 
        getters.cart.forEach(product => {sum += product.quantity * product.price;});
        return sum;
    }
};

const actions = {
    addProductToCart({state, commit, rootState}, product) {
        const products = rootState.products.all;
        const productsItem = products.find( item => item.id === product.id);
    

        commit('checkAddProductToCart', productsItem);
        if(state.checkStatus) {
            commit('addProductQuantity', product);
            commit('products/minusInventory', product, {root:true});
        }
        
    },
    removeProductFromCart({state, commit}, product) {
        commit('checkRemoveProductFromCart', product);
        if(state.checkRemove) {
            commit('removeProductQuantity', product);
            commit('products/plusInventory', product, {root:true});
        }
        
    }
};

const mutations = {
    checkAddProductToCart(state, productsItem) {
        if( productsItem.inventory > 0) {state.checkStatus = true;}
        else {state.checkStatus = false;}
    },
    addProductQuantity(state, product) {
        const itemProduct = state.all.find( item => item.id === product.id);
        if(itemProduct === undefined) {
            state.all.push({id: product.id,
                            title: product.title,
                            quantity: 1,
                            price: product.price,
                            img: product.img});
        }
        else {
            itemProduct.quantity++;
        }
    },
    checkRemoveProductFromCart(state, product) {
        const itemProduct = state.all.find( item => item.id === product.id);
        if(itemProduct.quantity > 0) {
            state.checkRemove = true;
        }
        else {state.checkRemove = false;}
    },
    removeProductQuantity(state, product) {
        const itemProduct = state.all.find( item => item.id === product.id);
        itemProduct.quantity--;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};