ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.imbuement(
        "botania:mana_pearl",
        "irons_spellbooks:divine_pearl",
        5000, 
        ['ars_nouveau:source_gem', 'minecraft:gold_nugget', 'irons_spellbooks:arcane_ingot', 'minecraft:gold_ingot', 'irons_spellbooks:arcane_ingot', 'minecraft:gold_nugget']
    )

    event.recipes.ars_nouveau.imbuement(
        "minecraft:iron_ingot",
        "irons_spellbooks:arcane_ingot",
        5000, 
        ['irons_spellbooks:arcane_essence', 'irons_spellbooks:arcane_essence', 'irons_spellbooks:arcane_essence', 'eidolon:soul_shard', 'irons_spellbooks:arcane_essence', 'irons_spellbooks:arcane_essence', 'irons_spellbooks:arcane_essence', 'eidolon:gold_inlay']
    )

    event.recipes.ars_nouveau.imbuement(
        "minecraft:heart_of_the_sea",
        "minecraft:clay_ball",
        5000, 
        ['botania:livingrock', 'ars_nouveau:water_essence', 'ars_nouveau:source_gem', 'minecraft:amethyst_shard']
    )

    event.recipes.ars_nouveau.imbuement(
        "botania:mana_string",
        "irons_spellbooks:magic_cloth",
        5000, 
        ['botania:manaweave_cloth', 'apotheosis:uncommon_material', 'botania:manaweave_cloth', 'minecraft:white_wool', 'minecraft:stick']
    )

});
