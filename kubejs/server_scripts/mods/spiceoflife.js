ServerEvents.tags('item', e => {
    const SPICEOFLIFE_FOOD_CARRIERS = [
        'spiceoffabric:paper_bag',
        'spiceoffabric:lunch_box',
        'spiceoffabric:picnic_basket'
    ];
    SPICEOFLIFE_FOOD_CARRIERS.forEach(id => e.add('kubejs:food_carriers', id));
});