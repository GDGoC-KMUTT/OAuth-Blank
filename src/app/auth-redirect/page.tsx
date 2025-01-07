'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { environment } from '../env';
import { useEffect } from 'react';

const AuthRedirectPage = () => {
	const navigator = useRouter();
	const code = useSearchParams().get('code');
	const handleCallback = async () => {
		//IMPLEMENT_HERE
	};

	useEffect(() => {
		handleCallback();
	}, []);
	return (
		<div>
			<h1>Redirecting. . .</h1>
		</div>
	);
};

export default AuthRedirectPage;
