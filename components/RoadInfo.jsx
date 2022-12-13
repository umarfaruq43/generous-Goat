import { ReactNode } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    SimpleGrid,
    UnorderedList,
    ListItem,
    ListIcon,
    List,
} from "@chakra-ui/react";
import { GiSheep } from "react-icons/gi";

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            w="100%"
            bg="brand.opacityBg"
            boxShadow={"lg"}
            px={8}
            py="8"
            rounded={"xl"}
            align={"center"}
            pos={"relative"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderBottom: "solid",
                borderBottomWidth: 16,
                borderBottomColor: "brand.opacityBg",
                pos: "absolute",
                top: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={"h3"} fontSize={"xl"}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialAvatar = ({ text, name, title }) => {
    return (
        <Flex align={"center"} mb={8} direction={"column"}>
            <Flex
                justify={"center"}
                fontSize="20px"
                shadow="lg"
                fontWeight="900"
                align="center"
                bgColor="brand.purple"
                w="60px"
                h="60px"
                borderRadius={"50%"}
            >
                {text}
            </Flex>
        </Flex>
    );
};

export default function WithSpeechBubbles() {
    return (
        <Box>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
                <SimpleGrid
                    minChildWidth={"280px"}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <Testimonial>
                        <TestimonialAvatar text="20%" />
                        <TestimonialContent>
                            <TestimonialText>
                                {/* ****** LIst STart ******* */}
                                <List color="brand.white">
                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Creation of discord and other socials ✅
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Dicord launch ✅
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Build the Community through games,
                                        Giveaways and raids ✅
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Marketing
                                    </ListItem>
                                </List>
                            </TestimonialText>
                        </TestimonialContent>
                    </Testimonial>

                    {/* stage two  */}

                    <Testimonial>
                        <TestimonialAvatar text="40%" />
                        <TestimonialContent>
                            <TestimonialText>
                                {/* ****** LIst STart ******* */}
                                <List color="brand.white">
                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Tokens Launch
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Generous Sheeps MINT! (Gen 1)
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Listing on the top market places
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Weekly Rewards to holders (Rewards in
                                        Sol and Tokens).....more details in
                                        MINT-INFO
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Release Staking Site to earn $Wool
                                    </ListItem>
                                </List>
                            </TestimonialText>
                        </TestimonialContent>
                    </Testimonial>

                    {/* {stage three } */}

                    <Testimonial>
                        <TestimonialAvatar text="60%" />
                        <TestimonialContent>
                            <TestimonialText>
                                {/* ****** LIst STart ******* */}
                                <List color="brand.white">
                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Raffles activated
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Donations to individuals that were
                                        victims of the Solana crash.
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        More marketing
                                    </ListItem>
                                </List>
                            </TestimonialText>
                        </TestimonialContent>
                    </Testimonial>

                    {/* Stage Four  */}
                    <Testimonial>
                        <TestimonialAvatar text="80%" />
                        <TestimonialContent>
                            <TestimonialText>
                                {/* ****** LIst STart ******* */}
                                <List color="brand.white">
                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        2nd Generous Sheeps MINT!(Gen 2)
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Weekly Rewards to Gen 1 & Gen 2 holders.
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        P2E Released
                                    </ListItem>

                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        More building and marketing
                                    </ListItem>
                                </List>
                            </TestimonialText>
                        </TestimonialContent>
                    </Testimonial>

                    {/* Stage Five */}

                    <Testimonial>
                        <TestimonialAvatar text="100%" />
                        <TestimonialContent>
                            <TestimonialText>
                                {/* ****** LIst STart ******* */}
                                <List color="brand.white">
                                    <ListItem fontSize={"14px"}>
                                        <ListIcon
                                            as={GiSheep}
                                            color="brand.purple"
                                            fontSize="25px"
                                        />
                                        Generous Sheeps DAO is Established!`
                                    </ListItem>
                                </List>
                            </TestimonialText>
                        </TestimonialContent>
                    </Testimonial>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
