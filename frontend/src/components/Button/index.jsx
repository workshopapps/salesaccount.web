import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ path, isPrimary, title }) => (
	<a
		href={path}
		className={`rounded-md py-[12px] px-[20px] inline-block min-w-max cursor-pointer text-[18px] ${
			isPrimary
				? 'bg-[#FFFFFF}] text-[#1570EF] border border-[#1570EF]'
				: 'bg-[#2E90FA] text-white'
		}  `}
	>
		{title}
	</a>
);
export default Button;

Button.propTypes = {
	path: PropTypes.string.isRequired,
	isPrimary: PropTypes.string,
	title: PropTypes.string.isRequired,
};

Button.defaultProps = {
	isPrimary: '',
};
