import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Icon,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
} from "@chakra-ui/react";
// import { HiBars3CenterLeft } from "react-icons/hi";
import { FaBars, FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";

const NavLink = ({ children, href }) => (
    <Link
        px={5}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "underline",
        }}
        href={href}
        color="brand.fadeGray"
    >
        {children}
    </Link>
);

export default function Nav() {
    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right={"0"}
                bgColor="brand.blurBg"
        //     bgColor={"#1f2937"}
            w="100%"
            backdropFilter="auto"
            backdropBlur="24px"
            color="#fff"
        //     boxShadow={"md"}
	    zIndex="overlay"
        >
            <ScreenSize>
                <Flex
                    h={"20"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Text fontSize={["20px", null, "32px"]} fontWeight={"600"}>
                        Generous Sheeps
                    </Text>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7} align="center">
                            <Box display={["none", null, "block"]}>
                                {NavContent.map(({ text, href }, i) => {
                                    return (
                                        <NavLink key={i} href={href}>
                                            {text}
                                        </NavLink>
                                    );
                                })}
                            </Box>

                            {/* Socail ICONS  */}
                            <Flex display={["none", null, "flex"]} gap="32px">
                                <Flex
                                    justify={"center"}
                                    align="center"
                                    bgColor="brand.gray"
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
                                    <Icon
                                        as={FaDiscord}
                                        width="25px"
                                        h="25px"
                                    />
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
                                    <Icon
                                        as={FaTwitter}
                                        width="25px"
                                        h="25px"
                                    />
                                </Flex>
                                {/* <Icon as={FaTwitter} /> */}
                            </Flex>
                        </Stack>
                    </Flex>

                    <Box display={["block", null, "none"]}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                color="#fff"
                                minW={"100%"}
                            >
                                <Flex
                                    w="40px"
                                    h="40px"
                                    bgColor="brand.purple"
                                    align={"center"}
                                    justify={"center"}
                                    borderRadius="50%"
                                >
                                    <Icon as={FaBars} w="20px" h="20px" />
                                </Flex>
                            </MenuButton>
                            <MenuList
                                alignItems={"center"}
                                bgColor="brand.blurBg"
                            >
                                {NavContent.map(({ text, href }, i) => {
                                    return (
                                        <Box
                                            key={i}
                                            bgColor="brand.blurBg"
                                            _hover={{
                                                bgColor: "brand.blurBg",
                                            }}
                                            _focus={{
                                                bgColor: "brand.blurBg",
                                            }}
                                        >
                                            <Link
                                                display="block"
                                                py="8px"
                                                px="16px"
                                                href={href}
                                                w="100%"
                                                h="100%"
                                                color="brand.fadeGray"
                                            >
                                                {text}
                                            </Link>
                                        </Box>
                                    );
                                })}
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </ScreenSize>
        </Box>
    );
}

const NavContent = [
    {
<<<<<<< HEAD
        href: "#",
        text: "Home",
    },
    {
        href: "#gallery",
        text: "Gallery",
=======
        href: "/",
        text: "Home",
    },
    {
        href: "#whitelist",
        text: "Whitelist",
>>>>>>> c88e4ce8a6fa9077b0116a7761c04a6d7f80a0b2
    },
    {
        href: "#about",
        text: "About",
    },
    {
        href: "#roadmap",
        text: "Roadmap",
    },
    {
        href: "#faq",
        text: "FAQ",
    },
];
