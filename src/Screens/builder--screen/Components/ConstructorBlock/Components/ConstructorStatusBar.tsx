export const ConstructorStatusBar = () => {
	const getMinutes = (date: Date) => date.getMinutes().toString().length === 1
		? '0' + date.getMinutes().toString()
		: date.getMinutes().toString()
	
	return <div className="constructorBlock--statusBar">
		<time>{new Date().getHours()}:{getMinutes(new Date())}</time>
		<div>
			<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M16.5 0.666748H15.5C14.9477 0.666748 14.5 1.11446 14.5 1.66675V10.3334C14.5 10.8857 14.9477 11.3334 15.5 11.3334H16.5C17.0523 11.3334 17.5 10.8857 17.5 10.3334V1.66675C17.5 1.11446 17.0523 0.666748 16.5 0.666748ZM10.8333 3.00008H11.8333C12.3856 3.00008 12.8333 3.4478 12.8333 4.00008V10.3334C12.8333 10.8857 12.3856 11.3334 11.8333 11.3334H10.8333C10.281 11.3334 9.83333 10.8857 9.83333 10.3334V4.00008C9.83333 3.4478 10.281 3.00008 10.8333 3.00008ZM7.16667 5.33341H6.16667C5.61438 5.33341 5.16667 5.78113 5.16667 6.33341V10.3334C5.16667 10.8857 5.61438 11.3334 6.16667 11.3334H7.16667C7.71895 11.3334 8.16667 10.8857 8.16667 10.3334V6.33341C8.16667 5.78113 7.71895 5.33341 7.16667 5.33341ZM2.5 7.33341H1.5C0.947715 7.33341 0.5 7.78113 0.5 8.33341V10.3334C0.5 10.8857 0.947715 11.3334 1.5 11.3334H2.5C3.05228 11.3334 3.5 10.8857 3.5 10.3334V8.33341C3.5 7.78113 3.05228 7.33341 2.5 7.33341Z" />
			</svg>
			<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M8.16707 2.61504C10.3918 2.61514 12.5315 3.46925 14.1438 5.00084C14.2652 5.11909 14.4593 5.1176 14.5789 4.9975L15.7395 3.82717C15.8 3.76626 15.8338 3.68375 15.8333 3.5979C15.8328 3.51205 15.7981 3.42994 15.7368 3.36974C11.5049 -0.682491 4.82857 -0.682491 0.596657 3.36974C0.535354 3.4299 0.500572 3.51198 0.500007 3.59783C0.499442 3.68368 0.53314 3.76621 0.593645 3.82717L1.75459 4.9975C1.87409 5.11778 2.06831 5.11927 2.18965 5.00084C3.80221 3.46915 5.94212 2.61504 8.16707 2.61504ZM8.16707 6.42263C9.38942 6.42255 10.5681 6.87651 11.4742 7.69628C11.5968 7.81263 11.7898 7.8101 11.9093 7.6906L13.0685 6.52027C13.1296 6.45888 13.1635 6.3756 13.1626 6.28907C13.1617 6.20253 13.1261 6.11996 13.0639 6.05983C10.3047 3.49542 6.03178 3.49542 3.27262 6.05983C3.2103 6.11996 3.17474 6.20257 3.17392 6.28914C3.1731 6.3757 3.20709 6.45897 3.26827 6.52027L4.42721 7.6906C4.54667 7.8101 4.73972 7.81263 4.86227 7.69628C5.76774 6.87705 6.94553 6.42313 8.16707 6.42263ZM10.4893 8.98446C10.4911 9.07124 10.4569 9.15491 10.3949 9.2157L8.38962 11.2377C8.33084 11.2971 8.25069 11.3306 8.16707 11.3306C8.08345 11.3306 8.0033 11.2971 7.94452 11.2377L5.93888 9.2157C5.87693 9.15486 5.84284 9.07117 5.84468 8.98439C5.84652 8.89761 5.88411 8.81544 5.94859 8.75727C7.22925 7.675 9.10489 7.675 10.3856 8.75727C10.45 8.81548 10.4875 8.89769 10.4893 8.98446Z" />
			</svg>
			<svg width="26" height="12" viewBox="0 0 26 12" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
				<rect opacity="0.35" x="1.33301" y="0.833328" width="21" height="10.3333" rx="2.16667" stroke="black"/>
				<path opacity="0.4" d="M23.833 4V8C24.6377 7.66122 25.161 6.87313 25.161 6C25.161 5.12687 24.6377 4.33878 23.833 4" fill="black"/>
				<rect x="2.83301" y="2.33333" width="18" height="7.33333" rx="1.33333" fill="black"/>
			</svg>
		</div>
	</div>
}