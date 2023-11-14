// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', event => {
    const chimes = [
        ch('carved_bamboo_chimes'),
        ch('bamboo_chimes'),
        ch('iron_chimes'),
        ch('copper_chimes'),
        ch('amethyst_chimes')
    ];
    chimes.forEach(id => event.add(kj('chimes'), id));
});