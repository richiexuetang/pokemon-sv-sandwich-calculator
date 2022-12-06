import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  ingredietAttributes,
  seasoningAttributes,
} from '../data/ingredientAttributes';
import {
  EffectInterface,
  FlavorInterface,
  TypeInterface,
} from '../types/types';
import { ingredientsList, seasoningsList } from '../data/ingredientLists';

const Ingredients: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedSeasonings, setSelectedSeasonings] = useState<string[]>([]);

  const [flavorsValue, setFlavorsValue] = useState<FlavorInterface>({
    Sweet: 0,
    Sour: 0,
    Bitter: 0,
    Salty: 0,
    Hot: 0,
  });
  const [effectsValue, setEffectsValue] = useState<EffectInterface>({
    Catching: 0,
    Egg: 0,
    Encounter: 0,
    Exp: 0,
    Humungo: 0,
    Item: 0,
    Raid: 0,
    Sparkling: 0,
    Teensy: 0,
    Title: 0,
  });

  const [typesValue, setTypesValue] = useState<TypeInterface>({
    Normal: 0,
    Fire: 0,
    Water: 0,
    Grass: 0,
    Electric: 0,
    Ice: 0,
    Fighting: 0,
    Poison: 0,
    Ground: 0,
    Flying: 0,
    Psychic: 0,
    Bug: 0,
    Rock: 0,
    Ghost: 0,
    Dark: 0,
    Steel: 0,
    Dragon: 0,
    Fairy: 0,
  });

  const handleIngredientClick = (name: string) => {
    if (selectedIngredients.includes(name)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== name),
      );

      const updatedEffects: EffectInterface = {};
      const updatedFlavors: FlavorInterface = {};
      const updatedTypes: TypeInterface = {};

      const attribute = ingredietAttributes[name.replaceAll(' ', '')];
      const { Effects, Flavors, Types } = attribute;

      Object.keys(Effects).map((effect) => {
        const subVal = Effects[effect as keyof EffectInterface] || 0;
        const preVal = effectsValue[effect as keyof EffectInterface] || 0;

        updatedEffects[effect as keyof EffectInterface] = preVal - subVal;

        setEffectsValue({ ...effectsValue, ...updatedEffects });
      });

      Object.keys(Flavors).map((flavor) => {
        const subVal = Flavors[flavor as keyof FlavorInterface] || 0;
        const preVal = flavorsValue[flavor as keyof FlavorInterface] || 0;

        updatedFlavors[flavor as keyof FlavorInterface] = preVal - subVal;

        setFlavorsValue({ ...flavorsValue, ...updatedFlavors });
      });

      Object.keys(Types).map((type) => {
        const subVal = Types[type as keyof TypeInterface] || 0;
        const preVal = typesValue[type as keyof TypeInterface] || 0;

        updatedTypes[type as keyof TypeInterface] = preVal - subVal;

        setTypesValue({ ...typesValue, ...updatedTypes });
      });
    } else if (selectedIngredients && selectedIngredients.length <= 6) {
      setSelectedIngredients([...selectedIngredients, name]);
      const updatedEffects: EffectInterface = {};
      const updatedFlavors: FlavorInterface = {};
      const updatedTypes: TypeInterface = {};

      const attribute = ingredietAttributes[name.replaceAll(' ', '')];
      const { Effects, Flavors, Types } = attribute;

      Object.keys(Effects).map((effect) => {
        const addVal = Effects[effect as keyof EffectInterface] || 0;
        const preVal = effectsValue[effect as keyof EffectInterface] || 0;

        updatedEffects[effect as keyof EffectInterface] = preVal + addVal;

        setEffectsValue({ ...effectsValue, ...updatedEffects });
      });

      Object.keys(Flavors).map((flavor) => {
        const addVal = Flavors[flavor as keyof FlavorInterface] || 0;
        const preVal = flavorsValue[flavor as keyof FlavorInterface] || 0;

        updatedFlavors[flavor as keyof FlavorInterface] = preVal + addVal;

        setFlavorsValue({ ...flavorsValue, ...updatedFlavors });
      });

      Object.keys(Types).map((type) => {
        const addVal = Types[type as keyof TypeInterface] || 0;
        const preVal = typesValue[type as keyof TypeInterface] || 0;

        updatedTypes[type as keyof TypeInterface] = preVal + addVal;

        setTypesValue({ ...typesValue, ...updatedTypes });
      });
    }
  };

  const handleSeasoningClick = (name: string) => {
    if (selectedSeasonings.includes(name)) {
      setSelectedSeasonings(selectedSeasonings.filter((item) => item !== name));

      const updatedEffects: EffectInterface = {};
      const updatedFlavors: FlavorInterface = {};
      const updatedTypes: TypeInterface = {};

      const attribute = seasoningAttributes[name.replaceAll(' ', '')];
      const { Effects, Flavors, Types } = attribute;

      Object.keys(Effects).map((effect) => {
        const subVal = Effects[effect as keyof EffectInterface] || 0;
        const preVal = effectsValue[effect as keyof EffectInterface] || 0;

        updatedEffects[effect as keyof EffectInterface] = preVal - subVal;

        setEffectsValue({ ...effectsValue, ...updatedEffects });
      });

      Object.keys(Flavors).map((flavor) => {
        const subVal = Flavors[flavor as keyof FlavorInterface] || 0;
        const preVal = flavorsValue[flavor as keyof FlavorInterface] || 0;

        updatedFlavors[flavor as keyof FlavorInterface] = preVal - subVal;

        setFlavorsValue({ ...flavorsValue, ...updatedFlavors });
      });

      Object.keys(Types).map((type) => {
        const subVal = Types[type as keyof TypeInterface] || 0;
        const preVal = typesValue[type as keyof TypeInterface] || 0;

        updatedTypes[type as keyof TypeInterface] = preVal - subVal;

        setTypesValue({ ...typesValue, ...updatedTypes });
      });
    } else if (selectedSeasonings && selectedSeasonings.length <= 4) {
      setSelectedSeasonings([...selectedSeasonings, name]);

      const updatedEffects: EffectInterface = {};
      const updatedFlavors: FlavorInterface = {};
      const updatedTypes: TypeInterface = {};

      const attribute = seasoningAttributes[name.replaceAll(' ', '')];
      const { Effects, Flavors, Types } = attribute;

      Object.keys(Effects).map((effect) => {
        const addVal = Effects[effect as keyof EffectInterface] || 0;
        const preVal = effectsValue[effect as keyof EffectInterface] || 0;

        updatedEffects[effect as keyof EffectInterface] = preVal + addVal;

        setEffectsValue({ ...effectsValue, ...updatedEffects });
      });

      Object.keys(Flavors).map((flavor) => {
        const addVal = Flavors[flavor as keyof FlavorInterface] || 0;
        const preVal = flavorsValue[flavor as keyof FlavorInterface] || 0;

        updatedFlavors[flavor as keyof FlavorInterface] = preVal + addVal;

        setFlavorsValue({ ...flavorsValue, ...updatedFlavors });
      });

      Object.keys(Types).map((type) => {
        const addVal = Types[type as keyof TypeInterface] || 0;
        const preVal = typesValue[type as keyof TypeInterface] || 0;

        updatedTypes[type as keyof TypeInterface] = preVal + addVal;

        setTypesValue({ ...typesValue, ...updatedTypes });
      });
    }
  };

  return (
    <Box>
      <Heading mb='5'>Select up to 6 ingredients:</Heading>
      <Stack
        spacing={4}
        direction='row'
        align='center'
        flexWrap='wrap'
        justifyContent='space-between'
        w='900px'
      >
        {ingredientsList.map((name) => (
          <Box key={name} my='2' ml='0 !important'>
            <Button onClick={() => handleIngredientClick(name)}>
              <Text color='black'>{name}</Text>
              <Image
                src={`https://www.serebii.net/itemdex/sprites/${name
                  .toLowerCase()
                  .replaceAll(' ', '')}.png`}
                alt={name}
              />
            </Button>
          </Box>
        ))}
      </Stack>

      {selectedIngredients && (
        <Box>
          {selectedIngredients.map((ingredient) => (
            <Text key={ingredient} fontSize='sm'>
              {ingredient}
            </Text>
          ))}
        </Box>
      )}

      <Box mt='5'>
        <Heading mb='5'>Select up to 4 Seasonings:</Heading>
        <Stack
          spacing={4}
          direction='row'
          align='center'
          flexWrap='wrap'
          justifyContent='space-between'
          w='900px'
        >
          {seasoningsList.map((name) => (
            <Box key={name} my='2' ml='0 !important'>
              <Button onClick={() => handleSeasoningClick(name)}>
                <Text color='black'>{name}</Text>
                <Image
                  src={`https://www.serebii.net/itemdex/sprites/${name
                    .toLowerCase()
                    .replaceAll(' ', '')}.png`}
                  alt={name}
                />
              </Button>
            </Box>
          ))}
        </Stack>
        <Box>
          {selectedSeasonings && (
            <Box>
              {selectedSeasonings.map((ingredient) => (
                <Text key={ingredient} fontSize='sm'>
                  {ingredient}
                </Text>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      <Box mt='5'>
        <Box mt='3'>
          <Heading fontSize='xl'>Flavor value breakdown:</Heading>
          {selectedIngredients && (
            <Grid templateColumns='repeat(7, 1fr)' gap={6}>
              {Object.keys(flavorsValue).map((key) => (
                <Box key={key}>
                  <Text fontSize='sm'>
                    {key} : {flavorsValue[key as keyof FlavorInterface]}
                  </Text>
                </Box>
              ))}
            </Grid>
          )}
        </Box>
        <Box mt='3'>
          <Heading fontSize='xl'>Effect value breakdown:</Heading>
          {selectedIngredients && (
            <Grid templateColumns='repeat(7, 1fr)' gap={6}>
              {Object.keys(effectsValue).map((key) => (
                <Box key={key}>
                  <Text fontSize='sm'>
                    {key} : {effectsValue[key as keyof EffectInterface]}
                  </Text>
                </Box>
              ))}
            </Grid>
          )}
        </Box>
        <Box mt='3'>
          <Heading fontSize='xl'>Type value breakdown:</Heading>
          {selectedIngredients && (
            <Grid templateColumns='repeat(7, 1fr)' gap={6}>
              {Object.keys(typesValue).map((key) => (
                <Box key={key} mt='2'>
                  <Text fontSize='sm'>
                    <Image
                      src={`https://www.serebii.net/pokedex-bw/type/${key.toLowerCase()}.gif`}
                    />{' '}
                    : {typesValue[key as keyof TypeInterface]}
                  </Text>
                </Box>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Ingredients;
