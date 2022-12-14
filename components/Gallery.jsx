import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";
import Slider from "./Slider";
const Gallery = () => {
    return (
        <Box mt="64px">
            <ScreenSize>
                <Box>
                    <Box>
                        <Heading textDecor={"underline"} color="brand.white">
                            Gallery
                        </Heading>
                    </Box>

                    <Box pt="50px">
                        <Slider />
                    </Box>
                </Box>
            </ScreenSize>
        </Box>
    );
};

export default Gallery;
