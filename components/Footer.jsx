import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";

const Footer = () => {
    return (
        <Box pb="20px">
            <ScreenSize>
                <Flex justify={"space-between"} align="center">
                    <Box>
                        <Flex  gap="15px">
                            <Flex
                                justify={"center"}
                                align="center"
                                bgColor="brand.cyan"
                                transitionDuration={".3s"}
                                _hover={{
                                    bgColor: "rgb(55 65 81)",
                                    shadow: "lg",
                                    transitionDuration: ".3s",
                                }}
                                w="48px"
                                h="48px"
                                borderRadius={"50%"}
                                cursor="pointer"
                                className="scale"
                            >
                                <Icon as={FaDiscord} width="25px" h="25px" />
                            </Flex>

                            <Flex
                                justify={"center"}
                                align="center"
                                bgColor="brand.primaryLight"
                                transitionDuration={".3s"}
                                _hover={{
                                    bgColor: "#6366f1",
                                    shadow: "lg",
                                    transitionDuration: ".3s",
                                }}
                                w="48px"
                                h="48px"
                                borderRadius={"50%"}
                                cursor="pointer"
                                className="scale"
                            >
                                <Icon as={FaTwitter} width="25px" h="25px" />
                            </Flex>
                            {/* <Icon as={FaTwitter} /> */}
                        </Flex>
                    </Box>
                    <Box>
                        <Text fontSize={["14px", null, "18px"]}>
                            <Text color="brand.white">&copy; 2020 Generous Sheeps</Text>
                        </Text>
                    </Box>
                </Flex>
            </ScreenSize>
        </Box>
    );
};

export default Footer;
