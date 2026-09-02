// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

MIMachineEvents.registerMachines((event) => {
    const noHatch = event.noHatch();
    const multiblockHatch = event.hatchOf('fluid_input', 'energy_output'); // TODO: Configure hatches
    // Block Members
    const modernIndustrializationSteelMachineCasing = event.memberOfBlock(
        'modern_industrialization:steel_machine_casing'
    );
    const minecraftBlackStainedGlass = event.memberOfBlock(
        'minecraft:black_stained_glass'
    );
    const architectsPaletteRedstoneOreBricks = event.memberOfBlock(
        'architects_palette:redstone_ore_bricks'
    );
    const minecraftRedstoneTorch = event.memberOfBlock(
        'minecraft:redstone_torch'
    );
    const architectsPaletteOsseousPillar = event.memberOfBlock(
        'architects_palette:osseous_pillar'
    );
    const architectsPaletteLitOsseousSkull = event.memberOfBlock(
        'architects_palette:lit_osseous_skull'
    );
    const bloodGeneratorShape = event
        .layeredShape('steel', [
            [' AAA ', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', ' AAA '],
            [' AAA ', 'ACCCA', 'BDEDB', 'BEEEB', 'A F A', ' AAA '],
            [' A#A ', 'ABBBA', 'ABBBA', 'ABBBA', 'ABB A', ' AAA '],
        ])
        .key('A', modernIndustrializationSteelMachineCasing, multiblockHatch)
        .key('B', minecraftBlackStainedGlass, noHatch)
        .key('C', architectsPaletteRedstoneOreBricks, noHatch)
        .key('D', minecraftRedstoneTorch, noHatch)
        .key('E', architectsPaletteOsseousPillar, noHatch)
        .key('F', architectsPaletteLitOsseousSkull, noHatch)
        .build();

    event.simpleGeneratorMultiBlock(
        'Blood Generator', // The english name
        'blood_generator', // the internal name
        bloodGeneratorShape, // the multiblock shape
        8192, // Maximum energy generation rate (eu/tick)
        (builder) => {
            // The builder (same as for a single block generator)
            builder.fluid(mi('blood'), 1024);
            builder.fluid(yai('nutrient_rich_dragon_breath'), 8192);
        },

        // -- Standard model configuration -- //
        'steel', // casing
        'blood_generator', // model folder
        true, // front overlay?
        false, // top overlay?
        false // side overlay?
    );
});
