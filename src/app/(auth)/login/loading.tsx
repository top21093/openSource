'use client';
import MSpin from '@/components/MSpin';
import React from 'react';

export default function RootLoading() {
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<MSpin size='large'></MSpin>
		</div>
	);
}
