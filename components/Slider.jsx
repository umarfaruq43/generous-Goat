import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Box>
            <ScreenSize>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1900}
                    keyBoardControl={true}
                    customTransition="all 2s"
                    transitionDuration={1500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={false}
                    //     deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {img.map((item, i) => {
                        return (
                            <Box
                                key={i}
                                // overflow={"hidden"}
                                px={["10px",null,"32px"]}
                                className="sliderHover"
				my="20px"
                            >
                                <Image
                                    src={item}
                                    alt="Slider"
                                    borderRadius="15px"
				    shadow={"lg"}
                                />
                            </Box>
                        );
                    })}
                </Carousel>
                ;
            </ScreenSize>
        </Box>
    );
};

export default Slider;

let img = [
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823363817816124/Screenshot_20221206-235437.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823364228841542/Screenshot_20221206-235522.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823364446953543/Screenshot_20221206-235510.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823364631511111/Screenshot_20221205-222829.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823364887347322/Screenshot_20221206-235613.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823365139013722/Screenshot_20221206-235600.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823365382291476/Screenshot_20221206-235712.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823365629739018/Screenshot_20221206-235656.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823384671895612/Screenshot_20221206-235643.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823384952918078/Screenshot_20221206-235740.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823385238122586/Screenshot_20221206-235759.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823385619812353/Screenshot_20221206-235842.jpg",
    "https://cdn.discordapp.com/attachments/1049748245217284096/1049823385439453284/Screenshot_20221206-235831.jpg",
];
