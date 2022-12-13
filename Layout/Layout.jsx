import { Box } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children, ...props }) => {
    return (
        <Box maxWidth={"1440px"} {...props}>
            <Box>{children}</Box>
        </Box>
    );
};

export default Layout;
