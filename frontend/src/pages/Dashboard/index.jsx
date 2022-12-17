import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';

const DashBoard = () => (
	<>
		<div className="w-full bg-white h-max pb-[3em]">
			<NavigationBar />
			<div className="flex flex-col items-center justify-center mt-[1em] md:mt-[3em]">
				<Box maxW="1440px" width="100%" px="80px">
					<Outlet />
				</Box>
			</div>
		</div>
		<div className="fixed bottom-0 bg-[#F9FAFB] flex justify-center items-center py-4 w-full max-md:hidden">
			<p className="font-normal text-xl text-[#1D2939] ">©reconcile.AI 2022</p>
		</div>
	</>
);

export default DashBoard;
