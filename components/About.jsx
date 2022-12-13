import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";
const About = () => {
    return (
        <Box
            bgImage="/about.png"
            bgPos={"center"}
            bgSize="cover"
            bgAttachment={"fixed"}
            pt="64px"
        >
            <ScreenSize>
                <Box>
                    <Heading
                        textDecor={"none"}
                        color="brand.white"
                        textAlign={"center"}
                    >
                        About Us
                    </Heading>
                    <Box pt="72px">
                        <Flex
                            gap={10}
                            pb="64px"
                            flexDir={["column", null, "row"]}
                            id="about"
                        >
                            <Flex w={["100%", null, "50%"]} justify="center">
                                <Image
                                    rounded={"md"}
                                    alt={"feature image"}
                                    src="https://cdn.discordapp.com/attachments/1049748245217284096/1049823364631511111/Screenshot_20221205-222829.jpg"
                                    objectFit={"cover"}
                                    maxH="350px"
                                />
                            </Flex>
                            <Stack
                                spacing={4}
                                w={["100%", null, "50%"]}
                                pt="60px"
                                color="brand.blurText"
                            >
                                <Heading
                                    color="brand.white"
                                    textDecor={"underline"}
                                >
                                    GENEROUS{" "}
                                    <Text as="span" color="brand.cyan">
                                        {" "}
                                        SHEEPS
                                    </Text>{" "}
                                </Heading>
                                <Text color={"brand.dimWhite"} fontSize={"md"}>
                                    Generous Sheeps is a collection of 555
                                    Generous Rams,Ewe and lambs deployed to the
                                    Solana Blockchain to rescue/help victim that
                                    were part of the Solana breakdown;and they
                                    express {`they're`} generousity by giving
                                    back
                                    {`they're`} tokens ($wool) or sol to{" "}
                                    {`they're`}
                                    holders who are generous too😏.
                                </Text>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </ScreenSize>
        </Box>
    );
};

export default About;

// https://cdn.discordapp.com/attachments/1049748245217284096/1049823364631511111/Screenshot_20221205-222829.jpg
