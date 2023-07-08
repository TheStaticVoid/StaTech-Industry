ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let cr = (id) => `create:${id}`;
    let cd = (id) => `culturaldelights:${id}`;
    let ap = (id) => `architects_palette:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let st = (id) => `statech:modern_industrialization/mob_crusher/${id}`;

    let crusher = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('mob_crusher'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe);
    }

    // -- ZOMBIE -- //
    crusher(
        st('zombie'),
        8,
        600,
        [ { amount: 1, item: kj('zombie_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('rotten_flesh') },
            { amount: 1, item: mc('iron_ingot'), probability: 0.025 },
            { amount: 1, item: mc('carrot'), probability: 0.025 },
            { amount: 1, item: mc('potato'), probability: 0.025 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 },
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- ENDERMAN -- //
    crusher(
        st('enderman'),
        8,
        600,
        [ { amount: 1, item: kj('enderman_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('ender_pearl'), probability: 0.3 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('liquid_ender') } ]
    );

    // -- SKELETON -- //
    crusher(
        st('skeleton'),
        8,
        600,
        [ { amount: 1, item: kj('skeleton_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('bone') },
            { amount: 1, item: mc('bone'), probability: 0.5 },
            { amount: 1, item: mc('arrow'), probability: 0.4 },
            { amount: 1, item: mc('bow'), probability: 0.1 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ]
    );

    // -- PIG -- //
    crusher(
        st('pig'),
        8,
        600,
        [ { amount: 1, item: kj('pig_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('porkchop'), probability: 0.85 },
            { amount: 1, item: mc('bone'), probability: 0.65 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- SHEEP -- //
    crusher(
        st('sheep'),
        8,
        600,
        [ { amount: 1, item: kj('sheep_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('white_wool') },
            { amount: 1, item: mc('white_wool'), probability: 0.5 },
            { amount: 1, item: mc('mutton'), probability: 0.85 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- COW -- //
    crusher(
        st('cow'),
        8,
        600,
        [ { amount: 1, item: kj('cow_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('beef') },
            { amount: 1, item: mc('beef'), probability: 0.5 },
            { amount: 1, item: mc('leather'), probability: 0.65 },
            { amount: 1, item: mc('bone'), probability: 0.5 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- CHICKEN -- //
    crusher(
        st('chicken'),
        8,
        600,
        [ { amount: 1, item: kj('chicken_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('chicken') },
            { amount: 1, item: mc('feather') },
            { amount: 1, item: mc('feather'), probability: 0.5 },
            { amount: 1, item: mc('bone'), probability: 0.3 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.2 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- SQUID -- //
    crusher(
        st('squid'),
        8,
        600,
        [ { amount: 1, item: kj('squid_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('ink_sac') },
            { amount: 1, item: mc('ink_sac'), probability: 0.5 },
            { amount: 1, item: cd('squid'), probability: 0.25 },
            { amount: 1, item: mc('glow_ink_sac'), probability: 0.01 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.3 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- SPIDER -- //
    crusher(
        st('spider'),
        8,
        600,
        [ { amount: 1, item: kj('spider_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('string') },
            { amount: 1, item: mc('string'), probability: 0.5 },
            { amount: 1, item: mc('spider_eye'), probability: 0.5 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- CREEPER -- //
    crusher(
        st('creeper'),
        8,
        600,
        [ { amount: 1, item: kj('creeper_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('gunpowder') },
            { amount: 1, item: mc('gunpowder'), probability: 0.5 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- SLIME -- //
    crusher(
        st('slime'),
        8,
        600,
        [ { amount: 1, item: kj('slime_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('slime_ball') },
            { amount: 1, item: mc('slime_ball'), probability: 0.5 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- GHAST -- //
    crusher(
        st('ghast'),
        8,
        600,
        [ { amount: 1, item: kj('ghast_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('ghast_tear'), probability: 0.5 },
            { amount: 1, item: mc('gunpowder'), probability: 0.75 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- ZOMBIE PIGLIN -- //
    crusher(
        st('piglin'),
        8,
        600,
        [ { amount: 1, item: kj('zombie_piglin_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('rotten_flesh') },
            { amount: 1, item: mc('rotten_flesh'), probability: 0.5 },
            { amount: 1, item: mc('gold_nugget'), probability: 0.5 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.2 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- MAGMA CUBE -- // 
    crusher(
        st('magma_cube'),
        8,
        600,
        [ { amount: 1, item: kj('magma_cube_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('magma_cream') },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- BLAZE MODEL -- //
    crusher(
        st('blaze'),
        8,
        600,
        [ { amount: 1, item: kj('blaze_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('blaze_rod'), probability: 0.4 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.4 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );

    // -- WITHER SKELETON -- //
    crusher(
        st('wither_skeleton'),
        8,
        600,
        [ { amount: 1, item: kj('wither_skeleton_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('bone') },
            { amount: 1, item: mc('coal'), probability: 0.333 },
            { amount: 1, item: ap('withered_bone'), probability: 0.90 },
            { amount: 1, item: mc('wither_skeleton_skull'), probability: 0.025 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.5 }
        ],
        [ { amount: 100, fluid: mc('lava') } ]
    );

    // -- GUARDIAN MODEL -- //
    crusher(
        st('guardian'),
        8,
        600,
        [ { amount: 1, item: kj('guardian_model'), probability: 0.05 } ],
        [
            { amount: 1, item: mc('prismarine_shard') },
            { amount: 1, item: mc('prismarine_crystals'), probability: 0.8 },
            { amount: 1, item: mc('sponge'), probability: 0.01 },
            { amount: 1, item: cr('experience_nugget'), probability: 0.8 }
        ],
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 150, fluid: mi('blood') } ]
    );
});