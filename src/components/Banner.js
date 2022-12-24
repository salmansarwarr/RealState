import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, background } from "@chakra-ui/react";

const Banner = ({
    imageUrl,
    title1,
    title2,
    desc1,
    linkName,
    buttonText,
    desc2,
    purpose,
}) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box p="5">
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
                {purpose}
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
                {title1}
                <br />
                {title2}
            </Text>
            <Text
                fontSize="lg"
                color="gray.700"
                fontWeight="medium"
                paddingTop="3"
                paddingBottom="3"
            >
                {desc1} <br /> {desc2}
            </Text>
            <Button fontSize="xl">
                <Link href={linkName}>
                    <a
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        {buttonText}
                    </a>
                </Link>
            </Button>
        </Box>
    </Flex>
);

export default Banner;
