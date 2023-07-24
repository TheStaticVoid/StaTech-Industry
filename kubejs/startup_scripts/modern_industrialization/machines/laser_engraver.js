// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let LASER_ENGRAVER;

MIMachineEvents.registerRecipeTypes(e => { 
    LASER_ENGRAVER = e.register('laser_engraver')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
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
    );
});