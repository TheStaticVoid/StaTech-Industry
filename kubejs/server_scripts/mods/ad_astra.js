// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:space_age/${id}`;

    // -- AD ASTRA REMOVED RECIPES -- //
    const AD_ASTRA_DELETED_RECIPES = [
        ad('glowing_iron_pillar'),
        ad('glowing_steel_pillar'),
        ad('glowing_desh_pillar'),
        ad('glowing_ostrum_pillar'),
        ad('glowing_calorite_pillar'),
        ad('steel_cable'),
        ad('desh_cable'),
        ad('desh_fluid_pipe'),
        ad('ostrum_fluid_pipe'),
        ad('cable_duct'),
        ad('fluid_pipe_duct'),
        ad('coal_generator'),
        ad('compressor'),
        ad('etrionic_blast_furnace'),
        ad('nasa_workbench'),
        ad('fuel_refinery'),
        ad('water_pump'),
        ad('energizer'),
        ad('cryo_freezer'),
        ad('oxygen_loader'),
        ad('wrench'),
        ad('tier_1_rocket'),
        ad('tier_2_rocket'),
        ad('tier_3_rocket'),
        ad('tier_4_rocket'),
        ad('engine_frame'),
        ad('fan'),
        ad('rocket_fin'),
        ad('rocket_nose_cone'),
        ad('steel_engine'),
        ad('steel_tank'),
        ad('desh_engine'),
        ad('desh_tank'),
        ad('ostrum_engine'),
        ad('ostrum_tank'),
        ad('calorite_engine'),
        ad('calorite_tank'),
    ];
    AD_ASTRA_DELETED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // --- SHAPED CRAFTING --- //
    // ------------------------//

    // -- PROBE COMPUTERS -- //
    event
        .shaped(kj('mki_probe_computer'), ['SCS', 'THD', 'SES'], {
            S: '#c:large_plates/stainless_steel',
            C: ad('rocket_nose_cone'),
            E: ad('steel_engine'),
            H: mi('advanced_machine_hull'),
            T: mi('transistor'),
            D: mi('diode'),
        })
        .id(st('mki_probe_computer'));

    event
        .shaped(kj('mkii_probe_computer'), ['SCS', 'THD', 'SES'], {
            S: '#c:large_plates/stainless_steel',
            C: ad('rocket_nose_cone'),
            E: ad('desh_engine'),
            H: mi('turbo_machine_hull'),
            T: mi('and_gate'),
            D: mi('or_gate'),
        })
        .id(st('mkii_probe_computer'));

    event
        .shaped(kj('mkiii_probe_computer'), ['SCS', 'THD', 'SES'], {
            S: '#c:large_plates/stainless_steel',
            C: ad('rocket_nose_cone'),
            E: ad('ostrum_engine'),
            H: mi('highly_advanced_machine_hull'),
            T: mi('arithmetic_logic_unit'),
            D: mi('memory_management_unit'),
        })
        .id(st('mkiii_probe_computer'));

    // -- GLOWING PILLARS -- //
    event
        .shaped('6x ' + ad('glowing_iron_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/iron',
            G: mc('glowstone'),
            D: '#c:dyes/blue',
        })
        .id(st('glowing_iron_pillar'));

    event
        .shaped('6x ' + ad('glowing_steel_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/steel',
            G: mc('glowstone'),
            D: '#c:dyes/purple',
        })
        .id(st('glowing_steel_pillar'));

    event
        .shaped('6x ' + ad('glowing_desh_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/desh',
            G: mc('glowstone'),
            D: '#c:dyes/red',
        })
        .id(st('glowing_desh_pillar'));

    event
        .shaped('6x ' + ad('glowing_ostrum_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/ostrum',
            G: mc('glowstone'),
            D: '#c:dyes/lime',
        })
        .id(st('glowing_ostrum_pillar'));

    event
        .shaped('6x ' + ad('glowing_calorite_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/calorite',
            G: mc('glowstone'),
            D: '#c:dyes/orange',
        })
        .id(st('glowing_calorite_pillar'));

    // -- TIERED SPACE PROBES -- //
    event
        .shaped('4x ' + kj('basic_space_probe'), ['GCD', 'FTC', 'IFG'], {
            G: '#c:gears/steel',
            C: mi('electrum_cable'),
            T: ad('steel_tank'),
            F: ad('rocket_fin'),
            D: mi('aluminum_drill'),
            I: '#modern_industrialization:item_pipes',
        })
        .id(st('basic_space_probe'));

    event
        .shaped('4x ' + kj('advanced_space_probe'), ['GCD', 'FTC', 'IFG'], {
            G: '#c:gears/desh',
            C: mi('aluminum_cable'),
            T: ad('desh_tank'),
            F: ad('rocket_fin'),
            D: mi('stainless_steel_drill'),
            I: '#modern_industrialization:item_pipes',
        })
        .id(st('advanced_space_probe'));

    event
        .shaped(
            '4x ' + kj('highly_advanced_space_probe'),
            ['GCD', 'FTC', 'IFG'],
            {
                G: '#c:gears/ostrum',
                C: mi('annealed_copper_cable'),
                T: ad('ostrum_tank'),
                F: ad('rocket_fin'),
                D: mi('titanium_drill'),
                I: '#modern_industrialization:item_pipes',
            }
        )
        .id(st('highly_advanced_space_probe'));
});
