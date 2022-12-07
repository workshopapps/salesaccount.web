import React from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function DownloadButton({ fileId, fileName }) {
	const downloadFile = async () => {
		const input = document.getElementById(fileId);
		return html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			// eslint-disable-next-line
			const pdf = new jsPDF('portrait', 'px', 'A4');
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const imgProps = pdf.getImageProperties(imgData);
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
			pdf.save(`${fileName}`);
		});
	};

	return (
		<div className="button2 flex justify-center items-center  text-white bg-[#2E90FA] w-full py-[0.5em] rounded-md">
			<button onClick={downloadFile} type="button">
				Download
			</button>
		</div>
	);
}

DownloadButton.propTypes = {
	fileId: PropTypes.string.isRequired,
	fileName: PropTypes.string.isRequired,
};

export default DownloadButton;
