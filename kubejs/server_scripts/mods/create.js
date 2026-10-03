// -----------------------------------------
// CREATED BY STATIC, MODIFIED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/${id}`;

    // -- CREATE REMOVED RECIPES -- //
    const CREATE_DELETED_ITEMS = [
        cr('crafting/kinetics/fluid_tank'),
        cr('smelting/platinum_ingot_compat_modern_industrialization'),
        cr('blasting/platinum_ingot_compat_modern_industrialization'),
        cr('smelting/silver_ingot_compat_modern_industrialization'),
        cr('blasting/silver_ingot_compat_modern_industrialization'),
        cr('crafting/appliances/chain_from_zinc'),
        cr('crafting/appliances/dough'),
        cr('splashing/wheat_flour'),
        cr('mixing/dough_by_mixing'),
        dc('crafting/mechanical_cutter'),
    ];
    CREATE_DELETED_ITEMS.forEach((id) => event.remove({ id: id }));
    event.remove({ mod: 'create', output: mi('uranium_ingot') });
    event.remove({ mod: 'create_dragons_plus' });

    // -- TANK -- //
    event
        .shaped(cr('fluid_tank'), ['CGC', 'GSG', 'CGC'], {
            C: '#c:plates/copper',
            S: '#c:plates/steel',
            G: '#c:glass_blocks',
        })
        .id(st('fluid_tank'));
});

ServerEvents.tags('fluid', (event) => {
    // Remove lava from infinite source tag
    event.remove('create:bottomless/allow', mc('lava'));
});
