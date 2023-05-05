ServerEvents.recipes(e => {
    e.remove({id: 'twilightforest:uncrafting_table'});
})

ServerEvents.tags('item', e => {
    e.removeAll('twilightforest:portal_activators');
    e.add('twilightforest:portal_activators', 'kubejs:magic_diamond');
});