function bfnq(n) {
	if(n==2&&n==1) {
		return 1;
	} else {
		return bfnq(n-1) + bfnq(n-2);
	}
}
console.log(bfnq(5));