// -----------------------------------------
// CREATED BY GW-DEV FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let BOSS_CRUSHER;

MIMachineEvents.registerRecipeTypes(e => {
    BOSS_CRUSHER = e.register('boss_crusher')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let ki = (id) => `kibe:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const cleanStainlessSteelMachineCasing = e.memberOfBlock(mi('clean_stainless_steel_machine_casing'));
    const tintedGlassBlock = e.memberOfBlock(mc('tinted_glass'));
    const kanthalCoil = e.memberOfBlock(mi('kanthal_coil'));
    const witherProofBlock = e.memberOfBlock(ki('wither_proof_block'));
    const glowingSteelPillar = e.memberOfBlock(ad('glowing_steel_pillar'));
    const crusherHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');

    const bossCrusherShape = e.layeredShape('clean_stainless_steel_machine_casing', [
        //y= 0        1        2        3        4
        [ ' ppp ', ' GGG ', ' GGG ', ' GGG ', ' ppp ' ], 
        [ 'pPPPp', 'GKWKG', 'GWgWG', 'GKWKG', 'pPPPp' ],
        [ 'pPPPp', 'GWWWG', 'GgggG', 'GWWWG', 'pPPPp' ],
        [ 'pPPPp', 'GKWKG', 'GWgWG', 'GKWKG', 'pPPPp' ],
        [ ' p#p ', ' GGG ', ' GGG ', ' GGG ', ' ppp ' ]
    ])
        .key('P', cleanStainlessSteelMachineCasing, e.noHatch())
        .key('p', cleanStainlessSteelMachineCasing, crusherHatch)
        .key('G', tintedGlassBlock, e.noHatch())
        .key('K', kanthalCoil, e.noHatch())
        .key('W', witherProofBlock, e.noHatch())
        .key('g', glowingSteelPillar, e.noHatch())
        .build();
    
    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Boss Crusher',          // English name
        'boss_crusher',          // internal name
        BOSS_CRUSHER,            // recipe type
        bossCrusherShape,        // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'macerate'),
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