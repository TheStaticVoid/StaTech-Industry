// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let ROCKET_PART_ASSEMBLER;

MIMachineEvents.registerRecipeTypes((event) => {
    ROCKET_PART_ASSEMBLER = event
        .register('rocket_part_assembler')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
    event.craftingSingleBlock(
        // General parameters
        'Rocket Part Assembler',
        'rocket_part_assembler',
        ROCKET_PART_ASSEMBLER,
        ['electric'],

        // GUI Configuration
        191, // background height (or -1 for default value)
        event.progressBar(103, 39, 'triple_arrow'), // progress bar
        event.efficiencyBar(43, 89), // efficiency bar
        event.energyBar(14, 42), // energy bar

        // Slot Configuration
        6, // Item input count
        1, // Item output count
        1, // Fluid input count
        0, // Fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids
        (items) => items.addSlots(38, 30, 3, 2).addSlots(135, 41, 1, 1),
        (fluids) => fluids.addSlots(56, 67, 1, 1),

        // Model configuration
        true, // front overlay?
        true, // top overlay?
        true
    );
});
