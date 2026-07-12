// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let ch = (id) => `chimes:${id}`;

    const chimes = [
        ch('carved_bamboo_chimes'),
        ch('bamboo_chimes'),
        ch('iron_chimes'),
        ch('copper_chimes'),
        ch('amethyst_chimes')
    ];
    chimes.forEach(id => e.add('kubejs:chimes', id));
});