import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon,
    Text,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { useEffect } from "react";

const Que = () => {
    return (
        <Accordion>
            {faq.map((item, i) => {
                return (
                    <AccordionItem
                        mb="20px"
                        key={i}
                        border="none"
                        px={["10px", null, "20px"]}
                    >
                        {({ isExpanded }) => (
                            <>
                                <Text>
                                    <AccordionButton
                                        bgColor={"brand.purple"}
                                        py="16px"
                                        _focus={{ bgColor: "brand.purple" }}
                                        color="#fff"
                                        _active={{ bgColor: "brand.purple" }}
                                        borderRadius="3px"
                                    >
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                            fontSize={["14px", null, "16px"]}
                                            fontWeight="900"
                                        >
                                            {item.que}
                                        </Box>
                                        {isExpanded ? (
                                            <Icon
                                                as={AiOutlineMinus}
                                                fontSize="20px"
                                            />
                                        ) : (
                                            <Icon
                                                as={AiOutlinePlus}
                                                fontSize="20px"
                                            />
                                        )}
                                    </AccordionButton>
                                </Text>
                                <AccordionPanel
                                    pb={4}
                                    color="rgba(255, 255, 255, 0.7)"
                                    fontSize="15px"
                                    //     borderStyle={"dotted"}
                                    borderColor="#FFF"
                                    border="2px"
                                    borderTop="none"
                                >
                                    {item.ans}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default Que;

const faq = [
    {
        que: "🐑 Who are the Generous Sheeps?",
        ans: "Generous Sheeps is a collection of 555 Generous Rams,Ewe and lambs deployed to the Solana Blockchain to rescue/help victim that were part of the Solana breakdown;and they express they're generousity by giving back they're tokens ($wool) or sol to they're holders who are generous too😏.",
    },
    {
        que: "🐑 Why is the collection little?",
        ans: "Baa,baa,baa....... The Generous Sheeps are a little flock atm and this is they're first flock but there's gonna be a time when others sheeps will hear of they're kind heartedness and join em (Gen 2).",
    },

    {
        que: "🐑 What will be the supply of the Gen 2?",
        ans: "The Generous Sheeps would have gathered alot of audience by then and will a have a supply of 2222 sheeps in the fold.",
    },

    {
        que: "🐑 What do i stand to gain as a holder of a Generous Sheep?",
        ans: "Remember the sheeps are generous so they reward they're owners with $wool or in sol Weekly or monthly.",
    },

    {
        que: "🐑What will be the value of $wool? ",
        ans: "The sheep aren't aware of that atm..... but the shepherd will tell em when it's time🫡.",
    },
];
