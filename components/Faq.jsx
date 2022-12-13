import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";
import Que from "./Que";

const Faq = () => {
    return (
        <ScreenSize py="64px">
            <Box id="faq" pb="32px">
                <Text
                    fontWeight="600"
                    fontSize={["24px", "36px", "48px"]}
                    textAlign="center"
                    mx="auto"
                    maxWidth="700px"
                    color="brand.white"
                >
                    FREQUENTLY ASKED{" "}
                    <Text as="span" color="brand.cyan">
                        QUESTIONS
                    </Text>{" "}
                </Text>
            </Box>

            <Flex
                maxWidth="1200px"
                mx="auto"
                justify="center"
                align="center"
                // gap="32px"
            >
                <Box w={["100%", null, "50%"]}>
                    <Que />
                </Box>

                {/* <Text pb="30px"></Text> */}
            </Flex>
        </ScreenSize>
    );
};

export default Faq;
