ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/laser_engraver/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let kjs = (id) => `kubejs:${id}`;

    let laserEngraver = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('laser_engraver'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)    
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe);
    }

    laserEngraver(
        st('diamond_lens'),
        32,
        600,
        [
            { amount: 1, item: kjs('diamond_lens'), probability: 0.0 },
            { amount: 1, item: mi('analog_circuit_board') }
        ],
        [
            { amount: 1, item: mi('analog_circuit') }
        ]
    );
});