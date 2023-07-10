let PHOTOSYNTHETIC_CHAMBER;

MIMachineEvents.registerRecipeTypes(e => {
    PHOTOSYNTHETIC_CHAMBER = e.register('photosynthetic_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        // General parameters
        'Photosynthetic Chamber',
        'photosynthetic_chamber',
        PHOTOSYNTHETIC_CHAMBER,
        ['electric'],

        // GUI configuration
        -1, // background height (or -1 for default value)
        e.progressBar(86, 32, 'arrow'), // progress bar
        e.efficiencyBar(38, 60), // efficiency bar
        e.energyBar(14, 35), // energy bar

        // Slot configuration
        1, // Item input count
        3, // Item output count
        1, // Fluid input count
        0, // Fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids
        items => items.addSlots(59, 35, 1, 1).addSlots(117, 35, 3, 1),
        fluids => fluids.addSlots(41, 35, 1, 1),

        // Model configuration
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});