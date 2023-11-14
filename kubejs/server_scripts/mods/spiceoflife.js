// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', event => {
    const SPICEOFLIFE_FOOD_CARRIERS = [
        sf('paper_bag'),
        sf('lunch_box'),
        sf('picnic_basket')
    ];
    SPICEOFLIFE_FOOD_CARRIERS.forEach(id => event.add(kj('food_carriers'), id));
});