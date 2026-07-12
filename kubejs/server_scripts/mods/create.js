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
        // cr('smelting/lead_ingot_compat_techreborn'),
        // cr('blasting/lead_ingot_compat_techreborn'),
        // cr('blasting/tin_ingot_compat_techreborn'),
        // cr('smelting/tin_ingot_compat_techreborn'),
    ];
    CREATE_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));
    // event.remove( {type: cr('crushing'), output: cr('crushed_platinum_ore')} );
    event.remove( {mod: 'create', output: mi('uranium_ingot') });

    // event.smelting(tr('zinc_ingot'), '#c:raw_zinc_ores', 1);
    // event.blasting(tr('zinc_ingot'), '#c:raw_zinc_ores', 1);

    // -- DOUGH FROM FLOUR AND KIBE WATER BUCKET -- // 
    // event.shapeless(cr('dough'), [ cr('wheat_flour'), 'kibe:water_wooden_bucket' ] )
        // .id(st('dough'))
        // .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');

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

    // -- SPRINKLER FROM SLICE AND DICE -- //
    // event.shaped(sd('sprinkler'), [
        // 'SPS',
        // 'SBS'
    // ], 
    // {
        // S: '#c:copper_plates',
        // P: cr('fluid_pipe'),
        // B: mc('iron_bars')
    // })
    // .id(st('sprinkler'));
});

ServerEvents.tags('fluid', event => {

    // Remove lava from infinite source tag
    event.remove('create:bottomless/allow', mc('lava'))

})