// -----------------------------------------
// CREATED BY GW-DEV FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let BOSS_CRUSHER;

MIMachineEvents.registerRecipeTypes(event => {
    BOSS_CRUSHER = event.register('boss_crusher')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(event => {
    const cleanStainlessSteelMachineCasing = event.memberOfBlock(mi('clean_stainless_steel_machine_casing'));
    const tintedGlassBlock = event.memberOfBlock(mc('tinted_glass'));
    const kanthalCoil = event.memberOfBlock(mi('kanthal_coil'));
    // const witherProofBlock = event.memberOfBlock(ki('wither_proof_block'));
    const obsidian = event.memberOfBlock(mc('obsidian'));
    // const glowingSteelPillar = event.memberOfBlock(ad('glowing_steel_pillar'));
    const roseQuartzLamp = event.memberOfBlock(cr('rose_quartz_lamp'));
    const crusherHatch = event.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');

    const bossCrusherShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        //y= 0        1        2        3        4
        [ ' ppp ', ' GGG ', ' GGG ', ' GGG ', ' ppp ' ], 
        [ 'pPPPp', 'GKWKG', 'GWgWG', 'GKWKG', 'pPPPp' ],
        [ 'pPPPp', 'GWWWG', 'GgggG', 'GWWWG', 'pPPPp' ],
        [ 'pPPPp', 'GKWKG', 'GWgWG', 'GKWKG', 'pPPPp' ],
        [ ' p#p ', ' GGG ', ' GGG ', ' GGG ', ' ppp ' ]
    ])
        .key('P', cleanStainlessSteelMachineCasing, event.noHatch())
        .key('p', cleanStainlessSteelMachineCasing, crusherHatch)
        .key('G', tintedGlassBlock, event.noHatch())
        .key('K', kanthalCoil, event.noHatch())
        // .key('W', witherProofBlock, event.noHatch())
        .key('W', obsidian, event.noHatch())
        // .key('g', glowingSteelPillar, event.noHatch())
        .key('g', roseQuartzLamp, event.noHatch())
        .build();
    
    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Boss Crusher',          // English name
        'boss_crusher',          // internal name
        BOSS_CRUSHER,            // recipe type
        bossCrusherShape,        // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'macerate'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlots(102, 35, 3, 2),
        fluidInputs => fluidInputs.addSlot(56, 53),
        fluidOutputs => fluidOutputs.addSlot(120, 71),

        /* Model configuration */
        'clean_stainless_steel_machine_casing',            // casing of the controller
        'mob_crusher',      // overlay folder
        true,               // front overlay
        false,              // top overlay
        false,              // side overlay
    );
});