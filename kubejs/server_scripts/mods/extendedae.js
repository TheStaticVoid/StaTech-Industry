// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.tags('item', (event) => {
    // -- REMOVE COMMON MI SILICON TAGGING FROM AE2 SILICON -- //
    event.remove('c:storage_blocks/silicon', 'extendedae:silicon_block');
});

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:extendedae/${id}`;

    // -- EXTENDED AE REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ea('crystal_assembler'),
        ea('infinity_water_cell'),
        ea('transform/entro_ingot'),
        ea('assembler/sky_bronze'),
        ea('assembler/sky_steel'),
        ea('assembler/entro_ingot_transformation'),
        ea('assembler/fluix_transformation'),
        ea('fixer/certus_flawed'), // Could be readded, needs balancing //
        ea('infinity_cobblestone_cell'),
        ea('machine_frame'),
        ea('machine_frame_mirror'),
        ea('ingredient_buffer'),
        ea('assembler_matrix_wall'),
        ea('assembler_matrix_glass'),
        ea('assembler/circuit_cutter'),
        ea('assembler/calculation_processor'),
        ea('assembler/logic_processor'),
        ea('assembler/accumulation_processor'),
        ea('assembler/concurrent_processor'),
        ea('assembler/engineering_processor'),
        ea('quartz_blend'),
        ea('quartz_blend_alt'),
        ea('cobblestone_cell'),
        ea('water_cell'),
        ea('void_cell'),
    ];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- REMOVE ALL CUTTER RECIPES -- //
    event.remove({ type: ea('circuit_cutter') });

    // -- ENTRO INFUSED INGOT -- //

    event
        .custom({
            type: 'ae2:transform',
            ingredients: [
                { tag: 'c:dusts/entro' },
                { tag: 'c:ingots/aluminum' },
                { item: 'minecraft:lapis_lazuli' },
            ],
            result: {
                count: 1,
                id: 'extendedae:entro_ingot',
            },
        })
        .id(st('entro_ingot_inworld'));

    // -- CRYSTAL ASSEMBLER -- //

    event
        .shaped(ea('crystal_assembler'), ['DCD', 'PHP', 'FTF'], {
            C: ae('semi_dark_monitor'),
            D: mi('digital_circuit'),
            H: ea('machine_frame'),
            P: ae('logic_processor'),
            F: '#ae2:glass_cable',
            T: mi('steel_tank'),
        })
        .id(st('crystal_assembler'));

    // -- VOID CELL -- //

    event
        .shaped(ea('void_cell'), ['QMQ', 'OSO', 'APA'], {
            Q: ae('quartz_glass'),
            M: ae('condenser'),
            O: ae('void_card'),
            S: ae('cell_component_16k'),
            A: mc('amethyst_shard'),
            P: mi('aluminum_large_plate'),
        })
        .id(st('void_cell'));

    // -- MACHINE FRAME -- //

    event
        .shaped(ea('machine_frame'), ['ESE', 'EGE', 'ESE'], {
            E: '#c:plates/entro',
            S: '#c:plates/steel',
            G: ae('quartz_glass'),
        })
        .id(st('machine_frame'));

    // -- ASSEMBLER MATRIX WALL -- //

    event
        .shaped(ea('assembler_matrix_wall'), ['EFE', 'IQI', 'EFE'], {
            E: '#c:plates/entro',
            F: '#c:gems/fluix',
            I: mc('iron_bars'),
            Q: mc('quartz_block'),
        })
        .id(st('assembler_matrix_wall'));

    // -- ASSEMBLER MATRIX GLASS -- //

    event
        .shaped(ea('assembler_matrix_glass'), ['EFE', 'GQG', 'EFE'], {
            E: '#c:plates/entro',
            F: '#c:gems/fluix',
            G: ae('quartz_glass'),
            Q: mc('quartz_block'),
        })
        .id(st('assembler_matrix_glass'));

    // -- INGREDIENT BUFFER -- //

    event
        .shaped(ea('ingredient_buffer'), ['PSP', 'G G', 'PSP'], {
            P: '#c:plates/aluminum',
            S: ae('cell_component_1k'),
            G: ae('quartz_glass'),
        })
        .id(st('ingredient_buffer'));
});
