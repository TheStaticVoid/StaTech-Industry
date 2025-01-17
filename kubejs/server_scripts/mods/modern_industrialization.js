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