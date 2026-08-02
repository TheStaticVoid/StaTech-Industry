// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let SUPERCOMPUTER;

MIMachineEvents.registerRecipeTypes((event) => {
    SUPERCOMPUTER = event
        .register('supercomputer')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines((event) => {
    const borosilicateGlass = event.memberOfBlock(kj('borosilicate_glass'));
    const quartzWall = event.memberOfBlock(ae('chiseled_quartz_wall'));
    const computerCasing = event.memberOfBlock(kj('computer_casing'));
    const blueEdgeLightBottom = event.memberOfBlock(sl('edge_light_blue'));
    const blueEdgeLightTop = event.memberOfBlock(sl('edge_light_top_blue'));
    const meDrive = event.memberOfBlock(ae('drive'));
    const skySteelBlock = event.memberOfBlock(mg('sky_steel_block'));
    const skyStoneStairs = event.memberOfBlock(ae('smooth_sky_stone_stairs'));
    const resonanceGenerator = event.memberOfBlock(
        ae('crystal_resonance_generator')
    );
    const computerHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input'
    );

    const superComputerBuilder = event
        .layeredShape('sky_steel_machine_casing', [
            ['  CCC  ', '       ', '       ', '       ', '       ', '  CCC  '],
            [' CCCCC ', '  GGG  ', '  GGG  ', '  GGG  ', '  GGG  ', ' CCCCC '],
            ['CCsSsCC', ' GR RG ', ' GW WG ', ' GW WG ', ' GR RG ', 'CCsSsCC'],
            ['CSSsSSC', ' G R G ', ' G W G ', ' G W G ', ' G R G ', 'CSSsSSC'],
            ['CSsSsSC', ' GR RG ', ' GW WG ', ' GW WG ', ' GR RG ', 'CSsSsSC'],
            ['CCSSSCC', ' C   C ', ' C   C ', ' C   C ', ' C   C ', 'CSSSSSC'],
            ['CCSSSCC', ' ASSSA ', '  SSS  ', '  SSS  ', ' ASSSA ', 'CCSSSCC'],
            [' CSSSC ', ' A   A ', ' BD DB ', ' TD DT ', ' A   A ', ' CSSSC '],
            [' CSSSC ', ' A   A ', ' BD DB ', ' TD DT ', ' A   A ', ' CSSSC '],
            [' CSSSC ', ' ASSSA ', '  S#S  ', '  SSS  ', ' ASSSA ', ' CSSSC '],
            [' CCCCC ', ' C   C ', ' C   C ', ' C   C ', ' C   C ', ' CCCCC '],
        ])
        .key('G', borosilicateGlass, event.noHatch())
        .key('W', quartzWall, event.noHatch())
        .key('C', computerCasing, event.noHatch())
        .key('B', blueEdgeLightBottom, event.noHatch())
        .key('T', blueEdgeLightTop, event.noHatch())
        .key('D', meDrive, event.noHatch())
        .key('S', skySteelBlock, event.noHatch())
        .key('A', skyStoneStairs, event.noHatch())
        .key('R', resonanceGenerator, event.noHatch())
        .key('s', skySteelBlock, computerHatch)
        .build();

    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Supercomputer', // English name
        'supercomputer', // internal name
        SUPERCOMPUTER, // recipe type
        superComputerBuilder, // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'extract'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlot(56, 35),
        (itemOutputs) => itemOutputs.addSlots(102, 35, 2, 2),
        (fluidInputs) => fluidInputs.addSlot(56, 53),
        (fluidOutputs) => {},

        /* Model configuration */
        'sky_steel_machine_casing', // casing of the controller
        'supercomputer', // overaly
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
