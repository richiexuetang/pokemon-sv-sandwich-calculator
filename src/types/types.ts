export interface FlavorInterface {
  Sweet?: number;
  Sour?: number;
  Bitter?: number;
  Salty?: number;
  Hot?: number;
}

export interface EffectInterface {
  Catching?: number;
  Egg?: number;
  Encounter?: number;
  Exp?: number;
  Humungo?: number;
  Item?: number;
  Raid?: number;
  Sparkling?: number;
  Teensy?: number;
  Title?: number;
}

export interface TypeInterface {
  Normal?: number;
  Fire?: number;
  Water?: number;
  Grass?: number;
  Electric?: number;
  Ice?: number;
  Fighting?: number;
  Poison?: number;
  Ground?: number;
  Flying?: number;
  Psychic?: number;
  Bug?: number;
  Rock?: number;
  Ghost?: number;
  Dark?: number;
  Steel?: number;
  Dragon?: number;
  Fairy?: number;
}

export interface AttributeInterface {
  Flavors: FlavorInterface;
  Effects: EffectInterface;
  Types: TypeInterface;
}

export interface Ingredient {
  [key: string]: AttributeInterface;
}

export interface Seasoning {
  [key: string]: AttributeInterface;
}
