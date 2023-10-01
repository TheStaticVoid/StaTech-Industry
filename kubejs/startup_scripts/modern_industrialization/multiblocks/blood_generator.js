// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let bl = (id) => `blockus:${id}`;
    let cr = (id) => `create:${id}`;
    let fb = (id) => `factory_blocks:${id}`;
    let ap = (id) => `architects_palette:${id}`;

    const steelMachineCasing = e.memberOfBlock(mi('steel_machine_casing'));
    const steelPillar = e.memberOfBlock(ad('steel_pillar'));
    const steelPipeCasing = e.memberOfBlock(mi('steel_machine_casing_pipe'));
    const experienceBlock = e.memberOfBlock(cr('experience_block'));
    const bonePillar = e.memberOfBlock(ap('osseous_pillar'));
    const boneHead = e.memberOfBlock(ap('lit_osseous_skull'));
    const boneWall = e.memberOfBlock(ap('osseous_brick_wall'));
    const redGlazedTerracotta = e.memberOfBlock(bl('red_glazed_terracotta_pillar'));
    const tintedGlass = e.memberOfBlock(mc('tinted_glass'));
    const fanBlock = e.memberOfBlock(fb('fan_on'));
    const ventBlock = e.memberOfBlock(fb('vent'));
    const batteryBlock = e.memberOfBlock(fb('megacell'));
    const generatorHatch = e.hatchOf('fluid_input', 'energy_output');

    const bloodGeneratorShape = e.layeredShape('steel', [
        //y=   0            1            2            3            4            5            6            7            8
        [ 'PPPPPPPPP', 'PCCCCCCCP', 'PFFVAVFFP', 'PFFVAVFFP', 'PFFVAVFFP', 'PIIIIIIIP', 'PIIIIIIIP', 'PIIIIIIIP', 'PIIIIIIIP', 'PPPPPPPPP',],
        [ 'PCCCCCCCP', 'CRRRRRRRC', 'T  EEE  T', 'T  EEE  T', 'T  EEE  T', 'T  EEE  T', 'T  EEE  T', 'T       T', 'C       C', 'PCCCCCCCP' ],
        [ 'PCCCCCCCP', 'CRRRRRRRC', 'T       T', 'T   B   T', 'T   B   T', 'T WWBWW T', 'T   H   T', 'T       T', 'C       C', 'PCCCCCCCP' ],
        [ 'PCCCCCCCP', 'CRRRRRRRC', 'T       T', 'T       T', 'T       T', 'T       T', 'T       T', 'T       T', 'C       C', 'PCCCCCCCP' ],
        [ 'PPPPPPPPP', 'PCCC#CCCP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PTTTTTTTP', 'PCCCCCCCP', 'PPPPPPPPP' ]
    ])
        .key('C', steelMachineCasing, generatorHatch)
        .key('P', steelPillar, e.noHatch())
        .key('I', steelPipeCasing, e.noHatch())
        .key('E', experienceBlock, e.noHatch())
        .key('B', bonePillar, e.noHatch())
        .key('H', boneHead, e.noHatch())
        .key('W', boneWall, e.noHatch())
        .key('R', redGlazedTerracotta, e.noHatch())
        .key('T', tintedGlass, e.noHatch())
        .key('F', fanBlock, e.noHatch())
        .key('V', ventBlock, e.noHatch())
        .key('A', batteryBlock, e.noHatch())
        .build();

    e.simpleGeneratorMultiBlock(
        "Blood Generator", // The english name
        "blood_generator", // the internal name
        bloodGeneratorShape, // the multiblock shape
        8192, // Maximum energy generation rate (eu/tick)
        builder => { // The builder (same as for a single block generator)
            builder.fluid(mi('blood'), 512);
            builder.fluid(mi('dragons_blood'), 8192)
        },

        // -- Standard model configuration -- //
        'steel', // casing
        'blood_generator',  // model folder
        true, // front overlay?
        false, // top overlay?
        false // side overlay?
    );
});