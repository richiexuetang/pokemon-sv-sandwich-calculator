import { Box, Button, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { seasoningsList } from "../data/ingredientLists";

const Seasonings = () => {
  const [selectedSeasonings, setSelectedSeasonings] = useState<string[]>([]);

  const handleSeasoningClick = (name: string) => {
    if (selectedSeasonings.includes(name)) {
      setSelectedSeasonings(selectedSeasonings.filter((item) => item != name));
    } else if (selectedSeasonings && selectedSeasonings.length === 4) {
      return;
    } else {
      setSelectedSeasonings([...selectedSeasonings, name]);
    }
  };

  return (
    <Box>
      <Heading mb="5">Select up to 4 Seasonings:</Heading>
      <Stack
        spacing={4}
        direction="row"
        align="center"
        flexWrap="wrap"
        justifyContent="space-between"
        w="900px"
      >
        {seasoningsList.map((name) => (
          <Box key={name} my="2" ml="0 !important">
            <Button onClick={() => handleSeasoningClick(name)}>
              <Text color="black">{name}</Text>
              <Image
                src={`https://www.serebii.net/itemdex/sprites/${name
                  .toLowerCase()
                  .replaceAll(" ", "")}.png`}
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
              <Text key={ingredient} fontSize="sm">
                {ingredient}
              </Text>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Seasonings;
