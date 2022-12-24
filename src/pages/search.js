import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg";
import { fetchApi, baseUrl } from "../utils/fetchApi";

const Search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                padding="2"
                fontWeight="black"
                fontSize="large"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                    setSearchFilters((prev) => !prev);
                }}
                color="black"
            >
                <Text>Search Property by filters</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text padding="4" fontWeight="4" fontSize="2xl">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties.map((property) => (
                    <Property property={property} key={property.id} />
                ))}
            </Flex>
            {properties.length === 0 && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    marginTop="5"
                    flexDirection="column"
                    marginBotton="5"
                >
                    <Image src={noresult} alt="no result" />
                    <Text fontSize="2xl" marginTop="3">
                        No results found
                    </Text>
                </Flex>
            )}
        </Box>
    );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
    const purpose = query.purpose || "for-rent";
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || "0";
    const maxPrice = query.maxPrice || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000";
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";

    const data = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
    );

    return {
        props: {
            properties: data?.hits,
        },
    };
};
