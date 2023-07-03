// ServerEvents.recipes(e => {
//     let la = (id) => `lumberaxe:${id}`;
//     let st = (id) => `statech:lumberaxe/${id}`;

//     const REMOVED_RECIPES = [
//         la('iron_lumberaxe'),
//         la('gold_lumberaxe'),
//         la('diamond_lumberaxe')
//     ];
//     REMOVED_RECIPES.forEach(id => e.remove({id: id}));

//     // -- IRON LUMBERAXE -- //
//     e.shaped(la('iron_lumberaxe'), [
//         'PP',
//         'PS',
//         'PS'
//     ],
//     {
//         P: '#c:iron_plates',
//         S: '#c:wood_sticks'
//     })
//     .id(st('iron_lumberaxe'));

//     // -- GOLD LUMBERAXE -- //
//     e.shaped(la('gold_lumberaxe'), [
//         'PP',
//         'PS',
//         'PS'
//     ],
//     {
//         P: '#c:gold_plates',
//         S: '#c:wood_sticks'
//     })
//     .id(st('gold_lumberaxe'));

//     // -- DIAMOND LUMBERAXE -- //
//     e.shaped(la('diamond_lumberaxe'), [
//         'PP',
//         'PS',
//         'PS'
//     ],
//     {
//         P: '#c:diamonds',
//         S: '#c:wood_sticks'
//     })
//     .id(st('diamond_lumberaxe'));
// });

// ServerEvents.tags('item', e => {
//     let la = (id) => `lumberaxe:${id}`;

//     const LUMBERAXES = [
//         la('iron_lumberaxe'),
//         la('gold_lumberaxe'),
//         la('diamond_lumberaxe'),
//         la('netherite_lumberaxe')
//     ];
//     LUMBERAXES.forEach(id => e.add('kubejs:lumberaxes', id));
//     LUMBERAXES.forEach(id => e.add('c:tools', id));
//     LUMBERAXES.forEach(id => e.add('c:axes', id));
//     LUMBERAXES.forEach(id => e.add('c:tools/axes', id));
// });