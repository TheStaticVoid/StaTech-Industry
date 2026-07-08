ServerEvents.tags('block', (event) => {
    const blocks = /lootr:lootr_\w+/;
    event.add('ftbchunks:interact_whitelist', blocks);
    event.add('ftbchunks:interact_whitelist', '#waystones:is_teleport_target');
    event.add('ftbchunks:interact_whitelist', '#create:seats');
    event.add('ftbchunks:interact_whitelist', '#minecraft:wooden_doors');
});
