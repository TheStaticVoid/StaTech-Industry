ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/unpacker/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let unpacker = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('unpacker'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe).id(id);
    }
    
    const TRANSFORMERS = [
        {
            lowTransfromer: 'lv_mv_transformer',
            highTransformer: 'mv_lv_transformer',
            hull: mi('basic_machine_hull'),
            oneCable: mi('electrum_cable'),
            fourCables: mi('tin_cable')
        },
        {
            lowTransfromer: 'mv_hv_transformer',
            highTransformer: 'hv_mv_transformer',
            hull: mi('advanced_machine_hull'),
            oneCable: mi('aluminum_cable'),
            fourCables: mi('electrum_cable')
        },
        {
            lowTransfromer: 'hv_ev_transformer',
            highTransformer: 'ev_hv_transformer',
            hull: mi('turbo_machine_hull'),
            oneCable: mi('annealed_copper_cable'),
            fourCables: mi('aluminum_cable')
        },
        {
            lowTransfromer: 'ev_superconductor_transformer',
            highTransformer: 'superconductor_ev_transformer',
            hull: mi('highly_advanced_machine_hull'),
            oneCable: mi('superconductor_cable'),
            fourCables: mi('annealed_copper_cable')
        }
    ];

    // -- TRANSFORMERS DISASSEMBLE -- //
    TRANSFORMERS.forEach(data => {
        //low tier cables
        unpacker(
            st(`four_cables_from_${data.lowTransfromer}`),
            2,
            200,
            [ { amount: 1, item: mi(data.lowTransfromer) } ],
            [
                { amount: 1, item: data.hull },
                { amount: 4, item: data.fourCables }
            ]
        );
        //high tier cables
        unpacker(
            st(`one_cable_from_${data.highTransformer}`),
            2,
            200,
            [ { amount: 1, item: mi(data.highTransformer) } ],
            [
                { amount: 1, item: data.hull },
                { amount: 1, item: data.oneCable }
            ]
        );
    });
    
    // -- BRONZE PLATED BRICKS -- //
    unpacker(
        st(`disassemble_bronze_plated_bricks`),
        2,
        200,
        [ { amount: 1, item: mi('bronze_plated_bricks') } ],
        [
            { amount: 1, item: mi('fire_clay_bricks') },
            { amount: 8, item: mi('bronze_plate') }
        ]
    );
});