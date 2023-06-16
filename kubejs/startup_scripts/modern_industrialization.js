let ALLOY_SMELTER;
let PYROLYSE_OVEN;
let ROCKET_PART_ASSEMBLER;
let MEGA_SMELTER;
let SPACE_PROBE_LAUNCHER;
let CORE_DRILL;
let GREENHOUSE;
let LASER_ENGRAVER;
let SINGULARITY_FORGE;

MIMachineEvents.registerRecipeTypes(e => {
    ALLOY_SMELTER = e.register('alloy_smelter')
        .withItemInputs()
        .withItemOutputs();
    ROCKET_PART_ASSEMBLER = e.register('rocket_part_assembler')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
    PYROLYSE_OVEN = e.register('pyrolyse_oven')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
    MEGA_SMELTER = e.register('mega_smelter')
        .withItemInputs()
        .withItemOutputs();
    SPACE_PROBE_LAUNCHER = e.register('space_probe_launcher')
        .withItemInputs()
        .withItemOutputs();
    
    CORE_DRILL = e.register('core_drill')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs();

    GREENHOUSE = e.register('greenhouse')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
    
    LASER_ENGRAVER = e.register('laser_engraver')
        .withItemInputs()
        .withItemOutputs();
    
    SINGULARITY_FORGE = e.register('singularity_forge')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerCasings(e => {
    e.register('calorite_machine_casing');
});

MIMachineEvents.addEbfTiers(e => {
    e.add('modern_industrialization:tungstensteel_coil', 1024, 'Tungstensteel');
});

MIMachineEvents.registerMachines(e => {

    // -- ALLOY SMELTER SINGLE BLOCK -- //
    e.craftingSingleBlock(
        // General parameters
        'Alloy Smelter', // English Name
        'alloy_smelter', // Internal Name
        ALLOY_SMELTER, // recipe type
        ['electric'], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(85, 25, 'arrow'), // progress bar
        e.efficiencyBar(42, 60), // efficiency bar
        e.energyBar(14, 27), // energy bar

        // Slot Configuration
        2, // Item input count
        1, // Item output count
        0, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(42, 27, 2, 1).addSlots(115, 27, 1, 1), fluids => {},
        
        // Model configuration
        true, // front overlay?
        false, // top overlay?
        false, // side overlay?
    );

    // -- ROCKET PART ASSEMBLER SINGLE BLOCK -- //
    e.craftingSingleBlock(
        // General parameters
        'Rocket Part Assembler',
        'rocket_part_assembler',
        ROCKET_PART_ASSEMBLER,
        ['electric'],

        // GUI Configuration
        191, // background height (or -1 for default value)
        e.progressBar(103, 39, 'triple_arrow'), // progress bar
        e.efficiencyBar(43, 89), // efficiency bar 
        e.energyBar(14, 42), // energy bar 

        // Slot Configuration
        6, // Item input count
        1, // Item output count
        1, // Fluid input count
        0, // Fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids
        items => items.addSlots(38, 30, 3, 2).addSlots(135, 41, 1, 1),
        fluids => fluids.addSlots(56, 67, 1, 1),

        // Model configuration
        true, // front overlay?
        true, // top overlay?
        false,
    );

    // -- LASER ENGRAVER SINGLE BLOCK -- //
    e.craftingSingleBlock(
        // General parameters
        'Laser Engraver',
        'laser_engraver',
        LASER_ENGRAVER,
        ['electric'],

        // GUI configuration
        -1, // background height (or -1 for default value)
        e.progressBar(86, 32, 'arrow'), // progress bar
        e.efficiencyBar(38, 60), // efficiency bar
        e.energyBar(14, 35), // energy bar

        // Slot Configuration
        2, // Item input count
        1, // Item output count
        0, // Fluid input count
        0, // Fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids
        items => items.addSlots(41, 35, 2, 1).addSlots(117, 35, 1, 1),
        fluids => {},

        // Model configuration
        true, // front overlay
        false, // top overlay
        false, // side overlay
    )

    // -- PYROLYSE OVEN MULTIBLOCK -- //
    const pyrolyseHatch = e.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');
    const heatproofMember = e.memberOfBlock('modern_industrialization:heatproof_machine_casing');
    const cupronickelCoilMember = e.memberOfBlock('modern_industrialization:cupronickel_coil');
    const pyrolyseShapeBuilder = e.startShape('heatproof_machine_casing');
    for (let x = -1; x <= 1; x++) {
        for (let y= -1; y <= 1; y++) {
            for (let z = 0; z <= 3; z++) {
                if (z === 1 || z === 2) {
                    if (x !== 0 || y !== 0) {
                        pyrolyseShapeBuilder.add(x, y, z, cupronickelCoilMember, e.noHatch());
                    }
                } else {
                    pyrolyseShapeBuilder.add(x, y, z, heatproofMember, pyrolyseHatch);
                }
            }
        }
    }
    const pyrolyseShape = pyrolyseShapeBuilder.build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Pyrolyse Oven', // English name
        'pyrolyse_oven', // internal name
        PYROLYSE_OVEN, // recipe type
        pyrolyseShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'triple_arrow'),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        'heatproof_machine_casing', // casing of the controller
        'pyrolyse_oven', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );

    // -- MEGA SMELTER MULTIBLOCK -- //
    const smelterHatch = e.hatchOf('item_input', 'item_output', 'energy_input');
    // reuse cupronickel definition from earlier
    const smelterShapeBuilder = e.startShape('heatproof_machine_casing');

    for (let y = 0; y <= 2; y++) {
        for (let x = -1; x <=1; x++) {
            for (let z = 0; z <= 2; z++) {
                if (y == 0 || y == 2) {
                    smelterShapeBuilder.add(x, y, z, heatproofMember, smelterHatch);
                } else {
                    // dont fill the center block
                    if (z == 1 && x == 0) continue;
                    else {
                        smelterShapeBuilder.add(x, y, z, cupronickelCoilMember, e.noHatch());
                    }
                }
            }
        }
    }
    const megaSmelter = smelterShapeBuilder.build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Mega Smelter', // English name
        'mega_smelter', // internal name
        MEGA_SMELTER, // recipe type
        megaSmelter, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => {}, fluidOutputs => {},
        
        /* Model Configuration */
        'heatproof_machine_casing', // casing of the controller
        'mega_smelter', // ovleray folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );

    // -- SPACE PROBE LAUNCHER MULTIBLOCK -- //
    const launcherHatch = e.hatchOf('item_input', 'item_output', 'energy_input');
    const caloriteMachineCasing = e.memberOfBlock('modern_industrialization:calorite_machine_casing');
    const caloritePipeCasing = e.memberOfBlock('modern_industrialization:calorite_machine_casing_pipe');
    const tungstensteelCoilMember = e.memberOfBlock('modern_industrialization:tungstensteel_coil');
    const spaceProbeLauncherBuilder = e.startShape('calorite_machine_casing');


    for ( let x = -2; x <= 2; x++) {
        for ( let z = 0; z <= 4; z++) {
            for (let y = -1; y <= 6; y++) {

                if (y >= -1 && y <= 1) {
                    if ((x == 0 && z == 0) || (x == -2 && z == 2) || (x == 2 && z == 2) || (x == 0 && z == 4)) {
                        spaceProbeLauncherBuilder.add(x, y, z, caloriteMachineCasing, launcherHatch);
                    }
                }

                if (y == -1) {
                    if ( (x >= -1 && x <= 1) && (z >= 1 && z <= 3)) {
                        spaceProbeLauncherBuilder.add(x, y, z, caloriteMachineCasing, e.noHatch());
                    }
                }

                if (y == 0 || y == 1) {
                    if ((x == 1 || x == -1) && (z == 1 || z == 3)) {
                        spaceProbeLauncherBuilder.add(x, y, z, caloriteMachineCasing, e.noHatch());
                    }

                    if ((z == 1 && x ==0) || (z == 3 && x == 0) || (z == 2 && (x >= -1 && x <= 1))) {
                        spaceProbeLauncherBuilder.add(x, y, z, caloritePipeCasing, e.noHatch());
                    }
                }

                if (y >= 2) {
                    if (((x == 0) && (z == 1 || z == 3)) || ((x == -1 || x == 1) && (z == 2))) {
                        spaceProbeLauncherBuilder.add(x, y, z, tungstensteelCoilMember, e.noHatch());
                    }

                    if ((x == -1 || x == 1) && (z == 2)) {
                        spaceProbeLauncherBuilder.add(x, y, z, tungstensteelCoilMember, e.noHatch());
                    }
                }
            }
        }
    }
    const spaceProbeLauncher = spaceProbeLauncherBuilder.build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Space Probe Launcher', // English name
        'space_probe_launcher', // internal name
        SPACE_PROBE_LAUNCHER, // recipe type
        spaceProbeLauncher, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlots(102, 35, 4, 4),
        fluidInputs => {}, fluidOutputs => {},

        /* Model Configuration */ 
        'calorite_machine_casing', // casing of the controller
        'space_probe_launcher', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );

    // -- CORE DRILL MULTIBLOCK -- //
    const coreDrillHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');
    const stainlessSteelCasing = e.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing');
    const deshBlock = e.memberOfBlock('ad_astra:desh_block');
    const deshPillar = e.memberOfBlock('ad_astra:desh_pillar');
    const glowingIronPillar = e.memberOfBlock('ad_astra:glowing_iron_pillar');
    const glowingOstrumPillar = e.memberOfBlock('ad_astra:glowing_ostrum_pillar');
    const quarryTube = e.memberOfBlock('quarrymod:drill_tube');
    //          0                   1               2                  3                4               5                   6                   7               8                   9               10
    const coreDrillShape = e.layeredShape('clean_stainless_steel_machine_casing', [
        [ 'OS          SO', 'OS          SO', 'OS          SO', 'OS          SO', '              ', '              ', '              ', '              ', '              ', '              ', '              ' ],
        [ 'SS          SS', 'SS          SS', 'SS          SS', 'SS          SS', ' OS        SO ', ' OS        SO ', ' OS        SO ', '    IIIIII    ', '              ', '              ', '              ' ],
        [ '              ', '              ', '              ', '              ', ' SS        SS ', ' SS        SS ', ' SSS      SSS ', '  IIcCCCCcII  ', '              ', '              ', '              ' ],
        [ '              ', '              ', '              ', '              ', '              ', '              ', '  S   PP   S  ', '  IcCC  CCcI  ', '     dddd     ', '              ', '              ' ],
        [ '              ', '              ', '      PP      ', '      PP      ', '      PP      ', '      PP      ', '     P  P     ', ' IcCC    CCcI ', '    D    D    ', '     DDDD     ', '              ' ],
        [ '      PP      ', '      PP      ', '     P  P     ', '     P  P     ', '     P  P     ', '     P  P     ', '    P    P    ', ' ICC      CCI ', '   d      d   ', '    DD  DD    ', '      DD      ' ],
        [ '     PQQP     ', '     PQQP     ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '   P  QQ  P   ', ' IC   QQ   CI ', '   d  QQ  d   ', '    D QQ D    ', '     DDDD     ' ],
        [ '     PQQP     ', '     PQQP     ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '   P  QQ  P   ', ' IC   QQ   CI ', '   d  QQ  d   ', '    D QQ D    ', '     DDDD     ' ],
        [ '      PP      ', '      PP      ', '     P  P     ', '     P  P     ', '     P  P     ', '     P  P     ', '    P    P    ', ' ICC      CCI ', '   d      d   ', '    DD  DD    ', '      DD      ' ],
        [ '              ', '              ', '      PP      ', '      PP      ', '      PP      ', '      PP      ', '     P  P     ', ' IcCC    CCcI ', '    D    D    ', '     DDDD     ', '              ' ],
        [ '              ', '              ', '              ', '              ', '              ', '              ', '  S   PP   S  ', '  IcCC  CCcI  ', '     d#dd     ', '              ', '              ' ],
        [ '              ', '              ', '              ', '              ', ' SS        SS ', ' SS        SS ', ' SSS      SSS ', '  IIcCCCCcII  ', '              ', '              ', '              ' ],
        [ 'SS          SS', 'SS          SS', 'SS          SS', 'SS          SS', ' OS        SO ', ' OS        SO ', ' OS        SO ', '    IIIIII    ', '              ', '              ', '              ' ],
        [ 'OS          SO', 'OS          SO', 'OS          SO', 'OS          SO', '              ', '              ', '              ', '              ', '              ', '              ', '              ' ]
    ])
        .key('O', glowingOstrumPillar, e.noHatch())
        .key('S', stainlessSteelCasing, e.noHatch())
        .key('P', deshPillar, e.noHatch())
        .key('Q', quarryTube, e.noHatch())
        .key('c', caloritePipeCasing, e.noHatch())
        .key('C', caloriteMachineCasing, e.noHatch())
        .key('I', glowingIronPillar, e.noHatch())
        .key('d', deshBlock, coreDrillHatch)
        .key('D', deshBlock, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Core Mining Drill', // English name
        'core_drill', // internal name
        CORE_DRILL, // recipe type
        coreDrillShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'triple_arrow'),
        // REI Item Inputs, item, outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(56, 53), fluidOutputs => fluidOutputs.addSlot(102, 53),

        /* Model configuration */
        'clean_stainless_steel_machine_casing', // casing of the controller
        'core_drill', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );

    // -- INDUSTRIAL GREENHOUSE -- //
    const greenhouseHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');
    const steelCasing = e.memberOfBlock('modern_industrialization:steel_machine_casing');
    const glass = e.memberOfBlock('minecraft:glass');
    const metalBox = e.memberOfBlock('factory_blocks:metalbox');
    const rustyScaffold = e.memberOfBlock('factory_blocks:rusty_scaffold');
    const glowstone = e.memberOfBlock('minecraft:glowstone');
    const grass = e.memberOfBlock('minecraft:grass_block');
    const log = e.memberOfBlock('minecraft:oak_log');
    const leaves = e.memberOfBlock('minecraft:oak_leaves');
    const dirt = e.memberOfBlock('minecraft:dirt')
    //      0           1           2           3         4          5          6
    const greenhouseShape = e.layeredShape('steel', [
        [ '  SSS  ', '  GGG  ', '  GGG  ', '  GGG  ', '  RRR  ', '       ', '       ' ],
        [ ' SAAAS ', ' M   M ', ' M   M ', ' M   M ', ' M   M ', '  GGG  ', '       ' ],
        [ 'SAAAAAS', 'G     G', 'G  L  G', 'G  L  G', 'R     R', ' G   G ', '  GGG  ' ],
        [ 'SAADAAS', 'G  W  G', 'G LWL G', 'G LWL G', 'R  L  R', ' G   G ', '  GOG  ' ],
        [ 'SAAAAAS', 'G     G', 'G  L  G', 'G  L  G', 'R     R', ' G   G ', '  GGG  ' ],
        [ ' SAAAS ', ' M   M ', ' M   M ', ' M   M ', ' M   M ', '  GGG  ', '       ' ],
        [ '  S#S  ', '  GGG  ', '  GGG  ', '  GGG  ', '  RRR  ', '       ', '       ' ]
    ])
        .key('S', steelCasing, greenhouseHatch)
        .key('A', grass, e.noHatch())
        .key('M', metalBox, e.noHatch())
        .key('W', log, e.noHatch())
        .key('G', glass, e.noHatch())
        .key('L', leaves, e.noHatch())
        .key('R', rustyScaffold, e.noHatch())
        .key('O', glowstone, e.noHatch())
        .key('D', dirt, e.noHatch())
        .build();
    
    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Industrial Greenhouse', // English name
        'greenhouse', // internal name
        GREENHOUSE, // recipe type
        greenhouseShape, // multiblock shape

        // REI Display configuration
        e.progressBar(71, 33, 'extract'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(25, 35, 2, 1), itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => fluidInputs.addSlot(25, 53), fluidOutputs => {},

        /* Model configuration */
        'steel', // casing of the controller
        'greenhouse', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );

    // -- QUASI QUANTUM SINGULARITY FORGE -- // 
    const singularityForgeHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');
    const plasmaCasing = e.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing');
    const iridiumPipeCasing = e.memberOfBlock('modern_industrialization:iridium_machine_casing_pipe');
    const glowingCaloritePillar = e.memberOfBlock('ad_astra:glowing_calorite_pillar');
    const superConductorCoil = e.memberOfBlock('modern_industrialization:superconductor_coil');
    const crypticEndRod = e.memberOfBlock('byg:cryptic_end_rod');
    const llamaPurpleWool = e.memberOfBlock('chisel:llama/purple_wool');
    //              0                   1                   2                   3                       4                   5                   6                   7                       8                   9                       10              11                  12                  13                      14                  15                      16
    const singularityForgeShape = e.layeredShape('plasma_handling_iridium_machine_casing', [
        [ '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '      PPPPP      ', '      PPPPP      ', '      PPPPP      ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ' ],
        [ '                 ', '                 ', '                 ', '       PPP       ', '       PPP       ', '       PPP       ', '      IPPPI      ', '      PSCSP      ', '      PCCCP      ', '      PSCSP      ', '      IPPPI      ', '       PPP       ', '       PPP       ', '       PPP       ', '                 ', '                 ', '                 ' ],
        [ '                 ', '                 ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '        G        ', '       GGG       ', '        G        ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        E        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '       PPP       ', '      IPPPI      ', '                 ', '                 ', '                 ', '                 ', ' I             I ', 'PP             PP', 'PP             PP', 'PP             PP', ' I             I ', '                 ', '                 ', '                 ', '                 ', '      IPPPI      ', '       PPP       ' ],
        [ '      PPPPP      ', '   pppPSCSPppp   ', '  P     G     P  ', ' P             P ', ' P             P ', ' P             P ', 'PP             PP', 'PS             SP', 'PCG     L     GCP', 'PS             SP', 'PP             PP', ' P             P ', ' P             P ', ' P             P ', '  P     G     P  ', '   PPPPSCSPPPP   ', '      PPPPP      ' ],
        [ '      PPPPP      ', '   PPPPCCCPPPP   ', '  P    GGG    P  ', ' P      G      P ', ' P      G      P ', ' P      E      P ', 'PP             PP', 'PCG     L     GCP', 'PCGGGE LLL EGGGCP', 'PCG     L     GCP', 'PP             PP', ' P      E      P ', ' P      G      P ', ' P      G      P ', '  P    GGG    P  ', '   PPPPCCCPPPP   ', '      PPPPP      ' ],
        [ '      PPPPP      ', '   p#pPSCSPppp   ', '  P     G     P  ', ' P             P ', ' P             P ', ' P             P ', 'PP             PP', 'PS             SP', 'PCG     L     GCP', 'PS             SP', 'PP             PP', ' P             P ', ' P             P ', ' P             P ', '  P     G     P  ', '   PPPPSCSPPPP   ', '      PPPPP      ' ],
        [ '       PPP       ', '      IPPPI      ', '                 ', '                 ', '                 ', '                 ', ' I             I ', 'PP             PP', 'PP             PP', 'PP             PP', ' I             I ', '                 ', '                 ', '                 ', '                 ', '      IPPPI      ', '       PPP       ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        E        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '                 ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '        G        ', '       GGG       ', '        G        ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ', '                 ' ],
        [ '                 ', '                 ', '                 ', '       PPP       ', '       PPP       ', '       PPP       ', '      IPPPI      ', '      PSCSP      ', '      PCCCP      ', '      PSCSP      ', '      IPPPI      ', '       PPP       ', '       PPP       ', '       PPP       ', '                 ', '                 ', '                 ' ],
        [ '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '      PPPPP      ', '      PPPPP      ', '      PPPPP      ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ' ]
    ])
        .key('P', plasmaCasing, e.noHatch())
        .key('p', plasmaCasing, singularityForgeHatch)
        .key('I', iridiumPipeCasing, e.noHatch())
        .key('G', glowingCaloritePillar, e.noHatch())
        .key('S', superConductorCoil, e.noHatch())
        .key('C', caloriteMachineCasing, e.noHatch())
        .key('E', crypticEndRod, e.noHatch())
        .key('L', llamaPurpleWool, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Quasi Quantum Singularity Forge', // English name
        'singularity_forge', // internal name
        SINGULARITY_FORGE, // recipe type
        singularityForgeShape, // multiblock shape
        
        // REI Display configuration
        e.progressBar(71, 33, 'wiremill'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(25, 35, 2, 2), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(25, 71), fluidOutputs => {},

        /* Model configuration */
        'plasma_handling_iridium_machine_casing', // casing of the controller
        'singularity_forge', // overlay folder
        true, // front overlay
        true, // top overlay
        false, // side overlay
    );
});

MIRegistrationEvents.registerFluids(e => {
    // -- LITHIUM -- //
    e.register(
        'Lithium',      // English name
        'lithium',      // internal name
        0xb2b2b2,       // Hex color code
        'water',        // Texture type
        true,           // is a gas?
        'medium'        // opacity
    );

    // -- NEUTRONIUM -- //
    e.register(
        'Neutronium',
        'neutronium',
        0x1a1a1a,
        'lava',
        true,
        'full'
    );

    // -- DRILLING FLUID -- //
    e.register(
        'Drilling Fluid',
        'drilling_fluid',
        0xf4fc58,
        'water',
        false,
        'medium'
    );
    
    // -- CORE SLURRY -- //
    e.register(
        'Core Slurry',
        'core_slurry',
        0x211500,
        'lava',
        false,
        'full'
    );

    // -- WOOD TAR -- //
    e.register(
        'Wood Tar',
        'wood_tar',
        0x2a200e,
        'lava',
        false,
        'full'
    );
});

MIRegistrationEvents.registerFluidFuels(e => {
    e.register('modern_industrialization:benzene', 100);
});

MIMaterialEvents.addMaterials(e => {
    e.createMaterial('Desh', 'desh', 0xe9ba5d,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head')
            .defaultRecipes()
            .addExternalPart('ingot', 'ad_astra:desh_ingot', '#c:desh_ingots')
            .addExternalPart('plate', 'ad_astra:desh_plate', '#c:desh_plates')
        });
    
    e.createMaterial('Tungstensteel', 'tungstensteel', 0x677680,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'coil', 'bolt', 'large_plate', 'curved_plate', 'wire')
            .barrel('Tungstensteel Barrel', 'tungstensteel_barrel', 16384)
            .tank('Tungstensteel Tank', 'tungstensteel_tank', 256)
            .cable('ev')
            .defaultRecipes()
            .addExternalPart('ingot', 'techreborn:tungstensteel_ingot', '#c:tungstensteel_ingots')
            .addExternalPart('plate', 'techreborn:tungstensteel_plate', '#c:tungstensteel_plates')
        });
    
    e.createMaterial('Calorite', 'calorite', 0xb63044,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'blade', 'bolt', 'curved_plate')
            .machineCasing(12.0)
            .pipeCasing(12.0)
            .defaultRecipes()
            .addExternalPart('ingot', 'ad_astra:calorite_ingot', '#c:calorite_ingots')
            .addExternalPart('plate', 'ad_astra:calorite_plate', '#c:calorite_plates')
        });
    
    e.createMaterial('Zinc', 'zinc', 0xb9e9c1,
        builder => {
            builder.addParts('rod', 'ring', 'gear', 'curved_plate', 'plate', 'bolt', 'drill_head', 'drill')
            .defaultRecipes()
            .addExternalPart('ingot', 'techreborn:zinc_ingot', '#c:zinc_ingots')
        });
});