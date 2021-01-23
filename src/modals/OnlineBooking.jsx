import React, { useEffect } from 'react';
import './OnlineBooking.css';

const OnlineBooking = ({ altClass }) => {
	const widget = document.createElement('script');
	widget.type = 'text/javascript';
	widget.async = true;
	widget.src = '//book.easytablebooking.com/javascripts/widget/v2/book.js';
	document.body.appendChild(widget);

	return(
		<div className={ `Online-Booking ${ altClass }` }>
			<div class="BookingBox" placeid="f6b52" language="se">
				<div class="BookingBoxContent">
				</div>
			</div>
		</div>
	);
}

export default OnlineBooking;