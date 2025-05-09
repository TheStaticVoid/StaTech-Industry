// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:extended_industrialization/${id}`;
    
    // -- EXTENDED INDUSTRIALIZATION REMOVED RECIPES -- //
    let EI_REMOVED_RECIPES = [
        ei('machines/alloy_smelter/craft/electric')
    ];
    EI_REMOVED_RECIPES.forEach(id => { e.remove({id: id}) });

    // -- ELECTRIC ALLOY SMELTER -- //
    e.shaped(ei('electric_alloy_smelter'), [
        'CRC',
        'AFA',
        'TCT'
    ],
    {
        C: mi('cupronickel_wire_magnetic'),
        R: mi('tin_rotor'),
        A: mi('analog_circuit'),
        F: mi('electric_furnace'),
        T: '#' + mi('cables/lv')
    }).id(st('electric_alloy_smelter'));
});