import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import BlogPreview from '../../components/BlogPreview';
import blogList from './fakedata/index';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

function Blogs() {
	return (
		<>
			<NavigationBar />
			<div className=" bg-[#D1E9FF] pt-16 pb-16">
				<h1 className="text-[#101828] font-semibold leading-[60px] text-5xl text-center">
					Our Blog
				</h1>
				<p className="text-[#101828] text-center font-normal text-lg leading-[22px] tracking-tighter mb-10">
					Get access to the latest industry news, interviews, technologies, and
					resources.
				</p>
				{/* <Search></Search>  Need to add Search bar here  */}
			</div>
			<div className="pt-6 pb-[278px]">
				<div className=" px-20 max-sm:px-0">
					<div className="px-8 max-w-7xl w-full  mx-auto max-[375px]:px-4">
						<div>
							<div className="flex flex-row flex-wrap gap-8 w-full justify-center items-center">
								{blogList.map((blogs) => (
									<div className=" w-[30%] max-lg:w-[46%] max-md:w-full max-sm:w-full">
										<BlogPreview
											key={blogs.id}
											slug={blogs.slug}
											title={blogs.title}
											category={blogs.category}
											highlight={blogs.higlight}
											author={blogs.author}
											dateCreated={blogs.dateCreated}
											thumbnail={blogs.thumbnail}
										/>
									</div>
								))}
							</div>
							<div className="flex justify-center items-center mt-16">
								<button
									type="button"
									className="text-[#175CD3] flex items-center justify-center gap-2 py-3 px-5 bg-[#F2F4F7] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] "
								>
									<FaArrowDown className=" text-[#175CD3]" />
									Load more
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Blogs;
