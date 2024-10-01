ServerEvents.recipes(event => {
    const recipes = [
      // {
      //     "input": "minecraft:stone",
      //     "output": "ars_nouveau:spell_parchment",
      //     "items": [],
      //     "sourceCost": 5000,
      // },

        {
            "input": "minecraft:lapis_block",
            "output": "botania:terra_plate",
            "items": ['minecraft:lapis_block', 'ars_nouveau:imbuement_chamber', 'botania:mana_diamond_block', 'undergarden:froststeel_block', 'botania:alchemy_catalyst', 'irons_spellbooks:magic_cloth', 'minecraft:lapis_block', 'ars_nouveau:arcane_core', 'irons_spellbooks:magic_cloth', 'undergarden:cloggrum_block', 'botania:alchemy_catalyst', 'botania:rune_mana'],
            "sourceCost": 7000,
        },

        {
            "input": "irons_spellbooks:inscription_table",
            "output":"ars_nouveau:scribes_table",
            "items": ['minecraft:lapis_block', 'ars_nouveau:imbuement_chamber', 'botania:mana_diamond_block', 'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth', 'undergarden:cloggrum_block'],
            "sourceCost": 2500,
        },

        {
            "input": "ars_nouveau:arcane_core",
            "output": "botania:runic_altar",
            "items": ['create:precision_mechanism', 'botania:livingrock', 'botania:livingwood', 'botania:livingrock', 'botania:mana_diamond', 'botania:livingrock', 'botania:livingwood', 'botania:livingrock'],
            "sourceCost": 7000,
        },

         {
             "input": "minecraft:book",
             "output": "irons_spellbooks:copper_spell_book",
             "items": ['minecraft:copper_ingot', 'minecraft:book', 'ars_nouveau:bookwyrm_charm'],
             "sourceCost": 250,
         },
        
        {
            "input": "irons_spellbooks:copper_spell_book",
            "output": "irons_spellbooks:iron_spell_book",
            "items": ['bloodmagic:ironsand', 'create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet'],
            "sourceCost": 500,
        },
        
        {
            "input": "irons_spellbooks:copper_spell_book",
            "output": "irons_spellbooks:rotten_spell_book",
            "items": ['minecraft:poisonous_potato', 'eidolon:fungus_sprouts', 'farmersdelight:rotten_tomato', 'farmersdelight:rotten_tomato', 'irons_spellbooks:common_ink'],
            "sourceCost": 50,
        },

        {
            "input": 'eidolon:codex',
            "output": "irons_spellbooks:villager_spell_book",
            "items": ['eidolon:arcane_gold_ingot', 'eidolon:lesser_soul_gem', 'eidolon:holy_symbol'],
            "sourceCost": 5000,
        },

        {
            "input": 'irons_spellbooks:rotten_spell_book',
            "output": "irons_spellbooks:druidic_spell_book",
            "items": ['minecraft:vine', 'minecraft:honey_bottle', 'eidolon:fungus_sprouts', 'eidolon:enchanted_ash'],
            "sourceCost": 250,
        },

        {
            "input": 'eidolon:codex',
            "output": "irons_spellbooks:necronomicon_spell_book",
            "items": ['eidolon:unholy_symbol', 'eidolon:zombie_heart', 'eidolon:death_essence', 'iceandfire:witherbone', 'eidolon:lesser_soul_gem'],
            "sourceCost": 5000,
        },

        {
            "input": 'irons_spellbooks:villager_spell_book',
            "output": "irons_spellbooks:evoker_spell_book",
            "items": ['eidolon:pewter_inlay', 'eidolon:notetaking_tools', 'eidolon:lesser_soul_gem', 'eidolon:sulfur'],
            "sourceCost": 5000,
        },

        {
            "input": 'irons_spellbooks:iron_spell_book',
            "output": "irons_spellbooks:gold_spell_book",
            "items": ['eidolon:enchanted_ash', 'eidolon:enchanted_ash', 'botania:manaweave_cloth', 'botania:manaweave_cloth', 'botania:mana_diamond', 'eidolon:wicked_weave'],
            "sourceCost": 5000,
        },

        {
            "input": 'irons_spellbooks:gold_spell_book',
            "output": "irons_spellbooks:diamond_spell_book",
            "items": ['eidolon:enchanted_ash', 'eidolon:enchanted_ash', 'eidolon:enchanted_ash', 'botania:manaweave_cloth', 'botania:manaweave_cloth', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'apotheosis:rare_material'],
            "sourceCost": 5000,
        },

        {
            "input": 'irons_spellbooks:diamond_spell_book',
            "output": "irons_spellbooks:netherite_spell_book",
            "items": ['minecraft:netherite_ingot', 'minecraft:netherite_ingot', 'deeperdarker:warden_carapace', 'irons_spellbooks:ruined_book', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:upgrade_orb'],
            "sourceCost": 5000,
        },

        {
            "input": 'ice_and_fire_spellbooks:dragonmancers_oathbook',
            "output": "irons_spellbooks:dragonskin_spell_book",
            "items": ['minecraft:ender_eye', 'botania:quartz_lavender', 'botania:purple_petal', '#iceandfire:scales/dragon', '#iceandfire:scales/dragon', '#iceandfire:scales/dragon'],
            "sourceCost": 5000,
        },

        {
            "input": 'botania:livingwood_log',
            "output": "botania:alfheim_portal",
            "items": ['eidolon:enchanted_ash', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'eidolon:enchanted_ash'],
            "sourceCost": 5000,
        },
    ]
  
    recipes.forEach((recipe) => {
      var temp_items = [];
      recipe.items.forEach((item) => {
        temp_items.push({ "item": item });
      });
      var tempitem = {
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": {
          "item": recipe.input
        },
        "pedestalItems": temp_items,
        "output": {
          "item": recipe.output
        },
        "sourceCost": recipe.sourceCost,
        "count": 1
      }
      event.custom(tempitem);
    });
  })
