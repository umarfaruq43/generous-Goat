import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";
import WithSpeechBubbles from "./RoadInfo";

const Roadmap = () => {
    return (
        <Box id="roadmap" bgImage="/about.png" bgPosition={"left"} bgRepeat="no-repeat" bgPos={"cover"}>
            <ScreenSize>
                <Box pt={["32px", null, "62px"]}>
                    <Text
                        fontWeight="600"
                        fontSize={["28px", "36px", "48px"]}
                        textAlign="center"
                        mx="auto"
                        maxWidth="700px"
                        pb="20"
                        color="brand.white"
                    >
                        <Text as="span" color="brand.cyan">
                            GENEROUS SHEEPS
                        </Text>{" "}
                        <br />
                        <Text
                            as="span"
                            textDecor="underline"
                            textDecorationColor={"brand.cyan"}
                        >
                            Roadmap
                        </Text>{" "}
                    </Text>
                </Box>
                <Box>
                    <WithSpeechBubbles />
                </Box>
            </ScreenSize>
        </Box>
    );
};

export default Roadmap;
