ServerEvents.recipes((event) => {
  const recipes = [
 
    {
      id: "irons_spellbooks:electrocute",
      items: ["irons_spellbooks:blank_rune", "irons_spellbooks:common_ink", "create:copper_sheet", "create:copper_sheet", "ars_nouveau:source_gem", "ars_nouveau:source_gem", "ars_nouveau:air_essence", "ars_nouveau:air_essence"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:thunderstorm",
      items: ["ars_nouveau:conjuration_essence", "irons_spellbooks:rare_ink", "irons_spellbooks:lightning_rune", "iceandfire:lightning_dragon_heart", "botania:rune_mana", "iceandfire:lightning_lily", "ars_nouveau:conjuration_essence", "irons_spellbooks:lightning_upgrade_orb"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:lightning_lance",
      items: ["botania:manasteel_ingot", "botania:manasteel_ingot", "irons_spellbooks:lightning_rune", "botania:manasteel_ingot", "magistuarmory:heavy_crossbow", "botania:rune_air", "botania:rune_air", "irons_spellbooks:uncommon_ink"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:lightning_bolt",
      items: ["botania:tornado_rod", "irons_spellbooks:epic_ink", "botania:rune_wrath", "ars_nouveau:conjuration_essence", "iceandfire:lightning_dragon_blood", "eidolon:magic_ink", "ars_elemental:glyph_discharge", "botania:rune_wrath"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:charge",
      items: ["irons_spellbooks:rare_ink", "botania:mana_pearl", "botania:mana_pearl", "botania:quartz_mana", "ars_elemental:glyph_discharge", "apotheosis:gem_dust", "irons_spellbooks:lightning_rune", "eidolon:lesser_soul_gem"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:chain_lightning",
      items: ["ars_nouveau:source_gem", "create:rose_quartz", "irons_spellbooks:uncommon_ink", "create:rose_quartz", "ars_nouveau:source_gem", "apotheosis:gem_dust"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:shockwave",
      items: ["minecraft:amethyst_shard", "ars_nouveau:air_essence", "create:brass_ingot", "botania:mana_diamond", "irons_spellbooks:common_ink", "botania:mana_diamond", "create:brass_ingot", "ars_nouveau:air_essence"],
      sourceCost: 5000,
    },

    {
      id: "irons_spellbooks:ball_lightning",
      items: ["ars_nouveau:source_gem", "ars_nouveau:air_essence", "irons_spellbooks:common_ink", "ars_nouveau:air_essence", "ars_nouveau:source_gem", "botania:vine_ball"],
      sourceCost: 5000,
    },
  ];

  recipes.forEach((recipe) => {
    var temp_items = [];
    recipe.items.forEach((item) => {
      temp_items.push({ "item": item });
    });
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "reagent": {
        "item": "ars_nouveau:spell_parchment"
      },
      "pedestalItems": temp_items,
      "output": {
        "item": "irons_spellbooks:scroll",
        "nbt": {
          "ISB_Spells": {
            "data": [
              {
                "id": recipe.id.toString(),
                "index": 0,
                "level": 1,
                "locked": 1
              }
            ],
            "maxSpells":1,
            "mustEquip":0,
            "spellWheel":0
          }
        }
      },
      "sourceCost": recipe.sourceCost,
      "count": 1
    });
  });
});
