import ReCAPTCHA from 'react-google-recaptcha';
import Modal from '../Modal/Modal';

/* eslint react/prop-types: 0 */
function Captcha({ captchaRef }) {
	// const key = process.env.REACT_APP_SITE_KEY;

	return (
		<Modal>
			<div className="bg-white h-max py-8  w-full md:w-[40%] lg:w-[30%] flex justify-center items-center">
				<ReCAPTCHA
					sitekey="6LfVut4jAAAAAMsFf3-0-NZxJWQLp8v1Duyjvoxx"
					ref={captchaRef}
				/>
			</div>
		</Modal>
	);
}

export default Captcha;
