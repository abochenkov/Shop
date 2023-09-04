const state = {
    all: [],
    product: [{id: 1, title: 'name'}]
}

function addProduct () {
    const itemProduct = state.all.find( item => item.id === product.id);
    if( itemProduct === undefined) {
        console.log("This is undefined!")
        state.all.push({id: 2, title: "work!"});
        console.log(state.all);
        state.all.push({id: 3, title: "work!"});
        console.log(state.all);
    }
    else {
        console.log("Another type");
    }
};

addProduct();