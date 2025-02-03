// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ae = (id) => `ae2:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let jh = (id) => `justhammers:${id}`;

    // -- MODERN INDUSTRIALIZATION REMOVED RECIPES -- //
    let MI_REMOVED_RECIPES = [
        mi('forge_hammer'),
        mi('vanilla_recipes/steel_forge_hammer_asbl')
    ];
    MI_REMOVED_RECIPES.forEach(id => { e.remove({id: id}) });


    // -- LARGE IRON PLATE -- // 
    e.shapeless(mi('iron_large_plate'), [ jh('iron_hammer'), mc('iron_block')]).damageIngredient(jh('iron_hammer')).id(st('iron_large_plate'));

    // -- FORGE HAMMER -- //
    e.shaped(mi('forge_hammer'), [
        'PPP',
        ' I ',
        'BBB'
    ], 
    {
        P: mi('iron_large_plate'),
        I: '#c:ingots/iron',
        B: '#c:storage_blocks/iron'
    }).id(st('forge_hammer'));
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;

    const LV_CABLES = [
        mi('copper_cable'),
        mi('tin_cable'),
        mi('silver_cable')
    ];
    LV_CABLES.forEach(id => { e.add(mi('cables/lv'), id) });

    const MV_CABLES = [
        mi('cupronickel_cable'),
        mi('kanthal_cable')
    ];
    MV_CABLES.forEach(id => { e.add(mi('cables/mv'), id) });

    const HV_CABLES = [
        mi('aluminum_cable'),
        mi('kanthal_cable')
    ];
    HV_CABLES.forEach(id => { e.add(mi('cables/hv'), id) });

    const EV_CABLES = [
        mi('annealed_copper_cable'),
        mi('platinum_cable'),
        mi('tungstensteel_cable')
    ];
    EV_CABLES.forEach(id => { e.add(mi('cables/ev'), id) });

    const SV_CABLES = [
        mi('superconductor_cable')
    ];
    SV_CABLES.forEach(id => { e.add(mi('cables/sv'), id) });
});