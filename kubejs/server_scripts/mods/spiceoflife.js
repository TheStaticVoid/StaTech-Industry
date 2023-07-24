// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let sf = (id) => `spiceoffabric:${id}`;
    let kj = (id) => `kubejs:${id}`;

    const SPICEOFLIFE_FOOD_CARRIERS = [
        sf('paper_bag'),
        sf('lunch_box'),
        sf('picnic_basket')
    ];
    SPICEOFLIFE_FOOD_CARRIERS.forEach(id => e.add(kj('food_carriers'), id));
});