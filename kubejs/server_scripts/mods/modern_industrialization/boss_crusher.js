// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/boss_crusher/${id}`;

    // -- WITHER MODEL -- //
    boss_crusher(
        event,
        st('wither_model'),
        128,
        600,
        [ { amount: 1, item: kj('wither_model') } ],
        [
            { amount: 1, item: mc('ender_pearl'), probability: 0.15 },
            { amount: 16, item: cr('experience_nugget') }
        ],
        [ { amount: 500, fluid: mi('molten_enderium') } ],
        [ { amount: 500, fluid: mi('impure_liquid_nether_star') } ]
    );

    // -- DRAGON MODEL -- //
    boss_crusher(
        event,
        st('dragon_model'),
        128,
        600,
        [ { amount: 1, item: kj('dragon_model') } ],
        [
            { amount: 1, item: mc('dragon_egg') },
            { amount: 64, item: mc('dragon_breath') },
            { amount: 64, item: cr('experience_nugget') },
            { amount: 1, item: mc('elytra'), probability: 0.05 }
        ],
        [ { amount: 500, fluid: mi('molten_enderium') } ],
        [ { amount: 500, fluid: mi('dragons_blood') } ]
    );

    // -- WARDEN MODEL -- //
    boss_crusher(
        event,
        st('warden_model'),
        128,
        600,
        [ { amount: 1, item: kj('warden_model') } ],
        [
            { amount: 8, item: mc('sculk_shrieker') },
            { amount: 64, item: mc('sculk') },
            { amount: 16, item: mc('echo_shard') },
            { amount: 16, item: mc('amethyst_shard') }
        ],
        [ { amount: 500, fluid: mi('molten_enderium') } ],
        [ { amount: 500, fluid: mi('impure_resonating_fluid')}]
    );
});