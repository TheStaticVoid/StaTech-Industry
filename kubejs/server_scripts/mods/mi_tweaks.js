// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:mi_tweaks/${id}`;
    let sta = (id) => `statech:assembler/mi_tweaks/${id}`;

    ///////////////////////
    // -- CRAFTING TABLE //
    /////////////////////// 

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

        // -- MULTI-CUTTER -- //
    event.shaped(mt('multi_cutter'), [
        'MBM',
        'CHC',
        'MUM'
    ],
    {
        B: mi('invar_rotary_blade'),
        M: mi('large_motor'),
        U: mi('electronic_circuit'),
        C: mi('electric_cutting_machine'),
        H: mi('advanced_machine_hull')
    })
    .id(st('multi_cutter'));

        // -- HIGH CAPACITY PACKER -- //
    event.shaped(mt('high_capacity_packer'), [
        'MDM',
        'PAP',
        'MHM'
    ],
    {
        A: mi('conveyor'),
        D: mi('digital_circuit'),
        M: mi('advanced_motor'),
        P: mi('electric_packer'),
        H: mi('turbo_machine_hull')
    })
    .id(st('high_capacity_packer'));

        // -- HIGH CAPACITY UNPACKER -- //
    event.shaped(mt('high_capacity_unpacker'), [
        'MAM',
        'UDU',
        'CHC'
    ],
    {
        A: mi('conveyor'),
        D: mi('digital_circuit'),
        M: mi('advanced_motor'),
        U: mi('electric_unpacker'),
        C: mi('aluminum_cable'),
        H: mi('turbo_machine_hull')
    })
    .id(st('high_capacity_unpacker'));

        // -- COLOSSAL BLAST FURNACE -- //
    event.shaped(mt('colossal_blast_furnace'), [
        'PQP',
        'EHE',
        'CSC'
    ],
    {
        Q: mi('quantum_circuit'),
        P: mi('tungstensteel_large_plate'),
        E: mi('electric_blast_furnace'),
        H: mi('quantum_machine_hull'),
        C: mi('superconductor_coil'),
        S: mi('superconductor_cable')
    })
    .id(st('colossal_blast_furnace'));

        // -- LARGE POLARIZATION MACHINE -- //
    event.shaped(mt('large_polarization_machine'), [
        'MDM',
        'NPN',
        'RHR'
    ],
    {
        P: mi('polarizer'),
        D: mi('digital_circuit'),
        M: mi('advanced_motor'),
        N: mi('neodymium_block'),
        R: mi('stainless_steel_rod_magnetic'),
        H: mi('turbo_machine_hull')
    })
    .id(st('large_polarization_machine'));

        // -- ARRAYED WIREMILL -- //
    event.shaped(mt('arrayed_wiremill'), [
        'MDM',
        'WHW',
        'MLM'
    ],
    {
        W: mi('electric_wiremill'),
        D: mi('digital_circuit'),
        M: mi('advanced_motor'),
        L: mi('large_advanced_motor'),
        H: mi('turbo_machine_hull')
    })
    .id(st('arrayed_wiremill'));

    /////////////////////
    // -- ASSEMBLER -- //
    /////////////////////

    // -- MULTI-CUTTER -- //
    assembler(
        event,
        sta('multi_cutter'),
        8,
        200,
        [ 
            { amount: 4, item: mi('large_motor') },
            { amount: 1, item: mi('invar_rotary_blade') },
            { amount: 1, item: mi('electronic_circuit') },
            { amount: 2, item: mi('electric_cutting_machine') },
            { amount: 1, item: mi('advanced_machine_hull') }
        ],
        [ { amount: 1, item: mt('multi_cutter') } ]
    );

    // -- HIGH CAPACITY PACKER -- //
    assembler(
        event,
        sta('high_capacity_packer'),
        8,
        200,
        [ 
            { amount: 4, item: mi('advanced_motor') },
            { amount: 1, item: mi('conveyor') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 2, item: mi('electric_packer') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mt('high_capacity_packer') } ]
    );

    // -- HIGH CAPACITY UNPACKER -- //
    assembler(
        event,
        sta('high_capacity_unpacker'),
        8,
        200,
        [ 
            { amount: 2, item: mi('aluminum_cable') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 1, item: mi('conveyor') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 2, item: mi('electric_unpacker') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mt('high_capacity_unpacker') } ]
    );

    // -- COLOSSAL BLAST FURNACE -- //
    assembler(
        event,
        sta('colossal_blast_furnace'),
        8,
        200,
        [ 
            { amount: 2, item: mi('tungstensteel_large_plate') },
            { amount: 2, item: mi('superconductor_coil') },
            { amount: 1, item: mi('superconductor_cable') },
            { amount: 1, item: mi('quantum_circuit') },
            { amount: 2, item: mi('electric_blast_furnace') },
            { amount: 1, item: mi('quantum_machine_hull') }
        ],
        [ { amount: 1, item: mt('colossal_blast_furnace') } ]
    );

    // -- LARGE POLARIZATION MACHINE -- //
    assembler(
        event,
        sta('large_polarization_machine'),
        8,
        200,
        [ 
            { amount: 2, item: mi('stainless_steel_rod_magnetic') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 2, item: mi('neodymium_block') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 1, item: mi('polarizer') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mt('large_polarization_machine') } ]
    );

    // -- ARRAYED WIREMILL -- //
    assembler(
        event,
        sta('arrayed_wiremill'),
        8,
        200,
        [ 
            { amount: 1, item: mi('digital_circuit') },
            { amount: 4, item: mi('advanced_motor') },
            { amount: 1, item: mi('large_advanced_motor') },
            { amount: 2, item: mi('electric_wiremill') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mt('arrayed_wiremill') } ]
    );

    // -- LARGE CHEMICAL REACTOR -- //
    assembler(
        event,
        sta('large_chemical_reactor'),
        8,
        200,
        [ 
            { amount: 4, item: mi('polytetrafluoroethylene_plate') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 1, item: mi('chemical_reactor') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mt('large_chemical_reactor') } ]
    );

     // -- BULK COMPACTOR -- //
    assembler(
        event,
        sta('bulk_compactor'),
        8,
        200,
        [ 
            { amount: 4, item: mi('steel_large_plate') },
            { amount: 2, item: mi('advanced_motor') },
            { amount: 1, item: mi('digital_circuit') },
            { amount: 1, item: mi('electric_compressor') },
            { amount: 1, item: mi('turbo_machine_hull') }
        ],
        [ { amount: 1, item: mt('bulk_compactor') } ]
    );

     // -- LARGE SCALE ASSEMBLER -- //
    assembler(
        event,
        sta('large_scale_assembler'),
        8,
        200,
        [ 
            { amount: 4, item: mi('tungstensteel_large_plate') },
            { amount: 1, item: mi('advanced_motor') },
            { amount: 1, item: mi('advanced_pump') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: mi('assembler') },
            { amount: 1, item: kj('borosilicate_glass') }
        ],
        [ { amount: 1, item: mt('large_scale_assembler') } ]
    );

     // -- INDUSTRIAL MIXING MACHINE -- //
    assembler(
        event,
        sta('industrial_mixing_machine'),
        8,
        200,
        [ 
            { amount: 4, item: mi('enderium_plate') },
            { amount: 1, item: mi('large_advanced_pump') },
            { amount: 1, item: mi('titanium_tank') },
            { amount: 2, item: kj('borosilicate_glass') },
            { amount: 1, item: mi('electric_mixer') }
        ],
        [ { amount: 1, item: mt('industrial_mixing_machine') } ]
    );

     // -- BLAST ALLOY SMELTER -- //
    assembler(
        event,
        sta('blast_alloy_smelter'),
        8,
        200,
        [ 
            { amount: 4, item: mi('cupronickel_wire_magnetic') },
            { amount: 1, item: mi('tungstensteel_coil') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: ei('electric_alloy_smelter') },
            { amount: 2, item: 'xtonesreworked:korp_block_9' }
        ],
        [ { amount: 1, item: mt('blast_alloy_smelter') } ]
    );

     // -- OVERSIZED ELECTROLYSIS CHAMBER -- //
    assembler(
        event,
        sta('oversized_electrolysis_chamber'),
        8,
        200,
        [ 
            { amount: 2, item: mi('tungstensteel_large_plate') },
            { amount: 1, item: mi('large_advanced_motor') },
            { amount: 1, item: mi('large_advanced_pump') },
            { amount: 1, item: mi('electrolyzer') },
            { amount: 2, item: kj('borosilicate_glass') },
            { amount: 2, item: 'factory_blocks:circuit' }
        ],
        [ { amount: 1, item: mt('oversized_electrolysis_chamber') } ]
    );

     // -- GRAND MASS CENTRIFUGE -- //
    assembler(
        event,
        sta('grand_mass_centrifuge'),
        8,
        200,
        [ 
            { amount: 2, item: mi('tungstensteel_cable') },
            { amount: 4, item: mi('large_advanced_motor') },
            { amount: 1, item: mi('large_advanced_pump') },
            { amount: 1, item: mi('centrifuge') },
            { amount: 1, item: mi('processing_unit') }
        ],
        [ { amount: 1, item: mt('grand_mass_centrifuge') } ]
    );

});
