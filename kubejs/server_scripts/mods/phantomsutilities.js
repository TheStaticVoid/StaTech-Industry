// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:phantoms_utilities/${id}`;

    // -- PHANTOMS UTILITIES REMOVED REICPES -- //
    const PHANTOMS_UTILITIES_REMOVED_RECIPES = [];
    PHANTOMS_UTILITIES_REMOVED_RECIPES.forEach((id) =>
        event.remove({ id: id })
    );

    // -- SPRAY CAN -- //
    event.replaceInput(
        [{ output: 'phantoms_utilities:spray_can' }],
        mc('iron_ingot'),
        mi('aluminum_curved_plate')
    );
});

// ---------------------------- //
// -- SPRAY CAN TAGGING HELL -- //
// ---------------------------- //

const DYE_COLORS = [
    'white',
    'orange',
    'magenta',
    'yellow',
    'cyan',
    'lime',
    'pink',
    'gray',
    'light_blue',
    'light_gray',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
];

const DYED_ITEMS = [
    cd('white_shipping_container'),
    lu('white_luminax_block'),
    lu('white_luminax_stairs'),
    lu('white_luminax_slab'),
    lu('white_luminax_wall'),
    lu('white_luminax_pressure_plate'),
    lu('white_luminax_button'),
    lu('dim_white_luminax_block'),
    lu('dim_white_luminax_stairs'),
    lu('dim_white_luminax_slab'),
    lu('dim_white_luminax_wall'),
    lu('dim_white_luminax_pressure_plate'),
    lu('dim_white_luminax_button'),
    mi('white_fluid_pipe'),
    mi('white_item_pipe'),
    mi('white_me_wire'),
    lbr('white_microchip'),
    'comforts:hammock_white',
    id('white_bricks'),
    id('white_brick_stairs'),
    id('white_brick_slab'),
    id('diagonal_white_tiles'),
    id('white_short_tiles'),
    id('cracked_white_short_tiles'),
    id('white_tiles'),
    id('white_tiles_stairs'),
    id('white_tiles_slab'),
    id('white_metal_door'),
    id('white_cubic_shelf'),
    id('white_half_window'),
    id('white_panel_window'),
    id('white_lattice_window'),
    id('white_wood_railing'),
    id('white_wooden_panel_door'),
    id('white_wooden_tile_door'),
    id('white_wooden_clear_door'),
    id('white_framed_planks'),
    id('white_painted_planks'),
    id('white_painted_planks_stairs'),
    id('white_painted_plank_slab'),
    id('white_painted_planks_strips'),
    sd('white_resplendent_block'),
    sd('white_resplendent_cushion'),
    sd('white_resplendent_carpet'),
    sd('white_resplendent_bed'),
    fd('white_canvas_sign'),
    fd('white_hanging_canvas_sign'),
    'elevatorid:elevator_white',
    rd('bell_pepper_white_block'),
    rd('bell_pepper_white_crate'),
    cr('white_postbox'),
    cr('white_table_cloth'),
    cr('white_toolbox'),
    cr('white_seat'),
    wy('white_portstone'),
    wy('white_sharestone'),
    ch('legacy/white_wool'),
    ch('llama/white_wool'),
    ch('white_concrete'),
];
function tagItems(e) {
    DYED_ITEMS.forEach((ITEMS) => {
        let itemNameFirst = ITEMS.split('white')[0];
        let itemNameSecond = ITEMS.split('white')[1];
        DYE_COLORS.forEach((DYE_COLORS) => {
            e.add('c:dyed', `${itemNameFirst}${DYE_COLORS}${itemNameSecond}`);
            e.add(
                `c:dyed/${DYE_COLORS}`,
                `${itemNameFirst}${DYE_COLORS}${itemNameSecond}`
            );
        });
    });
}

ServerEvents.tags('item', (event) => {
    tagItems(event);
});

ServerEvents.tags('block', (event) => {
    tagItems(event);
});
