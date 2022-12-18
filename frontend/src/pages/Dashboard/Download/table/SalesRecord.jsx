import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Flex,
	Box,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import {
	TableDropDown,
	// TableDropDownIcon,
	TableSearchBox,
} from '../minicomponents/MiniTableComponents';

// eslint-disable-next-line react/prop-types
const SalesRecord = ({ tableRight, rightHeaderKeys }) => {
	// eslint-disable-next-line react/prop-types
	const headerKeys = rightHeaderKeys.slice(0, 4).map((key, index) => (
		// eslint-disable-next-line react/no-array-index-key
		<Th key={index} color="#fff">
			<Box p={3}>{key}</Box>
		</Th>
	));

	// eslint-disable-next-line react/prop-types
	const data = tableRight?.map((value, index) => {
		const keys = Object.values(value);

		if (keys[0] !== '') {
			return (
				<Tr
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					fontSize="xs"
					height="65px"
					borderY="8px solid #fff"
					bg="#B7EDD6"
				>
					{/* <Td>{value.Date}</Td> */}
					<Td>
						<Box p={3}>{keys[0]}</Box>
					</Td>
					<Td>
						<Box p={3}>{keys[1]}</Box>
					</Td>
					<Td>
						<Box p={3}>{keys[2]}</Box>
					</Td>
					<Td>
						<Box p={3}>{keys[3]}</Box>
					</Td>
				</Tr>
			);
		}
		// return <Td>{keys[0]}</Td>;

		return (
			<Tr key={uuidv4()} height="65px" borderBottom="8px solid #fff">
				<Td colSpan={4} p={0}>
					<Flex
						border="1px solid #D0D5DD"
						p={2}
						borderRadius="8px"
						gap={2}
						justifyContent="space-between"
					>
						<Box flex={1}>
							<TableSearchBox />
						</Box>
						<Box>
							<TableDropDown />
						</Box>
					</Flex>
				</Td>
			</Tr>
		);
	});

	return (
		<TableContainer>
			<Table fontSize="xs" size="xs" variant="unstyled">
				<Thead height="65px">
					<Tr bg="#000">{headerKeys}</Tr>
				</Thead>
				<Tbody>{data}</Tbody>
			</Table>
		</TableContainer>
	);
};

export default SalesRecord;
