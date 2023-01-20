/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Box,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../../../Store/Context';

const Status = ({ tableLeft, leftHeaderKeys }) => {
	// // eslint-disable-next-line arrow-body-style
	const headerKeys = leftHeaderKeys.slice(0, 4)?.map((key) => (
		<Th key={uuidv4()} color="#fff">
			<Box p={3}>{key}</Box>
		</Th>
	));

	const data = tableLeft?.map((value) => {
		// console.log(Object.values(value));
		const keys = Object.values(value);

		const status = value.Matching === 'Yes';
		return (
			<Tr
				fontSize="xs"
				height="65px"
				bg={status ? `#B7EDD6` : `#F1AAA5`}
				borderY="8px solid #fff"
				key={value.Date}
			>
				<Td>
					<Box p={3}>{keys[0]}</Box>
				</Td>
				<Td>
					<Box
						display={keys[1] ? `block` : 'none'}
						// borderStart="1px solid #D0D5DD"
						p={3}
					>
						{keys[1]}
					</Box>
				</Td>
				<Td>
					<Box
						// borderStart="1px solid #D0D5DD"
						display={keys[2] ? `block` : 'none'}
						p={3}
					>
						{keys[2] ? `${keys[2]} ` : ''}
					</Box>
				</Td>
				<Td>
					<Box
						// borderStart="1px solid #D0D5DD"
						display={keys[3] ? `block` : 'none'}
						p={3}
					>
						{keys[3] ? `${keys[3]}` : ''}
					</Box>
				</Td>
			</Tr>
		);
	});

	return (
		<Box>
			<Box className="w-full bg-[#F9FAFB] p-2 font-medium text-center">
				ACCOUNT STATEMENT
			</Box>
			<TableContainer>
				<Table fontSize="xs" size="xs" variant="simple">
					<Thead mb="5" height="65px">
						<Tr bg="#000">{headerKeys}</Tr>
					</Thead>
					<Tbody>{data}</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Status;
