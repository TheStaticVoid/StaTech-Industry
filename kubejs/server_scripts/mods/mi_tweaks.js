// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- LARGE CHEMICAL REACTOR -- //
    event.shaped(mt('large_chemical_reactor'), [
        'PRP',
        'UHU',
        'PCP'
    ],
    {
        P: mi('polytetrafluoroethylene_plate'),
        R: mi('chemical_reactor'),
        U: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('large_chemical_reactor'));

    // -- LARGE SCALE ASSEMBLER -- //
    event.shaped(mt('large_scale_assembler'), [
        'TGT',
        'MAP',
        'TCT'
    ],
    {
        G: kj('borosilicate_glass'),
        A: mi('assembler'),
        M: mi('advanced_motor'),
        P: mi('advanced_pump'),
        C: mi('processing_unit'),
        T: mi('tungstensteel_large_plate')
    })
    .id(st('large_scale_assembler'));

    // -- BULK COMPACTOR -- //
    event.shaped(mt('bulk_compactor'), [
        'PDP',
        'MCM',
        'PHP'
    ],
    {
        D: mi('digital_circuit'),
        C: mi('electric_compressor'),
        M: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        P: mi('steel_large_plate')
    })
    .id(st('bulk_compactor'));

        // -- BLAST ALLOY SMELTER -- //
    event.shaped(mt('blast_alloy_smelter'), [
        'CTC',
        'CAC',
        'KPK'
    ],
    {
        K: 'xtonesreworked:korp_block_9',
        C: mi('cupronickel_wire_magnetic'),
        T: mi('tungstensteel_coil'),
        A: ei('electric_alloy_smelter'),
        P: mi('processing_unit')
    })
    .id(st('blast_alloy_smelter'));

        // -- INDUSTRIAL MIXING MACHINE -- //
    event.shaped(mt('industrial_mixing_machine'), [
        'PTP',
        'BMB',
        'PLP'
    ],
    {
        L: mi('large_advanced_pump'),
        B: kj('borosilicate_glass'),
        T: mi('titanium_tank'),
        M: mi('electric_mixer'),
        P: mi('enderium_plate')
    })
    .id(st('industrial_mixing_machine'));

        // -- OVERSIZED ELECTROLYSIS CHAMBER -- //
    event.shaped(mt('oversized_electrolysis_chamber'), [
        'PMP',
        'BEB',
        'CLC'
    ],
    {
        L: mi('large_advanced_pump'),
        B: kj('borosilicate_glass'),
        M: mi('large_advanced_motor'),
        E: mi('electrolyzer'),
        C: 'factory_blocks:circuit',
        P: mi('tungstensteel_large_plate')
    })
    .id(st('oversized_electrolysis_chamber'));

        // -- GRAND MASS CENTRIFUGE -- //
    event.shaped(mt('grand_mass_centrifuge'), [
        'MPM',
        'TCT',
        'MUM'
    ],
    {
        P: mi('large_advanced_pump'),
        M: mi('large_advanced_motor'),
        U: mi('processing_unit'),
        C: mi('centrifuge'),
        T: mi('tungstensteel_cable')
    })
    .id(st('grand_mass_centrifuge'));

});