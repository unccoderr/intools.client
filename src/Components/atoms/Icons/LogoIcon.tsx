import { getClassname } from "../../utils"

import { DefaultProps } from "../../DefaultProps"

import './style.css'

export const LogoIcon = (props: Omit<DefaultProps, 'children'>) => {
	const className = getClassname('a__icon_logo', [], props.className)

	return <svg className={className} width="40" height="40" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="1.1125" y="1.1125" width="86.775" height="86.775" rx="16.6875" fill="#FCFCFC"/>
		<ellipse cx="19.7555" cy="22.4489" rx="10.8903" ry="10.8903" fill="url(#paint0_linear_70_11601)"/>
		<ellipse cx="19.7553" cy="22.449" rx="9.94327" ry="9.94328" fill="white"/>
		<circle cx="19.8415" cy="22.4489" r="8.9963" fill="url(#paint1_linear_70_11601)"/>
		<path d="M35.0596 21.2321C35.0596 20.1861 35.9075 19.3381 36.9535 19.3381H45.4763C46.5223 19.3381 47.3703 20.1861 47.3703 21.2321V23.5995C47.3703 24.6455 46.5223 25.4935 45.4763 25.4935H36.9535C35.9075 25.4935 35.0596 24.6455 35.0596 23.5995V21.2321Z" fill="#323232"/>
		<path d="M10.8452 38.2887C10.8452 37.2427 11.6932 36.3948 12.7392 36.3948H34.5363C35.5823 36.3948 36.4303 37.2427 36.4303 38.2887V40.5925C36.4303 41.6385 35.5823 42.4865 34.5363 42.4865H12.7392C11.6932 42.4865 10.8452 41.6385 10.8452 40.5925V38.2887Z" fill="#323232"/>
		<path d="M10.8452 46.8169C10.8452 45.7709 11.6932 44.923 12.7392 44.923H75.8074C76.8534 44.923 77.7014 45.7709 77.7014 46.8169V49.1207C77.7014 50.1667 76.8534 51.0147 75.8074 51.0147H12.7392C11.6932 51.0147 10.8452 50.1667 10.8452 49.1207V46.8169Z" fill="#323232"/>
		<path d="M34.0702 57.7797C34.0702 56.7337 34.9182 55.8857 35.9642 55.8857H53.1465C54.1925 55.8857 55.0405 56.7337 55.0405 57.7797V75.0081C55.0405 76.0541 54.1925 76.902 53.1465 76.902H35.9642C34.9182 76.902 34.0702 76.0541 34.0702 75.0081V57.7797Z" fill="url(#paint2_linear_70_11601)"/>
		<path d="M11.4541 57.7797C11.4541 56.7337 12.3021 55.8857 13.3481 55.8857H30.5304C31.5764 55.8857 32.4244 56.7337 32.4244 57.7797V75.0081C32.4244 76.0541 31.5764 76.902 30.5304 76.902H13.3481C12.3021 76.902 11.4541 76.0541 11.4541 75.0081V57.7797Z" fill="url(#paint3_linear_70_11601)"/>
		<path d="M58.5618 55.8857C57.5158 55.8857 56.6679 56.7337 56.6679 57.7797V75.0081C56.6679 76.0541 57.5158 76.902 58.5618 76.902H75.7442C76.7902 76.902 77.6381 76.0541 77.6381 75.0081V57.7797C77.6381 56.7337 76.7902 55.8857 75.7442 55.8857H58.5618Z" fill="url(#paint4_linear_70_11601)"/>
		<path d="M50.2114 21.2321C50.2114 20.1861 51.0594 19.3381 52.1054 19.3381H60.6282C61.6742 19.3381 62.5221 20.1861 62.5221 21.2321V23.5995C62.5221 24.6455 61.6742 25.4935 60.6282 25.4935H52.1054C51.0594 25.4935 50.2114 24.6455 50.2114 23.5995V21.2321Z" fill="#323232"/>
		<path d="M65.3625 21.2321C65.3625 20.1861 66.2105 19.3381 67.2565 19.3381H75.7793C76.8253 19.3381 77.6733 20.1861 77.6733 21.2321V23.5995C77.6733 24.6455 76.8253 25.4935 75.7793 25.4935H67.2565C66.2105 25.4935 65.3625 24.6455 65.3625 23.5995V21.2321Z" fill="#323232"/>
		<rect x="1.1125" y="1.1125" width="86.775" height="86.775" rx="16.6875" stroke="#F2F2F2" strokeWidth="2.225"/>
		<defs>
			<linearGradient id="paint0_linear_70_11601" x1="19.7555" y1="11.5586" x2="19.7555" y2="33.3391" gradientUnits="userSpaceOnUse">
				<stop stopColor="#DE0046"/>
				<stop offset="1" stopColor="#F7A34B"/>
			</linearGradient>
			<linearGradient id="paint1_linear_70_11601" x1="11.6597" y1="13.4526" x2="29.6889" y2="15.0635" gradientUnits="userSpaceOnUse">
				<stop stopColor="#0099E6"/>
				<stop offset="1" stopColor="#791CCD"/>
			</linearGradient>
			<linearGradient id="paint2_linear_70_11601" x1="14.4501" y1="55.8858" x2="78.8775" y2="76.2917" gradientUnits="userSpaceOnUse">
				<stop stopColor="#751BCF"/>
				<stop offset="1" stopColor="#FF4963"/>
			</linearGradient>
			<linearGradient id="paint3_linear_70_11601" x1="14.4501" y1="55.8858" x2="78.8775" y2="76.2917" gradientUnits="userSpaceOnUse">
				<stop stopColor="#751BCF"/>
				<stop offset="1" stop-color="#FF4963"/>
			</linearGradient>
			<linearGradient id="paint4_linear_70_11601" x1="14.4501" y1="55.8858" x2="78.8775" y2="76.2917" gradientUnits="userSpaceOnUse">
				<stop stopColor="#751BCF"/>
				<stop offset="1" stopColor="#FF4963"/>
			</linearGradient>
		</defs>
	</svg>
}