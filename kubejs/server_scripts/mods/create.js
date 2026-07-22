// -----------------------------------------
// CREATED BY STATIC, MODIFIED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:create/${id}`;

    // -- CREATE REMOVED RECIPES -- //
    const CREATE_DELETED_ITEMS = [
        cr('crafting/kinetics/fluid_tank'),
        cr('smelting/platinum_ingot_compat_modern_industrialization'),
        cr('blasting/platinum_ingot_compat_modern_industrialization'),
        cr('smelting/silver_ingot_compat_modern_industrialization'),
        cr('blasting/silver_ingot_compat_modern_industrialization'),
        cr('crafting/appliances/chain_from_zinc')
    ];
    CREATE_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));
    // event.remove( {type: cr('crushing'), output: cr('crushed_platinum_ore')} );
    event.remove( {mod: 'create', output: mi('uranium_ingot') });

    // -- TANK -- //
    event.shaped(cr('fluid_tank'), [
        'CGC',
        'GSG',
        'CGC'
    ],
    {
        C: '#c:plates/copper',
        S: '#c:plates/steel',
        G: '#c:glass_blocks'
    }).id('statech:create/fluid_tank');

});

ServerEvents.tags('fluid', event => {

    // Remove lava from infinite source tag
    event.remove('create:bottomless/allow', mc('lava'))

})