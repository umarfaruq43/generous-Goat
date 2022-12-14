import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";

import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";
const Hero = () => {
    return (
        <Box
            style={{ zIndex: 40 }}
            bgImage="/heroBg.jpg"
            bgSize="cover"
            bgPos={"center"}
            minH="100vh"
            pt="150px"
            px={["", null, "52px"]}
        >
            <ScreenSize>
                <Stack direction={{ base: "column-reverse", md: "row" }}>
                    <Flex
                        align={"center"}
                        justify={"center"}
                        w={["100%", null, "50%"]}
                        pt="40px"
                    >
                        <Stack spacing={6} w={"full"} maxW={"lg"}>
                            <Heading
                                fontSize={{
                                    base: "3xl",
                                    md: "4xl",
                                    lg: "5xl",
                                }}
                            >
                                <Text
                                    as={"span"}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "full",
                                        height: useBreakpointValue({
                                            base: "20%",
                                            md: "30%",
                                        }),
                                        position: "absolute",
                                        bottom: 1,
                                        left: 0,
                                        bg: "blue.400",
                                        zIndex: -1,
                                    }}
                                    color="#FFF"
                                >
                                    GENEROUS SHEEPS
                                </Text>
                                <br />{" "}
                                <Text color={"brand.cyan"} as={"span"}>
                                    MINT PROJECT{" "}
                                </Text>{" "}
                            </Heading>
                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                color={"brand.fadeGray"}
                            >
                                A collection of 555 Generous Rams,Ewe and lambs
                                deployed to the Solana Blockchain to rescue/help
                                victim that were part of the Solana breakdown;
                            </Text>
                            <Stack
                                direction={{ base: "row", md: "row" }}
                                spacing={4}
                            >
                                <Button
                                    rounded={"xl"}
                                    bg={"brand.gray"}
                                    color={"white"}
                                    py={["13px", null, "24px"]}
                                    _hover={{
                                        bg: "brand.cyan",
                                    }}
                                    fontSize={["14px", null, "16px"]}
                                    w="fit-content"
                                    as="a"
                                    href="https://discord.gg/s6e3yGWUK4 "
                                >
                                    Join Discord{" "}
                                    <Icon
                                        as={FaDiscord}
                                        ml="15px"
                                        w={["15px", null, "20px"]}
                                        h={["15px", null, "20px"]}
                                    />
                                </Button>

                                <Button
                                    rounded={"xl"}
                                    bg={"brand.cyan"}
                                    color={"white"}
                                    py={["13px", null, "24px"]}
                                    _hover={{
                                        bg: "brand.gray",
                                    }}
                                    fontSize={["14px", null, "16px"]}
                                    w="fit-content"
				    as="a"
				    href="https://twitter.com/GenerousSheep"
                                >
                                    Join Twitter{" "}
                                    <Icon
                                        as={FaTwitter}
                                        ml="15px"
                                        w={["15px", null, "20px"]}
                                        h={["15px", null, "20px"]}
                                    />
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>

                    <Flex
                        justify={"center"}
                        align="center"
                        maxH="400px"
                        w={["100%", null, "50%"]}
                    >
                        <Flex position="relative" gap="32px" w="100%">
                            <Box
                                maxWidth={["180px", null, "250px"]}
                                w="100%"
                                className="bg slantLeft"
                                position="relative"
                                overflow={"hidden"}
                                borderRadius="20px"
                                h="100%"
                            >
                                <Image
                                    src="https://cdn.discordapp.com/attachments/1049748245217284096/1049823385439453284/Screenshot_20221206-235831.jpg"
                                    alt="owener"
                                />
                                <Box px="32px" py="19px">
                                    <Box position="relative">
                                        <Box
                                            minH={["7px", null, "15px"]}
                                            mt="5px"
                                            className="miniBg"
                                            w="70%"
                                        ></Box>
                                        <Box
                                            minH={["7px", null, "15px"]}
                                            w="50%"
                                            mt="15px"
                                            className="miniBg"
                                        ></Box>
                                        <Box
                                            position="absolute"
                                            minH={["7px", null, "15px"]}
                                            w={["20px", null, "40px"]}
                                            h={["20px", null, "40px"]}
                                            borderRadius="100%"
                                            mt="15px"
                                            className="miniBg"
                                            right="0"
                                            top="0"
                                        ></Box>
                                    </Box>
                                </Box>
                            </Box>

                            {/* *************************** */}

                            <Box position="absolute" right="4" top="30px">
                                <Box
                                    maxWidth={["180px", null, "250px"]}
                                    w="100%"
                                    className="bg slantRight"
                                    position="relative"
                                    overflow={"hidden"}
                                    borderRadius="20px"
                                    h="100%"
                                >
                                    <Image
                                        src="https://cdn.discordapp.com/attachments/1049748245217284096/1049823385238122586/Screenshot_20221206-235759.jpg"
                                        alt="owener"
                                    />
                                    <Box px="32px" py="19px">
                                        <Box position="relative">
                                            <Box
                                                minH={["7px", null, "15px"]}
                                                mt="5px"
                                                className="miniBg"
                                                w="70%"
                                            ></Box>
                                            <Box
                                                minH={["7px", null, "15px"]}
                                                w="50%"
                                                mt="15px"
                                                className="miniBg"
                                            ></Box>
                                            <Box
                                                position="absolute"
                                                minH={["7px", null, "15px"]}
                                                w={["20px", null, "40px"]}
                                                h={["20px", null, "40px"]}
                                                borderRadius="100%"
                                                mt="15px"
                                                className="miniBg"
                                                right="0"
                                                top="0"
                                            ></Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Stack>
            </ScreenSize>
        </Box>
    );
};

export default Hero;
