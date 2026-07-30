// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((e) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) =>
        `statech:modern_industrialization/quantum_space_probe_launcher/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kj = (id) => `kubejs:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let qspl = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('quantum_space_probe_launcher'),
            eu: eu,
            duration: duration,
        };

        if (item_inputs) newRecipe['item_inputs'] = item_inputs;
        if (item_outputs) newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe).id(id);
    };

    // -- SPACE PROBE -- //
    qspl(
        st('space_probe'),
        128,
        6000,
        [{ amount: 1, item: kj('space_probe'), probability: 0.75 }],
        [
            { amount: 64, item: mi('deepslate_desh_ore') },
            { amount: 64, item: mi('deepslate_ostrum_ore') },
            { amount: 64, item: mi('deepslate_calorite_ore') },
            { amount: 64, item: mi('deepslate_moon_ice_ore') },
        ]
    );
});
