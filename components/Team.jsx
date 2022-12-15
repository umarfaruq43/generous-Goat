import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";

const Team = () => {
    return (
        <Box bgImage="parttern.svg" bgPos="center" py="42px">
            <ScreenSize>
                <Box>
                    <Box id="faq" pb="32px">
                        <Heading
                            //     fontWeight="600"
                            //     fontSize={["24px", "36px", "48px"]}
                            textAlign="left"
                            mx="auto"
                            textDecor={"underline"}
                            //     maxWidth="700px"
                            color="brand.white"
                        >
                            Team
                        </Heading>
                    </Box>

                    <Box mt="52px">
                        <SimpleGrid minChildWidth={"250px"} gap="32px">
                            {team.map((team, i) => {
                                return (
                                    <Box
                                        maxW="250px"
                                        minH="200px"
                                        key="i"
                                        mx="auto"
                                    >
                                        <Image
                                            shadow="lg"
                                            className="sliderHover"
                                            src={team.user}
                                            minH="245px"
                                            alt="Sample"
                                            objectFit={"cover"}
                                            borderRadius={"full"}
                                            fallbackSrc="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
                                        />

                                        <Flex
                                            align="center"
                                            justify="center"
                                            mt="20px"
                                        >
                                            <Box>
                                                <Text
                                                    mx="auto"
                                                    color="brand.white"
                                                    textAlign={"center"}
                                                    maxW="150px"
                                                    mb="8px"
                                                >
                                                    {team.role}
                                                </Text>

                                                <Button
                                                    _hover={{
                                                        bg: "transparent",
                                                    }}
                                                    bg="transparent"
                                                    border="2px"
                                                    borderColor={"brand.purple"}
                                                    color="brand.white"
                                                    borderRadius={"full"}
                                                    px="20px"
                                                    w="180px"
                                                >
                                                    {team.name}
                                                </Button>
                                            </Box>
                                        </Flex>
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    </Box>
                </Box>
            </ScreenSize>
        </Box>
    );
};

export default Team;

const team = [
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051572659575595118/Screenshot_20221206-235759.jpg",
        role: "Founder",
        name: "Sam",
    },
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051572770548498582/Screenshot_20221206-235522.jpg",
        role: "Moderator",
        name: "Moderator Drey",
    },

    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051617886931800114/Screenshot_20221206-235656.jpg",
        role: "Moderator",
        name: "Blankcoo",
    },
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051617975695839345/Screenshot_20221206-235628.jpg",
        role: "Moderator",
        name: "Keith ",
    },
    {
        user: "https://media.discordapp.net/attachments/1049748245217284096/1051618267145445488/Screenshot_20221206-235643.jpg",
        role: "Collab manager/ WL hunter",
        name: "Solara ",
    },
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051618402357223424/Screenshot_20221206-235831.jpg",
        role: "Collab manager/ Wl hunter",
        name: "WhiteKing",
    },
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051619042676461598/Screenshot_20221206-235437.jpg",
        role: "Collab manager/ Wl hunter",
        name: "IamJR",
    },
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1051619292472426647/Screenshot_20221206-235613.jpg",
        role: "Collab manager/ Wl hunter",
        name: "Satomi ",
    },
    {
        user: "https://cdn.discordapp.com/attachments/1049748245217284096/1052660666680475658/Screenshot_20221206-235510.jpg",
        role: "Artist",
        name: "Ashen  ",
    },
];
