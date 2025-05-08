// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- MODERN INDUSTRIALIZATION REMOVED RECIPES -- //
    let MI_REMOVED_RECIPES = [
        mi('forge_hammer'),
        mi('vanilla_recipes/steel_forge_hammer_asbl'),
        mi('materials/bronze_dust'),
        mi('materials/fire_clay_dust')
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

    // -- BRONZE DUST -- //
    e.shapeless('2x ' + mi('bronze_dust'), [ '3x ' + mi('copper_dust'), mi('tin_dust')]).id(st('bronze_dust'));

    // -- FIRE CLAY DUST -- //
    e.shaped('2x' + mi('fire_clay_dust'), [
        'CB',
        'CB'
    ], {
        C: mc('clay_ball'),
        B: mi('brick_dust')
    }).id(st('fire_clay_dust'));
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

    const ENERGY_OUTPUT_HATCH = [
        mi('lv_energy_output_hatch'),
        mi('mv_energy_output_hatch'),
        mi('hv_energy_output_hatch'),
        mi('ev_energy_output_hatch'),
        mi('superconductor_energy_output_hatch')
    ];
    ENERGY_OUTPUT_HATCH.forEach(id => { e.add('kubejs:energy_output_hatch', id) });

    const FLUID_INPUT_HATCH = [
        mi('bronze_fluid_input_hatch'),
        mi('steel_fluid_input_hatch'),
        mi('advanced_fluid_input_hatch'),
        mi('turbo_fluid_input_hatch'),
        mi('highly_advanced_fluid_input_hatch'),
    ];
    FLUID_INPUT_HATCH.forEach(id => { e.add('kubejs:fluid_input_hatch', id) });

    const FLUID_OUTPUT_HATCH = [
        mi('bronze_fluid_output_hatch'),
        mi('steel_fluid_output_hatch'),
        mi('advanced_fluid_output_hatch'),
        mi('turbo_fluid_output_hatch'),
        mi('highly_advanced_fluid_output_hatch'),
    ];
    FLUID_OUTPUT_HATCH.forEach(id => { e.add('kubejs:fluid_output_hatch', id) });

    const ITEM_INPUT_HATCH = [
        mi('bronze_item_input_hatch'),
        mi('steel_item_input_hatch'),
        mi('advanced_item_input_hatch'),
        mi('turbo_item_input_hatch'),
        mi('highly_advanced_item_input_hatch'),
    ];
    ITEM_INPUT_HATCH.forEach(id => { e.add('kubejs:item_input_hatch', id) });

    const ITEM_OUTPUT_HATCH = [
        mi('bronze_item_output_hatch'),
        mi('steel_item_output_hatch'),
        mi('advanced_item_output_hatch'),
        mi('turbo_item_output_hatch'),
        mi('highly_advanced_item_output_hatch'),
    ];
    ITEM_OUTPUT_HATCH.forEach(id => { e.add('kubejs:item_output_hatch', id) });

    const NUCLEAR_INPUT_HATCH = [
        mi('nuclear_fluid_hatch'),
        mi('nuclear_item_hatch')
    ];
    NUCLEAR_INPUT_HATCH.forEach(id => { e.add('kubejs:nuclear_hatch', id) });

    const NUCLEAR_FUEL = [
        mi('uranium_fuel_rod'),
        mi('uranium_fuel_rod_double'),
        mi('uranium_fuel_rod_quad'),
        mi('le_uranium_fuel_rod'),
        mi('le_uranium_fuel_rod_double'),
        mi('le_uranium_fuel_rod_quad'),
        mi('he_uranium_fuel_rod'),
        mi('he_uranium_fuel_rod_double'),
        mi('he_uranium_fuel_rod_quad'),
        mi('le_mox_fuel_rod'),
        mi('le_mox_fuel_rod_double'),
        mi('le_mox_fuel_rod_quad'),
        mi('he_mox_fuel_rod'),
        mi('he_mox_fuel_rod_double'),
        mi('he_mox_fuel_rod_quad')
    ];
    NUCLEAR_FUEL.forEach(id => { e.add('kubejs:nuclear_fuel', id) });

    const DEPLETED_FUEL = [
        mi('uranium_fuel_rod_depleted'),
        mi('le_uranium_fuel_rod_depleted'),
        mi('he_uranium_fuel_rod_depleted'),
        mi('le_mox_fuel_rod_depleted'),
        mi('he_mox_fuel_rod_depleted')
    ];
    DEPLETED_FUEL.forEach(id => { e.add('kubejs:depleted_nuclear_fuel', id) });
});