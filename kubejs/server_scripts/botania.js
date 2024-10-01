ServerEvents.recipes(event => {
    event.recipes.botania.mana_infusion("create:blaze_burner", "create:empty_blaze_burner", 10000)

    event.recipes.botania.petal_apothecary("create:empty_blaze_burner", ["eidolon:soul_shard","create:iron_sheet","eidolon:sulfur","undergarden:cloggrum_block","eidolon:sulfur","create:iron_sheet","eidolon:sulfur","create:iron_sheet","eidolon:sulfur"])

    event.recipes.botania.petal_apothecary('create:rose_quartz', ['minecraft:amethyst_shard', 'botania:red_petal', "minecraft:redstone", 'botania:red_petal', 'botania:pink_petal', "minecraft:redstone", 'botania:pink_petal'])

    event.recipes.botania.petal_apothecary('ars_nouveau:source_jar', ['eidolon:arcane_gold_ingot', 'ars_nouveau:mob_jar', 'ars_nouveau:source_gem', 'botania:purple_petal', 'botania:purple_petal'])

    event.recipes.botania.petal_apothecary('irons_spellbooks:arcane_anvil', ['minecraft:amethyst_block', 'undergarden:utherium_block', 'deeperdarker:reinforced_echo_shard', 'irons_spellbooks:ender_rune', 'deeperdarker:warden_upgrade_smithing_template', 'botania:mana_diamond_block', 'deeperdarker:heart_of_the_deep', 'minecraft:dragon_head', 'minecraft:anvil'])

    event.recipes.botania.petal_apothecary('toughasnails:empty_canteen', ['minecraft:leather', 'minecraft:leather', 'minecraft:leather', 'minecraft:leather', 'minecraft:string'])

    event.recipes.botania.petal_apothecary('botania:alchemy_catalyst', ['#botania:mystical_flowers', 'minecraft:amethyst_shard', 'eidolon:arcane_gold_ingot', 'ars_nouveau:whirlisprig_shards', 'ars_nouveau:drygmy_shard', 'ars_nouveau:starbuncle_shards', 'apotheosis:gem_dust', 'eidolon:arcane_gold_ingot'])
})
