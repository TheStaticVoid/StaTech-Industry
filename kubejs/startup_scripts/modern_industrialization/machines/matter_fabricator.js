// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let MATTER_FABRICATOR;

MIMachineEvents.registerRecipeTypes((event) => {
    MATTER_FABRICATOR = event
        .register('matter_fabricator')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
    event.craftingSingleBlock(
        // General parameters
        'Matter Fabricator',
        'matter_fabricator',
        MATTER_FABRICATOR,
        ['electric'],

        // GUI configuration
        -1, // background height (or -1 for default value)
        event.progressBar(80, 32, 'arrow'), // progress bar
        event.efficiencyBar(38, 60), // efficiency bar
        event.energyBar(14, 35), // energy bar

        // Slot configuration
        1, // Item input count
        1, // Item output count
        0, // Fluid input count
        0, // Fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids
        (items) => items.addSlots(41, 35, 1, 1).addSlots(117, 35, 1, 1),
        (fluids) => {},

        // Model configuration
        true, // front overlay
        true, // top overlay
        true // side overlay
    );
});
